import { createContext, useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const CrimeContext = createContext();

const DEFAULT_FILTERS = {
  crime_type: "HURTO_PERSONAS",
  variable: "gender",
  year: 2022,
  department_code: 5,
};

const SkeletonLoader = () => (
  <Box sx={{ width: "100%", padding: 2 }}>
    <Skeleton variant="rectangular" width="100%" height={300} />
    <Skeleton animation="wave" width="80%" />
    <Skeleton animation="wave" width="60%" />
    <Skeleton animation="wave" width="90%" />
  </Box>
);

const CrimeProvider = ({ children }) => {
  const [crimeByYears, setCrimeByYears] = useState([]);
  const [crimeByDepartment, setCrimeByDepartment] = useState([]);
  const [crimeByMonths, setCrimeByMonths] = useState([]);
  const [crimeByMunicipalities, setCrimeByMunicipalities] = useState([]);
  const [isYearView, setIsYearView] = useState(true);
 const [isDepartmentView, setIsDepartmentView] = useState(true);
  


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(DEFAULT_FILTERS);

  const abortControllerRef = useRef(null);

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

      if (!yearsRes.ok || !deptRes.ok) {
        throw new Error("Failed to fetch initial crime data");
      }

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

  // 🔹 Fetch data on filter change
  useEffect(() => {
    fetchInitialData();
  }, [selectedFilter]);

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
        fetchMunicipalities,
        setLoading,
        selectedFilter,
        setSelectedFilter,
        isYearView, setIsYearView ,
        isDepartmentView, setIsDepartmentView
      }}
    >
      {loading ? <SkeletonLoader /> : children}
    </CrimeContext.Provider>
  );
};

export { CrimeContext, CrimeProvider };
