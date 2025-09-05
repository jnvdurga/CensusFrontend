// App.jsx
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Header from './components/Header';
import CrimePage from './pages/CrimePage';
import DatasetPage from './pages/DatasetPage';
import IndicatorPage from './pages/IndicatorPage';
import MapAreaDetails from './components/MapAreaDetails';
import '../src/App.scss'
import { CrimeProvider } from './contexts/CrimeContex';
import { IndicatoreProvider } from './contexts/IndicatorContext';
import { ViewModeProvider } from './contexts/ViewMode';
import { PrimaryIndicatorProvider } from './contexts/PrimaryIndicatorContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="app-container">
        <Header />
        <div className="main-content">
          <div className="page-content">
            <h2>Welcome to the Dashboard</h2>
            <p>Select a page from the header.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    path: '/crime',
    element: (
      <div className="app-container">
        <Header />
        <div className="main-content">
          <div className="page-content">
            <CrimePage />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: '/dataset',
    element: (
      <div className="app-container">
        <Header />
        <div className="main-content">
          <div className="page-content">
            <DatasetPage />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: '/indicator',
    element: (
      <div className="app-container">
        <Header />
        <div className="main-content">
          <div className="page-content">
            <IndicatorPage />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: '/map-area-details',
    element: (
      <div className="app-container">
        <Header />
        <div className="main-content">
          <div className="page-content">
            <MapAreaDetails />
          </div>
        </div>
      </div>
    ),
  },
]);

function App() {
  return(
    <ViewModeProvider>
    <CrimeProvider>
      <PrimaryIndicatorProvider>
        <IndicatoreProvider>
          <RouterProvider router={router} />;
        </IndicatoreProvider>
        
      </PrimaryIndicatorProvider>
        
      </CrimeProvider>
    </ViewModeProvider>
  )
  
  
}

export default App;
