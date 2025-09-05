import React, { useEffect, useState , useContext} from 'react';
import {
  crimeTypes,
  weaponTypes,
  ViectimGender,
  AgeGroup,
  getYears,
  months,
  CodeDetailedData
} from '../data/data.js';
import '../style/Dropdowns.scss';
import { CrimeContext , CrimeProvider } from '../contexts/CrimeContex.jsx';

const Dropdowns = () => {
  const {selectedFilter, setSelectedFilter} = useContext(CrimeContext);
  const [filters, setFilters] = useState({
    crime_type: '',
    weapons_types: '',
    gender: '',
    age_group: '',
    year: new Date().getFullYear(), // Number
    month: null, // Number or null
    department_code: '',
    municipality_code: ''
  });

  const [municipalities, setMunicipalities] = useState([]);
     
  // Helper functions
  const getDepartmentCode = (departmentName) => {
    const dept = CodeDetailedData.find(d => d.Department === departmentName);
    return dept ? dept.code : '';
  };

  const getDepartmentName = (code) => {
    const dept = CodeDetailedData.find(d => d.code === code);
    return dept ? dept.Department : '';
  };

  const getMunicipalityName = (code) => {
    const mun = municipalities.find(m => m.code === code);
    return mun ? mun.name : '';
  };

  const getDeptKey = (dept) => {
    return `dept-${dept.code}-${dept.Department.replace(/\s+/g, '-')}`;
  };

  useEffect(() => {
    if (filters.department_code) {
      const selectedDept = CodeDetailedData.find(
        dept => dept.code === filters.department_code
      );
      setMunicipalities(selectedDept?.municipalities || []);
      setFilters(prev => ({ ...prev, municipality_code: '' }));
    } else {
      setMunicipalities([]);
    }
  }, [filters.department_code]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Convert numbers for year and month
    const processedValue = name === 'year' ? parseInt(value) || '' :
                          name === 'month' ? parseInt(value) || null :
                          value;

    if (name === 'department') {
      const code = getDepartmentCode(value);
      setFilters(prev => ({ ...prev, department_code: code }));
    } 
    else if (name === 'municipality') {
      const mun = municipalities.find(m => m.name === value);
      const code = mun ? mun.code : '';
      setFilters(prev => ({ ...prev, municipality_code: code }));
    }
    else {
      setFilters(prev => ({ ...prev, [name]: processedValue }));
    }
  };

  const preparePayload = () => {
    return {
      crime_type: filters.crime_type || undefined,
      weapons_types: filters.weapons_types || undefined,
      gender: filters.gender || undefined,
      year: filters.year || undefined,
      month: filters.month || undefined,
      age_group: filters.age_group || undefined,
      municipality_code: filters.municipality_code || undefined,
      department_code: filters.department_code || undefined
    };
  };

  const handleApply = async () => {
    const payload = preparePayload();
    console.log('Submitting payload:', payload);

    try {
      // Make all API calls in parallel
      const [crimeData, incidenceRate, byGender, byAge, byWeapon] = await Promise.all([
        fetchCrimeData(payload),
        fetchCrimeIncidenceRate(payload),
        fetchCrimeByGender(payload),
        fetchCrimeByAge(payload),
        fetchCrimeByWeapon(payload)
      ]);

      console.log('API Responses:', {
        crimeData,
        incidenceRate,
        byGender,
        byAge,
        byWeapon
      });

      // Here you would typically update your state with the responses
      // For example, using another context or local state

    } catch (error) {
      console.error('Error fetching data:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>Crime Data Filters</h3>
        <button className="apply-btn" onClick={handleApply}>
          Apply Filters
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div className="filter-grid">
        {/* Crime Type */}
        <div className="filter-item">
          <label htmlFor="crime_type">Crime Type</label>
          <div className="select-wrapper">
            <select
              id="crime_type"
              name="crime_type"
              value={filters.crime_type}
              onChange={handleChange}
            >
              <option value="">Select crime type</option>
              {crimeTypes.map((item) => (
                <option key={`crime-${item.crimeCode}`} value={item.crimeType}>
                  {item.crimeType}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Weapon Type */}
        <div className="filter-item">
          <label htmlFor="weapons_types">Weapon Type</label>
          <div className="select-wrapper">
            <select
              id="weapons_types"
              name="weapons_types"
              value={filters.weapons_types}
              onChange={handleChange}
            >
              <option value="">Select weapon type</option>
              {weaponTypes.map((item) => (
                <option key={`weapon-${item.weaponCode}`} value={item.weaponType}>
                  {item.weaponType}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Victim Gender */}
        <div className="filter-item">
          <label htmlFor="gender">Victim Gender</label>
          <div className="select-wrapper">
            <select
              id="gender"
              name="gender"
              value={filters.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              {ViectimGender.map((item) => (
                <option key={`gender-${item.gendercode}`} value={item.genderType}>
                  {item.genderType}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Age Group */}
        <div className="filter-item">
          <label htmlFor="age_group">Age Group</label>
          <div className="select-wrapper">
            <select
              id="age_group"
              name="age_group"
              value={filters.age_group}
              onChange={handleChange}
            >
              <option value="">Select age group</option>
              {AgeGroup.map((item) => (
                <option key={`age-${item.agecode}`} value={item.ageType}>
                  {item.ageType} ({item.limit})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Range */}
        <div className="filter-item date-range">
          <label>Date Range</label>
          <div className="input-group">
            <div className="select-wrapper">
              <select
                name="year"
                value={filters.year || ''}
                onChange={handleChange}
              >
                <option value="">Year</option>
                {getYears().map((year) => (
                  <option key={`year-${year}`} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="select-wrapper">
              <select
                name="month"
                value={filters.month || ''}
                onChange={handleChange}
              >
                <option value="">Month</option>
                {months.map((month, index) => (
                  <option key={`month-${index}`} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="filter-item location-select">
          <label>Location</label>
          <div className="input-group">
            <div className="select-wrapper">
              <select
                name="department"
                value={getDepartmentName(filters.department_code)}
                onChange={handleChange}
              >
                <option value="">Department</option>
                {CodeDetailedData.map((dept) => (
                  <option key={getDeptKey(dept)} value={dept.Department}>
                    {dept.Department}
                  </option>
                ))}
              </select>
            </div>
            <div className="select-wrapper">
              <select
                name="municipality"
                value={getMunicipalityName(filters.municipality_code)}
                onChange={handleChange}
                disabled={!filters.department_code}
              >
                <option value="">
                  {filters.department_code ? "Select municipality" : "First select department"}
                </option>
                {municipalities.map((mun) => (
                  <option key={`mun-${mun.code}-${mun.name}`} value={mun.name}>
                    {mun.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;