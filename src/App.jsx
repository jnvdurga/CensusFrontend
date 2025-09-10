// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CrimePage from "./pages/CrimePage";
import DatasetPage from "./pages/DatasetPage";
import IndicatorPage from "./pages/IndicatorPage";
import MapAreaDetails from "./components/MapAreaDetails";
import "../src/App.scss";

import { CrimeProvider } from "./contexts/CrimeContex";
import { IndicatoreProvider } from "./contexts/IndicatorContext";
import { ViewModeProvider } from "./contexts/ViewMode";
import { PrimaryIndicatorProvider } from "./contexts/PrimaryIndicatorContext";
import { MunicipalityProvider } from "./contexts/MunicipalityContext";

function App() {
  return (
    <BrowserRouter>
      <ViewModeProvider>
        <CrimeProvider>
          <PrimaryIndicatorProvider>
            <IndicatoreProvider>
              <MunicipalityProvider>
                <Header />
                <div className="main-content">
                  <div className="page-content">
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <div>
                            <h2>Welcome to the Dashboard</h2>
                            <p>Select a page from the header.</p>
                          </div>
                        }
                      />
                      <Route path="/crime" element={<CrimePage />} />
                      <Route path="/dataset" element={<DatasetPage />} />
                      <Route path="/indicator" element={<IndicatorPage />} />
                      <Route path="/map-area-details" element={<MapAreaDetails />} />
                    </Routes>
                  </div>
                </div>
              </MunicipalityProvider>
            </IndicatoreProvider>
          </PrimaryIndicatorProvider>
        </CrimeProvider>
      </ViewModeProvider>
    </BrowserRouter>
  );
}

export default App;
