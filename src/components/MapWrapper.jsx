import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapWrapper({ center, zoom, children }) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}       // removes + / - zoom controls
      doubleClickZoom={false}   // disables double-click zoom
      scrollWheelZoom={false}   // disables scroll wheel zoom
      dragging={false}          // disables dragging/pan
      touchZoom={false}          // disables pinch/zoom
      boxZoom={false}           // disables box zoom
      keyboard={false}          // disables keyboard zoom
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {children} {/* layers or GeoJSON go here */}
    </MapContainer>
  );
}
