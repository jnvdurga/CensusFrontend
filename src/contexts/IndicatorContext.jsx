import React, { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const IndicatorContext = createContext();

const IndicatoreProvider = ({ children }) => {
  const location = useLocation(); // to check current path

  const [filters, setIndicatoreFilters] = useState({
    column: "male_count",
    department_code: null,
  });
  const [indicator, setIndicator] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  // 🔹 Centralized API fetcher (unchanged)
  const fetchIndicator = async (currentFilters) => {
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
          body: JSON.stringify(currentFilters),
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

  // 🔹 Auto-fetch when filters change (unchanged)
  useEffect(() => {
    if (filters.department_code !== null || filters.column) {
      fetchIndicator(filters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  // 🔹 Cancel fetch if the user navigates to /crime
  useEffect(() => {
    if (location.pathname === "/crime" && abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIndicator([]); // optional: clear previous data
    }
  }, [location.pathname]);

  // 🔹 Cancel pending fetch on unmount
  const cancelFetch = () => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
  };

  return (
    <IndicatorContext.Provider
      value={{
        indicator,
        setIndicator,
        filters,
        setIndicatoreFilters,
        loading,
        error,
        cancelFetch,
      }}
    >
      {children}
    </IndicatorContext.Provider>
  );
};

export { IndicatorContext, IndicatoreProvider };
