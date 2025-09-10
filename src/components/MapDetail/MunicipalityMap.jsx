import React, { useEffect, useMemo, useState, useContext } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useViewMode } from "../../contexts/ViewMode";
import { IndicatorContext } from "../../contexts/IndicatorContext";
import { MunicipalityContext } from "../../contexts/MunicipalityContext";
import { CrimeContext } from "../../contexts/CrimeContex";
import { PrimaryIndicatorContext } from "../../contexts/PrimaryIndicatorContext";

// Normalize codes consistently
const normalizeCode = (code) => {
  if (!code) return "";
  return parseInt(code.toString().trim(), 10); // remove leading zeros
};

// Heatmap color functions
const getCrimeColor = (count) => {
  if (count == null) return "#FFFFFF";
  if (count > 1000) return "#FF0000";
  if (count > 500) return "#FF7F00";
  if (count > 50) return "#FFB84D";
  if (count > 10) return "#FFFF99";
  return "#FFFFFF";
};

const getIndicatorColor = (count) => {
  if (count == null) return "#FFFFFF";
  if (count > 200000) return "#084081";
  if (count > 100000) return "#0868AC";
  if (count > 50000) return "#2B8CBE";
  if (count > 20000) return "#4EB3D3";
  if (count > 10000) return "#7BCCC4";
  return "#BAE4BC";
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
      if (type === "indicator") {
        ranges = [
          { color: "#084081", label: "> 3,000,000" },
          { color: "#0868AC", label: "2,000,000 - 3,000,000" },
          { color: "#2B8CBE", label: "1,000,000 - 2,000,000" },
          { color: "#4EB3D3", label: "500,000 - 1,000,000" },
          { color: "#A8DDB5", label: "0 - 500,000" },
        ];
      } else if (type === "primary") {
        ranges = [
          { color: "#67001f", label: "> 150" },
          { color: "#b2182b", label: "80 - 150" },
          { color: "#d6604d", label: "50 - 80" },
          { color: "#f4a582", label: "10 - 50" },
          { color: "#fddbc7", label: "0 - 10" },
        ];
      } else if (type === "crime") {
        ranges = [
          { color: "#FF0000", label: "> 100,000" },
          { color: "#FF7F00", label: "60,000 - 100,000" },
          { color: "#FFB84D", label: "30,000 - 60,000" },
          { color: "#FFFF99", label: "1,000 - 30,000" },
          { color: "#FFFFFF", label: "0 - 1,000" },
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
// Fit map to features
function MapRecenter({ features }) {
  const map = useMap();
  useEffect(() => {
    if (features?.length > 0) {
      const bounds = L.geoJSON(features).getBounds();
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [features, map]);
  return null;
}

function MunicipalityMap({ departmentCode, onSelect, onBack }) {
  const { viewMode } = useViewMode();
  const { indicator, loading: indicatorLoading } = useContext(IndicatorContext);
  const { crimeByMunicipalities } = useContext(CrimeContext);
  const {
    primaryIndicator,
    cancelFetch,
  } = useContext(PrimaryIndicatorContext);
  const { selectedMunicipalities } = useContext(MunicipalityContext);
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(indicator)
  console.log(crimeByMunicipalities)
  // Fetch municipality boundaries
  useEffect(() => {
    if (!departmentCode) return;
    setLoading(true);
    setError(null);

    fetch(`https://cencusbackend.onrender.com/api/municipalities/${departmentCode}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data?.features)) {
          setFeatures(data.features);
        } else {
          console.warn("No municipality features returned.");
          setFeatures([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load municipalities");
        setLoading(false);
      });
  }, [departmentCode]);

  const getMunicipalityName = (featureCode) => {
    if (!selectedMunicipalities || selectedMunicipalities.length === 0)
      return "Unknown";

    // Access the first department object
    const departmentObj = selectedMunicipalities[0];
    if (!departmentObj?.municipalities) return "Unknown";

    // Find the municipality by code
    const municipality = departmentObj.municipalities.find(
      (m) => normalizeCode(m.code) === normalizeCode(featureCode)
    );

    return municipality ? municipality.name : "Unknown";
  };

  // Map indicator totals

  useEffect(() => {
    if (viewMode !== "primary") cancelFetch();
  }, [viewMode, cancelFetch]);

  // Memoized value map based on viewMode
  // 1. In useMemo
  const valueMap = useMemo(() => {
    const map = new Map();
let data;

switch (viewMode) {
  case "crime":
    data = crimeByMunicipalities;
    break;
  case "indicator":
    data = indicator;
    break;
  case "primary":
    data = primaryIndicator;
    break;
  default:
    data = [];
}
console.log(data)

    if (Array.isArray(data)) {
      data.forEach((entry) => {
        const code = normalizeCode(
          entry.muncipality_code ?? entry.code ?? entry.MPIO_CCDGO ?? entry.municipality_code
        );
        if (code) {
          map.set(code, entry.total ?? entry.value ?? 0);
        }
      });
    }
    return map;
  }, [viewMode, indicator, primaryIndicator, crimeByMunicipalities]);

  const style = (feature) => {
    const code = normalizeCode(feature.properties.MPIO_CCDGO);
    const value = valueMap.get(code);

    const fillColor =
      viewMode === "crime"
        ? getCrimeColor(value)
        : viewMode === "indicator"
        ? getIndicatorColor(value)
        : getPrimaryColor(value);

    return {
      fillColor,
      weight: 1,
      color: "#000",
      fillOpacity: 0.7,
    };
  };
  const handleSelect = (feature) => {
    if (onSelect) onSelect(feature.properties.MPIO_CCDGO);
  };

  // UI states
  if (!departmentCode) return <p>Please select a department first.</p>;
  if (loading || indicatorLoading) return <p>Loading map data...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!features.length) return <p>No municipalities found.</p>;

  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: "10px" }}>
        Back to Departments
      </button>

      <MapContainer
        style={{ height: "500px", width: "100%" }}
        zoom={16}
        center={[4.5, -74]}
        zoomControl={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        dragging
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapRecenter features={features} />
        <Legend type={viewMode} />

        {features.map((feature, idx) => {
          const code = normalizeCode(feature.properties.MPIO_CDPMP); // This is the code to match
          const codeforname = normalizeCode(feature.properties.MPIO_CDPMP); ;
          const total = valueMap.get(normalizeCode(feature.properties.MPIO_CCDGO)
          );

          return (
            <GeoJSON
              key={`${feature.properties.DPTO_CCDGO}-${code}-${idx}`}
              data={feature}
              style={() => style(feature)}
            >
              <Popup>
                <div style={{ minWidth: "200px" }}>
                  {/* Use the utility function to get the municipality name */}
                  <strong>{getMunicipalityName(codeforname)}</strong>

                  <br />
                  {total != null ? (
                    <p>Total: {total.toLocaleString()}</p>
                  ) : (
                    <p>No data</p>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(feature);
                    }}
                    style={{ marginTop: "5px", padding: "6px 12px" }}
                  >
                    Select Municipality
                  </button>
                </div>
              </Popup>
            </GeoJSON>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default MunicipalityMap;