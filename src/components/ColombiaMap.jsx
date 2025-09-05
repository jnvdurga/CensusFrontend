import React, { useState } from "react";
import DepartmentMap from "./MapDetail/DepartmentMap";
import MunicipalityMap from "./MapDetail/MunicipalityMap";
import ClassMap from "./MapDetail/ClassMap";
import RuralSectorMap from "./MapDetail/RuralSectorMap";
import RuralAreaMap from "./MapDetail/RuralAreaMap";
import UrbanSectorMap from "./MapDetail/UrbanSectionMap";
import ZoneMap from "./MapDetail/ZoneMap";

function ColombiaMap() {
  const [currentLevel, setCurrentLevel] = useState("department");
  const [selected, setSelected] = useState({
    department: null,
    municipality: null,
    class: null,
    ruralSector: null,
    ruralArea: null,
    urbanArea: null,
  });


  const handleSelect = (level, code) => {
    if (level === "department") {
      setSelected({ department: code, municipality: null, class: null, ruralSector: null, ruralArea: null, urbanArea: null });
      setCurrentLevel("municipality");
    } else if (level === "municipality") {
      setSelected(prev => ({ ...prev, municipality: code, class: null, ruralSector: null, ruralArea: null, urbanArea: null }));
      setCurrentLevel("class");
    } else if (level === "class") {
      setSelected(prev => ({ ...prev, class: code, ruralSector: null, ruralArea: null, urbanArea: null }));
      setCurrentLevel("ruralSector");
    } else if (level === "ruralSector") {
      setSelected(prev => ({ ...prev, ruralSector: code, ruralArea: null, urbanArea: null }));
      setCurrentLevel("ruralArea");
    } else if (level === "ruralArea") {
      setSelected(prev => ({ ...prev, ruralArea: code, urbanArea: null }));
      setCurrentLevel("urbanArea");
    }
  };

  return (
    <div>
      {currentLevel === "department" && <DepartmentMap onSelect={code => handleSelect("department", code)}  />}

      {currentLevel === "municipality" && (
        <MunicipalityMap
          departmentCode={selected.department}
          onSelect={code => handleSelect("municipality", code)}
          onBack={() => setCurrentLevel("department")}
        />
      )}

      {currentLevel === "class" && (
        <ClassMap
          departmentCode={selected.department}
          municipalityCode={selected.municipality}
          onSelect={code => handleSelect("class", code)}
        />
      )}

      {currentLevel === "ruralSector" && (
        <RuralSectorMap
          departmentCode={selected.department}
          municipalityCode={selected.municipality}
          classCode={selected.class}
          onSelect={code => handleSelect("ruralSector", code)}
        />
      )}

      {currentLevel === "ruralArea" && (
        <RuralAreaMap
          departmentCode={selected.department}
          municipalityCode={selected.municipality}
          classCode={selected.class}
          ruralSectorCode={selected.ruralSector}  
          onSelect={code => handleSelect("ruralArea", code)}
        />
      )}

      {currentLevel === "urbanArea" && (
        <UrbanSectorMap
          departmentCode={selected.department}
          municipalityCode={selected.municipality}
          classCode={selected.class}
          ruralSectorCode={selected.ruralSector}
          ruralAreaCode={selected.ruralArea}
          onUrbanSelect={code => console.log("Selected Urban Area:", code)}
          onSelect={code => handleSelect("urbanArea", code)}
        />
      )}
    </div>
  );
}

export default ColombiaMap;