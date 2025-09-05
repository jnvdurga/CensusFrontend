import React from 'react';
import '../style/DataCard.scss';

const DataCard = () => {
  return (
    <div className="population-card">
      <h2>Colombia - Population Overview</h2>
      <div className="card-content">
        <div className="info-block">
          <h3>Total Population</h3>
          <p>52,215,503</p>
        </div>
        <div className="info-block">
          <h3>Population Density</h3>
          <p>45.7 people/km²</p>
        </div>
        <div className="info-block">
          <h3>Urban Population</h3>
          <p>80%</p>
        </div>
        <div className="info-block">
          <h3>Rural Population</h3>
          <p>20%</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
