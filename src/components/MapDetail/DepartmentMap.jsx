import React, { useContext, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup, useMap } from "react-leaflet";
import { useGeoDataLoader } from "./GeoDataLoader";
import Loader from "../Loader";
import { IndicatorContext } from "../../contexts/IndicatorContext";
import { CrimeContext } from "../../contexts/CrimeContex";
import { PrimaryIndicatorContext } from "../../contexts/PrimaryIndicatorContext";
import { useViewMode } from "../../contexts/ViewMode";
import L from "leaflet";

// 🔹 Helpers
const normalizeCode = (c) => (c ? String(c).padStart(2, "0") : "");
const toNumberOrNull = (v) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

// 🔹 Color functions
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

const getPrimaryColor = (value) => {
  if (value === null) return "#FFFFFF";
  if (value > 150) return "#67001f";
  if (value > 80) return "#b2182b";
  if (value > 50) return "#d6604d";
  if (value > 10) return "#f4a582";
  return "#fddbc7";
};

// 🔹 Legend Component
const Legend = ({ type }) => {
  const map = useMap();
  useEffect(() => {
    const legend = L.control({ position: "bottomright" });
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      let ranges = [];
      if (type === "crime") {
        ranges = [
          { color: "#FF0000", label: "> 100,000" },
          { color: "#FF7F00", label: "60,000 - 100,000" },
          { color: "#FFB84D", label: "30,000 - 60,000" },
          { color: "#FFFF99", label: "1,000 - 30,000" },
          { color: "#FFFFFF", label: "0 - 1,000" },
        ];
      } else if (type === "indicator") {
        ranges = [
          { color: "#084081", label: "> 3,000,000" },
          { color: "#0868AC", label: "2,000,000 - 3,000,000" },
          { color: "#2B8CBE", label: "1,000,000 - 2,000,000" },
          { color: "#4EB3D3", label: "500,000 - 1,000,000" },
          { color: "#A8DDB5", label: "0 - 500,000" },
        ];
      } else if (type === "primary") {
        ranges = [
          { color: "#67001f", label: "> 40" },
          { color: "#b2182b", label: "40 - 30" },
          { color: "#d6604d", label: "30 - 20" },
          { color: "#f4a582", label: "20 - 10" },
          { color: "#fddbc7", label: "10 - 0" },
        ];
      }

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

// 🔹 DepartmentMap Component
export default function DepartmentMap({ onSelect }) {
  const {
    features,
    loading: geoLoading,
    error: geoError,
  } = useGeoDataLoader("https://cencusbackend.onrender.com/api/departments");

  const { viewMode } = useViewMode();
  const {
    filters,
    indicator,
    loading: indicatorLoading,
    error: indicatorError,
    fetchIndicator, // ✅ import the API function from context
  } = useContext(IndicatorContext);
  const {
    crimeByDepartment,
    loading: crimeLoading,
    error: crimeError,
  } = useContext(CrimeContext);
  const {
    primaryIndicator,
    loading: primaryLoading,
    error: primaryError,
    cancelFetch,
  } = useContext(PrimaryIndicatorContext);

  // Cancel primary fetch when viewMode changes
  useEffect(() => {
    if (viewMode !== "primary") cancelFetch();
  }, [viewMode, cancelFetch]);

  // Memoized value map based on viewMode
  const valueMap = useMemo(() => {
    const map = new Map();
    const data =
      viewMode === "crime"
        ? crimeByDepartment
        : viewMode === "indicator"
        ? indicator
        : primaryIndicator;

    if (Array.isArray(data)) {
      data.forEach((entry) => {
        const code = normalizeCode(
          entry.department_code ?? entry.code ?? entry.DPTO_CCDGO
        );
        map.set(code, toNumberOrNull(entry.total));
      });
    }
    return map;
  }, [viewMode, crimeByDepartment, indicator, primaryIndicator]);

  const mapType = viewMode;

  // Safe error message extraction
  const getErrorMessage = () => {
    const err = geoError || crimeError || indicatorError || primaryError;
    if (!err) return null;
    if (err instanceof Error) return err.message;
    if (typeof err === "string") return err;
    return "Unknown error";
  };
  const errorMessage = getErrorMessage();

  // Render nothing until department selected in municipality view
  if (!filters.department_code && viewMode === "municipality") {
    return <p>Select a department to view map.</p>;
  }

  return (
    <>
      <MapContainer
        center={[4.5709, -74.2973]}
        zoom={6}
        style={{ height: "100vh", width: "100%" }}
        zoomControl={false}
        dragging={true}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Legend type={mapType} />

        {/* Loader overlay while fetching data */}
        {(geoLoading || crimeLoading || indicatorLoading || primaryLoading) && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(255,255,255,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <Loader />
          </div>
        )}

        {/* Render GeoJSON layers once features are loaded */}
        {features.length > 0 &&
          features.map((f, idx) => {
            const deptCodeRaw =
              f.properties.DPTO_CCDGO ?? f.properties.DPTO ?? f.properties.code;
            const deptCode = normalizeCode(deptCodeRaw);
            const value = valueMap.get(deptCode) ?? null;
            const fillColor =
              mapType === "crime"
                ? getCrimeColor(value)
                : mapType === "indicator"
                ? getIndicatorColor(value)
                : getPrimaryColor(value);

            return (
              <GeoJSON
                key={`${deptCode}-${idx}`}
                data={f}
                style={{
                  fillColor,
                  weight: 1,
                  color: "#000",
                  fillOpacity: 0.7,
                }}
              >
                <Popup>
                  <div style={{ minWidth: "200px" }}>
                    <h4>
                      {f.properties.DPTO_CNMBR ??
                        f.properties.NOM_DPTO ??
                        f.properties.name}
                    </h4>
                    {value != null ? (
                      <p>
                        <strong>{mapType}:</strong> {value.toLocaleString()}
                      </p>
                    ) : (
                      <p>No data available</p>
                    )}
                    <button
                      onClick={() => {
                        onSelect(deptCodeRaw);
                        // ✅ Call API again with existing column + selected department
                        fetchIndicator({
                          column: filters.column,
                          ...(viewMode !== "crime"
                            ? { department_code: deptCodeRaw }
                            : {}),
                        });
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

      {errorMessage && <p style={{ color: "red" }}>Error: {errorMessage}</p>}
    </>
  );
}
