import { createContext, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const CrimeContext = createContext();

const DEFAULT_FILTERS = {
  crime_type: "HURTO_PERSONAS",
  variable: "gender",
  year: 2022,
  department_code: 5,
};

const CrimeProvider = ({ children }) => {
  const location = useLocation(); // Get current path
  const [crimeByYears, setCrimeByYears] = useState([]);
  const [crimeByDepartment, setCrimeByDepartment] = useState([]);
  const [crimeByMonths, setCrimeByMonths] = useState([]);
  const [crimeByMunicipalities, setCrimeByMunicipalities] = useState([]);
  const [isYearView, setIsYearView] = useState(true);
  const [isDepartmentView, setIsDepartmentView] = useState(true);
  const [municiCode, SetMuniciCode] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(DEFAULT_FILTERS);

  const abortControllerRef = useRef(null);

  // Fetch initial years & department data
  const fetchInitialData = async () => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const headers = { "Content-Type": "application/json" };
      const [yearsRes, deptRes] = await Promise.all([
        fetch("https://buddhi-group-be.onrender.com/crime_type_by_years", {
          method: "POST",
          headers,
          body: JSON.stringify({
            crime_type: selectedFilter.crime_type,
            variable: selectedFilter.variable,
          }),
          signal: controller.signal,
        }),
        fetch("https://buddhi-group-be.onrender.com/crime_type_by_department", {
          method: "POST",
          headers,
          body: JSON.stringify({
            crime_type: selectedFilter.crime_type,
            variable: selectedFilter.variable,
          }),
          signal: controller.signal,
        }),
      ]);

      if (!yearsRes.ok || !deptRes.ok) throw new Error("Failed to fetch initial crime data");

      const [years, department] = await Promise.all([yearsRes.json(), deptRes.json()]);
      setCrimeByYears(years?.data || []);
      setCrimeByDepartment(department?.data || []);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
        console.error("❌ Fetch error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchMonths = async (year) => {
    try {
      setLoading(true);
      const res = await fetch("https://buddhi-group-be.onrender.com/crime_type_by_months", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          crime_type: selectedFilter.crime_type,
          variable: selectedFilter.variable,
          year,
        }),
      });
      if (!res.ok) throw new Error("Failed to fetch months data");
      const data = await res.json();
      setCrimeByMonths(data?.data || []);
    } catch (err) {
      console.error("❌ Fetch months error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMunicipalities = async (departmentCode) => {
    try {
      setLoading(true);
      const res = await fetch("https://buddhi-group-be.onrender.com/crime_type_by_municipalities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          crime_type: selectedFilter.crime_type,
          variable: selectedFilter.variable,
          department_code: departmentCode,
        }),
      });
      if (!res.ok) throw new Error("Failed to fetch municipalities data");
      const data = await res.json();
      setCrimeByMunicipalities(data?.data || []);
    } catch (err) {
      console.error("❌ Fetch municipalities error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Fetch municipalities when municiCode changes
  useEffect(() => {
    if (location.pathname === "/crime" && municiCode) {
      fetchMunicipalities(municiCode);
    }
  }, [municiCode, location.pathname]);

  // 🔹 Fetch initial data only if path is /crime
  useEffect(() => {
    if (location.pathname === "/crime") {
      fetchInitialData();
    } else {
      // Cancel any ongoing request if path changes
      if (abortControllerRef.current) abortControllerRef.current.abort();
      setCrimeByYears([]);
      setCrimeByDepartment([]);
      setCrimeByMonths([]);
      setCrimeByMunicipalities([]);
    }
  }, [selectedFilter, location.pathname]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  return (
    <CrimeContext.Provider
      value={{
        crimeByYears,
        crimeByDepartment,
        crimeByMonths,
        crimeByMunicipalities,
        loading,
        error,
        fetchMonths,
        SetMuniciCode,
        setLoading,
        selectedFilter,
        setSelectedFilter,
        isYearView,
        setIsYearView,
        isDepartmentView,
        setIsDepartmentView,
      }}
    >
      {children}
    </CrimeContext.Provider>
  );
};

export { CrimeContext, CrimeProvider };
