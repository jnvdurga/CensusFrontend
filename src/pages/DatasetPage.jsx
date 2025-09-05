import React from 'react';
import DataCard from '../components/DataCard';
import "../style/Dataset.scss" // Assuming you have a stylesheet for this page

const Dataset = () => {
  return (
    <div className="dataset-page">
      <h2 className="page-title">Columbia Population & Density Overview</h2>
      <div className="data-cards-container">
        <DataCard title="Total Population" value="51 million" />
        <DataCard title="Population Density" value="44 people/km²" />
        <DataCard title="Urban Population" value="80%" />
        <DataCard title="Rural Population" value="20%" />
      </div>
    </div>
  );
};

export default Dataset;
