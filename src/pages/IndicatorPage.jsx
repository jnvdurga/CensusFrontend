import React, { useContext } from 'react';
import '../style/IndicatorPage.scss';
import { useNavigate } from 'react-router-dom';
import columbia from '../assets/colambia.jpg';
import lineChart from '../assets/line_chart.png';
import { useViewMode } from '../contexts/ViewMode';

function IndicatorPage() {
  const navigate = useNavigate();
  const { setViewMode } = useViewMode();

  // Card click handlers update view mode and route
  const handleIndicatorClick = () => {
    setViewMode('indicator'); // Set mode to indicator
    navigate('/map-area-details');
  };

  const handleCrimeClick = () => {
    setViewMode('crime'); // Set mode to crime
    navigate('/crime');
  };

  return (
    <div className="indicator-main">
      <div className="card" onClick={handleIndicatorClick}>
        <img src={columbia} alt="Colombia Map" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Colombia census 2020</h2>
          <p className="card-description">
            Explore interactive map layers showing population, crime trends and district boundaries across Colombia.
          </p>
        </div>
      </div>
      <div className="card" onClick={handleCrimeClick}>
        <img src={lineChart} alt="Line Chart" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Crime analysis and Trends</h2>
          <p className="card-description">
            Visualize how the population and criminal case statistics have changed over time using dynamic charts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndicatorPage;
