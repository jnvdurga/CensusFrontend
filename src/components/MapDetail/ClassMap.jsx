import React ,{useEffect} from "react";
import { MapContainer, TileLayer, GeoJSON, Popup ,useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGeoDataLoader } from "../MapDetail/GeoDataLoader"; // <-- IMPORT HERE
import { getColor } from "../../utils/colorUtils"; // make sure this path is correct

export default function ClassMap({ departmentCode, municipalityCode, onSelect }) {
  const { features, loading, error } = useGeoDataLoader(
    departmentCode && municipalityCode
      ? `http://localhost:5000/api/classes/${departmentCode}/${municipalityCode}`
      : null
  );

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
  if (!departmentCode || !municipalityCode) return <p>Please select a department and municipality first.</p>;
  if (loading) return <p>Loading classes...</p>;
  if (error) return <p>Error loading classes</p>;

  return (
    <MapContainer
      center={[4.5709, -74.2973]}
      zoom={10}
      style={{ height: "100vh", width: "100%" }}
      zoomControl={false}       // removes + / - zoom controls
      doubleClickZoom={false}   // disables double-click zoom
      scrollWheelZoom={false}   // disables scroll wheel zoom
      dragging={false}          // disables dragging/pan
      touchZoom={false}          // disables pinch/zoom
      boxZoom={false}           // disables box zoom
      keyboard={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapRecenter features={features} />

      {features.map((f, idx) => (
        <GeoJSON
          key={`${f.properties.CLAS_CCDGO}-${idx}`} // make key unique
          data={f}
          style={{ fillColor: getColor(idx), weight: 1, color: "#000", fillOpacity: 0.6 }}
        >
          <Popup>
            <div>
              <p>{f.properties.CLAS_CCDGO}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // stop Leaflet capturing event
                  onSelect(f.properties.CLAS_CCDGO);
                }}
                style={{ marginTop: "5px" }}
              >
                Select Class
              </button>
            </div>
          </Popup>
        </GeoJSON>
      ))}
    </MapContainer>
  );
}
