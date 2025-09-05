import React, { useState, useContext } from 'react';
import ColombiaMap from './ColombiaMap';
import LineChartColumbia from './LineChartColumbia';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  IconButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import '../style/MapAreaDetails.scss';
import { IndicatorContext } from '../contexts/IndicatorContext';

const fundamentalIndicators = [
  { key: "total_population", label: "Total population" },
  { key: "male_count", label: "Number of Males" },
  { key: "female_count", label: "Number of Females" },
  { key: "children_count", label: "Population 0-14" },
  { key: "adult_count", label: "Population 15-64" },
  { key: "senior_citizen_count", label: "Population 65+" },
  { key: "urban_population_count", label: "Urban Population" },
  { key: "adult_literacy_count", label: "Literate Population Aged 15+" },
  { key: "school_attendance_count", label: "School Attendance" },
  { key: "school_population", label: "Enrollment in Education Level" },
  { key: "total_population_for_schooling", label: "Population of Official Age Group for education" },
  { key: "unemployment_count", label: "Unemployed Population" },
  { key: "labor_force", label: "Labor Force" },
  { key: "employment_count", label: "Employed Population" },
  { key: "working_age_count", label: "Working-Age Population" },
  { key: "dwelling_count", label: "Total number of dwellings" },
  { key: "house_hold_count", label: "Number of dwellings by Tenure Status" },
  { key: "water_access", label: "Households with Improved Water Source" },
  { key: "sanitation_house_count", label: "Households with Improved Sanitation" },
  { key: "electricity_house_count", label: "Households with Electricity" },
  { key: "house_holds_with_internet", label: "Households with Internet" },
  { key: "total_households", label: "Total number of households" },
  { key: "ethnic_group_population", label: "Population of Specific Ethnic Group" },
  { key: "live_births_count", label: "Number of Live Births" },
  { key: "reproductivity_women_no", label: "Number of Women of Reproductive Age" },
  { key: "number_of_infant_deaths", label: "Number of Infant Deaths" },
  { key: "immigrants", label: "Number of Immigrants" },
  { key: "emigrants", label: "Number of Emigrants" }
];

const primaryIndicators = [
  { key: "population_density", label: "Population Density" },
  { key: "avg_household_size", label: "Average Household Size" },
  { key: "sex_ratio", label: "Sex Ratio" },
  { key: "age_dependency_ratio", label: "Age Dependency Ratio" },
  { key: "urbanization_rate", label: "Urbanization Rate" },
  { key: "ethnic_composition", label: "Ethnic Composition" },
  { key: "fertility_rate", label: "Fertility Rate" },
  { key: "infant_mortality_rate", label: "Infant Mortality Rate" },
  { key: "life_expectancy", label: "Life Expectancy at Birth" },
  { key: "migration_rate", label: "Migration Rate" },
  { key: "literacy_rate", label: "Literacy Rate" },
  { key: "gross_enrollment_ratio", label: "Gross Enrollment Ratio" },
  { key: "unemployment_rate", label: "Unemployment Rate" },
  { key: "employment_to_pop", label: "Employment-to-Population Ratio" },
  { key: "housing_tenure_status", label: "Housing Tenure Status" },
  { key: "female_headed_household", label: "Females as Head of Household" },
  { key: "water_access_rate", label: "Access to Improved Water Source" },
  { key: "sanitation_access_rate", label: "Access to Improved Sanitation Facilities" },
  { key: "electricity_access_rate", label: "Electricity Access Rate" },
  { key: "internet_access_rate", label: "Internet Access Rate" }
];

function MapAreaDetails() {
  const [openFundamental, setOpenFundamental] = useState(false);
  const [openPrimary, setOpenPrimary] = useState(false);
  const { filters, setFilters } = useContext(IndicatorContext);

  const toggleFundamental = () => setOpenFundamental(prev => !prev);
  const togglePrimary = () => setOpenPrimary(prev => !prev);

  const handleClickIndicator = (item) => {
    // 🔹 Update filters with the selected column (indicator)
    setFilters(prev => ({
      ...prev,
      column: item.key
    }));
  };

  const renderIndicatorList = (items) => (
    <List>
      {items.map((item, index) => (
        <ListItem
          key={index}
          divider
          button
          onClick={() => handleClickIndicator(item)}
          style={{ cursor: "pointer" }}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className="map-area-details">
      <div className="sidebar">
        <Button variant="contained" onClick={toggleFundamental}>Fundamental Indicators</Button>
        <Drawer anchor="left" open={openFundamental} onClose={toggleFundamental}>
          <div style={{ width: 300, padding: 16, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={toggleFundamental} aria-label="close drawer">
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="h6" gutterBottom>Fundamental Indicators</Typography>
            {renderIndicatorList(fundamentalIndicators)}
          </div>
        </Drawer>

        <Button variant="contained" onClick={togglePrimary}>Primary Indicators</Button>
        <Drawer anchor="left" open={openPrimary} onClose={togglePrimary}>
          <div style={{ width: 300, padding: 16, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={togglePrimary} aria-label="close drawer">
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="h6" gutterBottom>Primary Indicators</Typography>
            {renderIndicatorList(primaryIndicators)}
          </div>
        </Drawer>
      </div>

      <div className="content">
        <div className="map-container">
          <ColombiaMap />
          <h3 className="chart-title">Colombia Map</h3>
        </div>
        {/* <div className="chart-container">
          <LineChartColumbia />
          <h3 className="chart-title">Population & Crime Trends</h3>
        </div> */}
      </div>
    </div>
  );
}

export default MapAreaDetails;
