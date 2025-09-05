// ViewModeContext.js
import { createContext, useState, useContext } from "react";

const ViewModeContext = createContext();

export const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState("crime"); // default: crime

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export  const useViewMode = () => useContext(ViewModeContext);
