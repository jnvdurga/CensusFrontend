import React, { useState, useContext, useEffect } from 'react';
import { crimeTypes } from '../data/data';
import "../style/Fundamental.scss";
import { CrimeContext } from '../contexts/CrimeContex';

function FundamentalDropdown() {
  const { selectedFilter, setSelectedFilter } = useContext(CrimeContext);
  const [selectedCrimeType, setSelectedCrimeType] = useState(selectedFilter.crime_type);
  const [selectedVariable, setSelectedVariable] = useState(selectedFilter.variable);

  useEffect(() => {
    setSelectedCrimeType(selectedFilter.crime_type);
    setSelectedVariable(selectedFilter.variable);
  }, [selectedFilter]);

  const FilterSubmit = (e) => {
    e.preventDefault();
    setSelectedFilter({
      ...selectedFilter,
      crime_type: selectedCrimeType,
      variable: selectedVariable,
    });
  };

  return (
    <div className='fd-container'>
      <div className='dropdown-container'>
        <div className="fd-crime-type">
          <label className='fd-label'>Crime-Type</label>
          <select
            className='fd-select'
            onChange={(e) => setSelectedCrimeType(e.target.value)}
            value={selectedCrimeType}
          >
            {crimeTypes.map((crime) => (
              <option key={crime.crimeCode} value={crime.crimeType}>
                {crime.crimeTypeEnglish}
              </option>
            ))}
          </select>
        </div>

        <div className='fd-veriable'>
          <label className='fd-label'>Variable</label>
          <select
            className='fd-select'
            onChange={(e) => setSelectedVariable(e.target.value)}
            value={selectedVariable}
          >

            <option value='gender'>Gender</option>
            <option value='age_group'>Age-Group</option>
            <option value='weapons_types'>Weapons</option>
          </select>
        </div>

        <button onClick={FilterSubmit}>Apply Filter</button>
      </div>
    </div>
  );
}

export default FundamentalDropdown;
