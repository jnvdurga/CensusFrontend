import { useState, useEffect } from "react";

export function useGeoDataLoader(url) {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((geojson) => {
        setFeatures(geojson.features || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("GeoJSON fetch error:", err);
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { features, loading, error };
}
