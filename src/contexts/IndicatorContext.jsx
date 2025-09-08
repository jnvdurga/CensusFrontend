import React, { createContext, useRef, useState } from "react";

const IndicatorContext = createContext();

const IndicatoreProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    column: "male_count",
    department_code: null,
  });
  const [indicator, setIndicator] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  // 🔹 Centralized API fetcher
  const fetchIndicator = async (overrides = {}) => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    // Keep old filters but override with new ones (like dept_code)
    const newFilters = { ...filters, ...overrides };
    setFilters(newFilters);

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://buddhi-group-be.onrender.com/fundamental_indicators/fetch_fundamental_indicator_data_fast_sql",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newFilters),
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }

      const data = await response.json();
      setIndicator(Array.isArray(data.results) ? data.results : []);
    } catch (err) {
      if (err.name !== "AbortError") setError(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Cancel pending fetch
  const cancelFetch = () => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
  };

  return (
    <IndicatorContext.Provider
      value={{
        indicator,
        setIndicator,
        filters,
        setFilters,
        loading,
        error,
        fetchIndicator,
        cancelFetch,
      }}
    >
      {children}
    </IndicatorContext.Provider>
  );
};

export { IndicatorContext, IndicatoreProvider };
