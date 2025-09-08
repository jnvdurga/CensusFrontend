import React, { createContext, useRef, useState } from "react";

const PrimaryIndicatorContext = createContext();

const PrimaryIndicatorProvider = ({ children }) => {
  const [filters, setFilters] = useState({ column: "population_density", department_code: null });
  const [primaryIndicator, setPrimaryIndicator] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  const fetchPrimaryIndicator = async (newFilters) => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setFilters(newFilters);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://buddhi-group-be.onrender.com/primary_indicators/fetch_primary_indicator_data_fast_sql",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newFilters),
          signal: controller.signal,
        }
      );

      if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
      const data = await response.json();
      setPrimaryIndicator(Array.isArray(data.results) ? data.results : []);
    } catch (err) {
      if (err.name !== "AbortError") setError(err);
    } finally {
      setLoading(false);
    }
  };

  const cancelFetch = () => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
  };

  return (
    <PrimaryIndicatorContext.Provider
      value={{
        primaryIndicator,
        setPrimaryIndicator,
        filters,
        setFilters,
        loading,
        error,
        fetchPrimaryIndicator,
        cancelFetch
      }}
    >
      {children}
    </PrimaryIndicatorContext.Provider>
  );
};

export { PrimaryIndicatorContext, PrimaryIndicatorProvider };
