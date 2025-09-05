import React, { createContext, useEffect, useRef, useState } from "react";

// ✅ Create PrimaryIndicator Context
const PrimaryIndicatorContext = createContext();

const PrimaryIndicatorProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    column: "population_density", // default column
    department_code: null,
  });

  const [primaryIndicator, setPrimaryIndicator] = useState([]); // Store array
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
          "https://buddhi-group-be.onrender.com/primary_indicators/fetch_primary_indicator_data_fast_sql",
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

        // Store results array only
        setPrimaryIndicator(Array.isArray(data.results) ? data.results : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
          console.error("❌ Primary Indicator fetch error:", err);
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
    <PrimaryIndicatorContext.Provider
      value={{
        primaryIndicator,
        setPrimaryIndicator,
        filters,
        setFilters,
        loading,
        error,
      }}
    >
      {children}
    </PrimaryIndicatorContext.Provider>
  );
};

export { PrimaryIndicatorContext, PrimaryIndicatorProvider };
