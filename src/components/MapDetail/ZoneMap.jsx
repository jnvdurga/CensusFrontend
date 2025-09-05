import React, { useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { useGeoDataLoader } from "../MapDetail/GeoDataLoader";
import { getColor } from "../../utils/colorUtils";
import L from "leaflet";

export default function ZoneMap({ departmentCode, municipalityCode, classCode, sectorCode, sectionCode, onSelect }) {
  const url =
    departmentCode && municipalityCode && classCode && sectorCode && sectionCode
      ? `http://localhost:5000/api/zone/${departmentCode}/${municipalityCode}/${classCode}/${sectorCode}/${sectionCode}`
      : null;

  const { features, loading, error } = useGeoDataLoader(url);

  function MapRecenter({ features }) {
    const map = useMap();
    useEffect(() => {
      if (features && features.length > 0) {
        const bounds = L.geoJSON({ type: "FeatureCollection", features }).getBounds();
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    }, [features, map]);
    return null;
  }

  if (!departmentCode || !municipalityCode || !classCode || !sectorCode || !sectionCode)
    return <p>Please select all levels first.</p>;
  if (loading) return <p>Loading zone data...</p>;
  if (error) return <p>Error loading zone data</p>;
  if (!features || features.length === 0) return <p>No zone data found.</p>;

  const geoJsonStyle = (feature) => {
    const idx = features.indexOf(feature);
    return {
      fillColor: getColor(idx),
      weight: 1,
      color: "#000",
      fillOpacity: 0.6,
    };
  };

  const onEachFeature = (feature, layer) => {
    layer.bindPopup(() => {
      const container = L.DomUtil.create("div");
      const p = L.DomUtil.create("p", "", container);
      p.textContent = feature.properties?.NOM_CPOB || "No name";

      const button = L.DomUtil.create("button", "", container);
      button.style.marginTop = "5px";
      button.textContent = "Select Zone";

      L.DomEvent.on(button, "click", (e) => {
        L.DomEvent.stopPropagation(e);
        if (onSelect) onSelect(feature.properties);
      });

      return container;
    });
  };

  return (
    <MapContainer center={[4.5709, -74.2973]} zoom={12} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapRecenter features={features} />
      <GeoJSON data={{ type: "FeatureCollection", features }} style={geoJsonStyle} onEachFeature={onEachFeature} />
    </MapContainer>
  );
}
