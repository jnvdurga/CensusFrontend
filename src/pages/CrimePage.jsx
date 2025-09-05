import React, { useState } from "react";
import "../style/Crimepage.scss";
import LineChart from "../components/LineChartColumbia";
import Dropdowns from "../components/Dropdown";
import FundamentalDropdown from "../components/FundamentalDropdown";
import HeatMap from "../components/MapDetail/HeatMap";
import ColombiaMap from "../components/ColombiaMap";

function CrimePage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [active, setActive] = useState("Fundamental");
  const [showContent, setShowContent] = useState("chart"); // State to toggle content visibility

  // ✅ Import context values

  // Handle dropdown filters
  const handleFilterApply = (filters) => {
    console.log("Applying filters to API:", filters);
    fetchCrimeData(filters); // ✅ call API with filters
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      {/* Toggle Button */}
      <div className="toggle-container">
        <div className="switch">
          <button
            className={
              active === "Fundamental" ? "toggle-btn active" : "toggle-btn"
            }
            onClick={() => setActive("Fundamental")}
          >
            Fundamental
          </button>
          <button
            className={
              active === "Primary" ? "toggle-btn active" : "toggle-btn"
            }
            onClick={() => setActive("Primary")}
          >
            Primary
          </button>
          <div
            className={`slider ${active === "Primary" ? "right" : "left"}`}
          ></div>
        </div>
        <button
          className="data-on-map-btn"
          onClick={() => {
            setShowContent((prv) => (prv === "chart" ? "map" : "chart"));
          }}
        >
          Data on {showContent === "chart" ? "Map" : "Chart"}
        </button>
      </div>

      {/* Filters */}
      <div className="filter-section">
        {active === "Fundamental" ? (
          <>
            <FundamentalDropdown />
          </>
        ) : (
          <Dropdowns onFilterApply={handleFilterApply} />
        )}
      </div>

      {/* Map and Chart */}
      <div className="chart-container">
        
        
          {showContent === "chart" ? (
           <div className="chart"> <LineChart filter={selectedFilter} /> </div>
          ) : (
            <div className="map"><ColombiaMap /></div>
            
          )}
        
      </div>
    </div>
  );
}

export default CrimePage;
