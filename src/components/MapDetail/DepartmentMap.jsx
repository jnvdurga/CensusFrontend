import React, { useContext, useMemo } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup, useMap } from "react-leaflet";
import { useGeoDataLoader } from "./GeoDataLoader";
import Loader from "../Loader";
import { IndicatorContext } from "../../contexts/IndicatorContext";
import { CrimeContext } from "../../contexts/CrimeContex";
import { useViewMode } from "../../contexts/ViewMode";
import L from "leaflet";

// 🔹 Helpers
const normalizeCode = (c) => (c ? String(c).padStart(2, "0") : "");
const toNumberOrNull = (v) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

const getCrimeColor = (count) => {
  if (count === null) return "#FFFFFF";
  if (count > 100000) return "#FF0000";
  if (count > 60000) return "#FF7F00";
  if (count > 30000) return "#FFB84D";
  if (count > 1000) return "#FFFF99";
  return "#FFFFFF";
};

const getIndicatorColor = (count) => {
  if (count === null) return "#FFFFFF";
  if (count > 3000000) return "#084081";
  if (count > 2000000) return "#0868AC";
  if (count > 1000000) return "#2B8CBE";
  if (count > 500000) return "#4EB3D3";
  return "#A8DDB5";
};

const Legend = ({ type }) => {
  const map = useMap();
  React.useEffect(() => {
    const legend = L.control({ position: "topleft" });
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const ranges =
        type === "crime"
          ? [
              { color: "#FF0000", label: "> 100,000" },
              { color: "#FF7F00", label: "60,000 - 100,000" },
              { color: "#FFB84D", label: "30,000 - 60,000" },
              { color: "#FFFF99", label: "1,000 - 30,000" },
              { color: "#FFFFFF", label: "0 - 1,000" },
            ]
          : [
              { color: "#084081", label: "> 3,000,000" },
              { color: "#0868AC", label: "2,000,000 - 3,000,000" },
              { color: "#2B8CBE", label: "1,000,000 - 2,000,000" },
              { color: "#4EB3D3", label: "500,000 - 1,000,000" },
              { color: "#A8DDB5", label: "0 - 500,000" },
            ];

      div.style.background = "white";
      div.style.padding = "10px";
      div.style.borderRadius = "5px";
      div.style.fontSize = "14px";
      div.style.boxShadow = "0 0 6px rgba(0,0,0,0.3)";
      ranges.forEach((r) => {
        div.innerHTML += `<div><i style="background:${r.color};width:18px;height:18px;display:inline-block;margin-right:8px;border:1px solid #000;"></i>${r.label}</div>`;
      });
      return div;
    };
    legend.addTo(map);
    return () => map.removeControl(legend);
  }, [map, type]);
  return null;
};

export default function DepartmentMap({ onSelect }) {
  const { features, loading: geoLoading, error: geoError } =
    useGeoDataLoader("https://cencusbackend.onrender.com/api/departments");

  const { viewMode } = useViewMode();
  const { filters, setFilters, indicator, loading: indicatorLoading, error: indicatorError } =
    useContext(IndicatorContext);
  const { crimeByDepartment, loading: crimeLoading, error: crimeError } = useContext(CrimeContext);

  // 🔹 Compute value maps
  const { crimeValueMap, indicatorValueMap, numericCount } = useMemo(() => {
    const crimeMap = new Map();
    const indicatorMap = new Map();

    if (Array.isArray(crimeByDepartment)) {
      crimeByDepartment.forEach((entry) => {
        const code = normalizeCode(entry.department_code ?? entry.code ?? entry.DPTO_CCDGO);
        crimeMap.set(code, toNumberOrNull(entry.total));
      });
    }

    if (Array.isArray(indicator)) {
      indicator.forEach((entry) => {
        const code = normalizeCode(entry.department_code ?? entry.code ?? entry.DPTO_CCDGO);
        indicatorMap.set(code, toNumberOrNull(entry.total));
      });
    }

    return {
      crimeValueMap: crimeMap,
      indicatorValueMap: indicatorMap,
      numericCount: (crimeByDepartment?.length || 0) + (indicator?.length || 0),
    };
  }, [crimeByDepartment, indicator, viewMode]);

  const valueMap = viewMode === "crime" ? crimeValueMap : indicatorValueMap;

  // 🔹 Render nothing until Municipality triggers fetch
  if (!filters.department_code && viewMode === "municipality") {
    return <p>Select a department to view map.</p>;
  }

  // 🔹 Safe error message extraction
  const getErrorMessage = () => {
    const err = geoError || crimeError || indicatorError;
    if (!err) return null;
    if (err instanceof Error) return err.message;
    if (typeof err === "string") return err;
    return "Unknown error";
  };

  const errorMessage = getErrorMessage();

  return (
    <>
      {(geoLoading || crimeLoading || indicatorLoading) && <Loader />}
      {errorMessage && <p style={{ color: "red" }}>Error: {errorMessage}</p>}

      <MapContainer center={[4.5709, -74.2973]} zoom={6} style={{ height: "100vh", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Legend type={viewMode} />
        {features.map((f, idx) => {
          const deptCodeRaw = f.properties.DPTO_CCDGO ?? f.properties.DPTO ?? f.properties.code;
          const deptCode = normalizeCode(deptCodeRaw);
          const deptName = f.properties.DPTO_CNMBR ?? f.properties.NOM_DPTO ?? f.properties.name;
          const value = valueMap.get(deptCode) ?? null;
          const fillColor = viewMode === "crime" ? getCrimeColor(value) : getIndicatorColor(value);

          return (
            <GeoJSON
              key={`${deptCode}-${viewMode}-${numericCount}-${idx}`}
              data={f}
              style={{ fillColor, weight: 1, color: "#000", fillOpacity: 0.7 }}
            >
              <Popup>
                <div style={{ minWidth: "200px" }}>
                  <h4>{deptName}</h4>
                  {value != null ? (
                    <p>
                      <strong>{viewMode}:</strong> {value.toLocaleString()}
                    </p>
                  ) : (
                    <p>No data available</p>
                  )}
                  <button
                    onClick={() => {
                      onSelect(deptCodeRaw);
                      setFilters((prev) => ({ ...prev, department_code: deptCodeRaw }));
                    }}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    Select Department
                  </button>
                </div>
              </Popup>
            </GeoJSON>
          );
        })}
      </MapContainer>
    </>
  );
}
