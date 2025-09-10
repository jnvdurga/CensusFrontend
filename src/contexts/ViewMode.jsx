// ViewModeContext.js
import { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ViewModeContext = createContext();

export const ViewModeProvider = ({ children }) => {
  const location = useLocation();

  // Detect initial mode from URL path
  const getInitialMode = (pathname) => {
    if (pathname.startsWith("/map-area-details")) return "indicator";
    if (pathname.startsWith("/crime")) return "crime";
    return "crime"; // fallback
  };

  const [viewMode, setViewMode] = useState(getInitialMode(location.pathname));

  // Update mode if URL path changes (e.g., user navigates)
  useEffect(() => {
    setViewMode(getInitialMode(location.pathname));
  }, [location.pathname]);

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => useContext(ViewModeContext);
