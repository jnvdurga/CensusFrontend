import { CodeDetailedData } from "../data/data";
import { createContext, useEffect, useState } from "react";

export const MunicipalityContext = createContext();

export const MunicipalityProvider = ({ children }) => {
  const [department, setDepartment] = useState(null);
  const [selectedMunicipalities, setSelectedMunicipalities] = useState([]);

  useEffect(() => {
    if (!department) {
      setSelectedMunicipalities([]);
      return;
    }

    // Filter municipalities belonging to the selected department
    const filtered = CodeDetailedData.filter(
      (item) => item.code == department
    );

    setSelectedMunicipalities(filtered);
  }, [department]);

  return (
    <MunicipalityContext.Provider
      value={{ department, setDepartment, selectedMunicipalities }}
    >
      {children}
    </MunicipalityContext.Provider>
  );
};