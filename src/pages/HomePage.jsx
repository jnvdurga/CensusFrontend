import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FiltersPanel from '../components/FiltersPanel';
import DataPointsPanel from '../components/DataPointsPanel';
import MapView from '../components/MapView';
import ChartView from '../components/ChartView';
import DatasetCard from '../components/DatasetCard';

import '../styles/main.scss';

const HomePage = () => {
  const [filters, setFilters] = useState({
    year: '2023',
    indicator: 'population',
    geo: 'all',
  });

  return (
    <div className="app-container">
      

      <main className="main-content">
        <FiltersPanel filters={filters} setFilters={setFilters} />
        <DataPointsPanel filters={filters} />

        <section className="map-and-chart">
          <MapView filters={filters} />
          <ChartView filters={filters} />
        </section>

        <section className="dataset-cards">
          <DatasetCard title="Literacy Rate" value="74.04%" />
          <DatasetCard title="Sex Ratio" value="940 females/1000 males" />
          <DatasetCard title="Population Density" value="464/km²" />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
