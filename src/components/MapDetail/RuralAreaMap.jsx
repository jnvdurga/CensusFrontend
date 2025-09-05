import React, { useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap, Popup } from "react-leaflet";
import { useGeoDataLoader } from "../MapDetail/GeoDataLoader";
import { getColor } from "../../utils/colorUtils";
import L from "leaflet";

export default function RuralAreaMap({ departmentCode, municipalityCode, classCode, ruralSectorCode, onSelect }) {
  const url =
    departmentCode && municipalityCode && classCode && ruralSectorCode
      ? `http://localhost:5000/api/rural-area/${departmentCode}/${municipalityCode}/${classCode}/${ruralSectorCode}`
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

  if (!departmentCode || !municipalityCode || !classCode || !ruralSectorCode)
    return <p>Please select all levels including Rural Sector first.</p>;
  if (loading) return <p>Loading rural areas...</p>;
  if (error) return <p>Error loading rural areas</p>;
  if (!features || features.length === 0) return <p>No rural areas found.</p>;

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
      p.textContent = feature.properties?.SECR_CCDGO
        ? `Rural Area: ${feature.properties.SECR_CCDGO}`
        : "No code available";

      const button = L.DomUtil.create("button", "", container);
      button.style.marginTop = "5px";
      button.textContent = "Select Rural Area";

      L.DomEvent.on(button, "click", (e) => {
        L.DomEvent.stopPropagation(e);
        if (onSelect) onSelect(feature.properties?.SECR_CCDGO || null);
      });

      return container;
    });
  };

  return (
    <MapContainer
      center={[4.5709, -74.2973]}
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
      zoomControl={false}
      doubleClickZoom={false}
      scrollWheelZoom={false}
      dragging={false}
      touchZoom={false}
      boxZoom={false}
      keyboard={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapRecenter features={features} />
      <GeoJSON data={{ type: "FeatureCollection", features }} style={geoJsonStyle} onEachFeature={onEachFeature} />
    </MapContainer>
  );
}
