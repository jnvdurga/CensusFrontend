import React, { createContext, useEffect, useRef, useState } from "react";

const IndicatorContext = createContext();

const IndicatoreProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    column: "male_count",
    department_code: null,
  });

  const [indicator, setIndicator] = useState([]); // 🔹 Store array, not object
  const [showOnMap, setShowOnMap] = useState("indicator");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
      const controller = new AbortController();
      abortControllerRef.current = controller;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://buddhi-group-be.onrender.com/fundamental_indicators/fetch_fundamental_indicator_data_fast_sql",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(filters),
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(`Network response was not ok (status ${response.status})`);
        }

        const data = await response.json();

        // 🔹 Store only results array
        setIndicator(Array.isArray(data.results) ? data.results : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
          console.error("❌ Indicator fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, [filters]);

  return (
    <IndicatorContext.Provider
      value={{
        indicator, // 🔹 Now always an array
        setIndicator,
        loading,
        filters,
        setFilters,
        error,
        setShowOnMap,
        showOnMap,
      }}
    >
      {children}
    </IndicatorContext.Provider>
  );
};

export { IndicatorContext, IndicatoreProvider };
