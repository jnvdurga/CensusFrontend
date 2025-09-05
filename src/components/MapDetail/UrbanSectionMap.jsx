// src/components/maps/UrbanMap.jsx
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function UrbanSection({ departmentCode, municipalityCode, classCode, onUrbanSelect }) {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function fetchUrbanAreas() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/urban-section/${departmentCode}/${municipalityCode}/${classCode}`
        );
        const data = await res.json();
        if (data && data.features) {
          setFeatures(data.features);
        } else {
          setFeatures([]);
        }
      } catch (err) {
        console.error("Error loading urban areas:", err);
        setFeatures([]);
      }
    }
    if (departmentCode && municipalityCode && classCode) {
      fetchUrbanAreas();
    }
  }, [departmentCode, municipalityCode, classCode]);

  // Recenter map automatically
  function MapRecenter({ features }) {
    const map = useMap();
    useEffect(() => {
      if (features && features.length > 0) {
        const bounds = L.geoJSON(features).getBounds();
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    }, [features, map]);
    return null;
  }

  if (!departmentCode || !municipalityCode || !classCode) {
    return <p>Please select all levels first.</p>;
  }

  if (!features || features.length === 0) {
    return <p>No urban areas found.</p>;
  }

  return (
    <MapContainer
      center={[4.5709, -74.2973]} // Colombia approx center
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <MapRecenter features={features} />

      {features.map((feature, idx) => {
        const geojsonData =
          feature.type === "Feature"
            ? { type: "FeatureCollection", features: [feature] }
            : feature;

        return (
          <GeoJSON
            key={idx}
            data={geojsonData}
            style={{
              fillColor: "#3182bd",
              weight: 1,
              color: "#000",
              fillOpacity: 0.5,
            }}
            onEachFeature={(f, layer) => {
              const props = f.properties;
              layer.bindPopup(
                `<b>Urban Sector Code:</b> ${props.SETU_CCDGO || "N/A"}<br/>
                 <b>Urban Section Code:</b> ${props.SECU_CCDGO || "N/A"}<br/>
                 <b>Zone Division:</b> ${props.ZU_CDIVI || "N/A"}`
              );
              layer.on("click", () => {
                onUrbanSelect(props.SETU_CCDGO);
              });
            }}
          >
            <Popup>
              <div>
                <p>{feature.properties?.NOMBRE || "Unnamed Urban Area"}</p>
              </div>
            </Popup>
          </GeoJSON>
        );
      })}
    </MapContainer>
  );
}

export default UrbanSection;
