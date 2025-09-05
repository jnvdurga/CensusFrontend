import React, { useState, useEffect, useCallback } from 'react';
import { Map, Source, Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function HeatMap() {
  const [departmentsData, setDepartmentsData] = useState(null);
  const [municipalitiesData, setMunicipalitiesData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [hoveredDeptCode, setHoveredDeptCode] = useState(null);
  const [zoom, setZoom] = useState(5);

  // 🔹 Fetch departments GeoJSON
  useEffect(() => {
    fetch('http://localhost:5000/api/departments')
      .then((res) => res.json())
      .then((data) => setDepartmentsData(data))
      .catch((err) => console.error('Error loading departments:', err));
  }, []);

  // 🔹 Fetch municipalities when zoom ≥ 8 and departmentCode is known
  useEffect(() => {
    if (zoom >= 6 && hoveredDeptCode) {
      fetch(`http://localhost:5000/api/municipalities/${hoveredDeptCode}`)
        .then((res) => res.json())
        .then((data) => setMunicipalitiesData(data))
        .catch((err) => console.error('Error loading municipalities:', err));
    } else {
      setMunicipalitiesData(null); // Clear layer if zoomed out
    }
  }, [zoom, hoveredDeptCode]);

  // 🔹 Department layer style
  const departmentLayer = {
    id: 'departments-layer',
    type: 'fill',
    paint: {
      'fill-color': [
        'match',
        ['get', 'department'], // Change this property name if needed
        'Bogotá', '#f00',
        'Antioquia', '#0f0',
        /* fallback */ '#088'
      ],
      'fill-opacity': 0.6,
      'fill-outline-color': '#000'
    }
  };

  // 🔹 Municipality layer style
  const municipalityLayer = {
    id: 'municipalities-layer',
    type: 'fill',
    paint: {
      'fill-color': '#4CAF50',
      'fill-opacity': 0.5,
      'fill-outline-color': '#333'
    }
  };

  // 🔹 Handle hover to show popup + set department code
  const onHover = useCallback((event) => {
    const {
      features,
      point: { x, y }
    } = event;

    const hoveredFeature = features && features[0];

    setHoverInfo(
      hoveredFeature
        ? { feature: hoveredFeature, x, y }
        : null
    );

    if (hoveredFeature) {
      setHoveredDeptCode(hoveredFeature.properties.DPTO_CCDGO); // Use the department code property
    }
  }, []);

  // 🔹 Handle zoom changes
  const onMove = useCallback((evt) => {
    setZoom(evt.viewState.zoom);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Map
        initialViewState={{
          longitude: -74.2973,
          latitude: 4.5709,
          zoom: 5
        }}
        style={{ width: '100%', height: '500px' }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        interactiveLayerIds={['departments-layer']}
        onMouseMove={onHover}
        onMove={onMove}
      >
        {/* 🔹 Departments Layer */}
        {departmentsData && (
          <Source type="geojson" data={departmentsData}>
            <Layer {...departmentLayer} />
          </Source>
        )}

        {/* 🔹 Municipalities Layer (only if zoom ≥ 8) */}
        {municipalitiesData && (
          <Source type="geojson" data={municipalitiesData}>
            <Layer {...municipalityLayer} />
          </Source>
        )}

        {/* 🔹 Popup */}
        {hoverInfo && (
          <div
            style={{
              position: 'absolute',
              left: hoverInfo.x,
              top: hoverInfo.y,
              background: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              boxShadow: '0 0 4px rgba(0,0,0,0.3)',
              pointerEvents: 'none'
            }}
          >
            <div>{hoverInfo.feature.properties.DPTO_CNMBR}
                {hoverInfo.feature.properties.DPTO_CCDGO}

            </div>
          </div>
        )}
      </Map>
    </div>
  );
}

export default HeatMap;
