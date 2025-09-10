import React, { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const PrimaryIndicatorContext = createContext();

const PrimaryIndicatorProvider = ({ children }) => {
  const location = useLocation(); // track current path

  const [filters, setFilters] = useState({
    column: "population_density",
    department_code: null,
  });
  const [primaryIndicator, setPrimaryIndicator] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  // 🔹 Centralized API fetcher (unchanged)
  const fetchPrimaryIndicator = async (currentFilters) => {
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
          body: JSON.stringify(currentFilters),
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }

      const data = await response.json();
      setPrimaryIndicator(Array.isArray(data.results) ? data.results : []);
    } catch (err) {
      if (err.name !== "AbortError") setError(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Auto-fetch whenever filters change (unchanged)
  useEffect(() => {
    if (filters.department_code !== null || filters.column) {
      fetchPrimaryIndicator(filters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  // 🔹 Cancel fetch if the user navigates to /crime
  useEffect(() => {
    if (location.pathname === "/crime" && abortControllerRef.current) {
      abortControllerRef.current.abort();
      setPrimaryIndicator([]); // optional: clear previous data
    }
  }, [location.pathname]);

  // 🔹 Cancel pending fetch on unmount
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
        cancelFetch,
      }}
    >
      {children}
    </PrimaryIndicatorContext.Provider>
  );
};

export { PrimaryIndicatorContext, PrimaryIndicatorProvider };
