import React, { useState, useContext } from "react";
import ColombiaMap from "./ColombiaMap";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../style/MapAreaDetails.scss";
import { IndicatorContext } from "../contexts/IndicatorContext";
import { PrimaryIndicatorContext } from "../contexts/PrimaryIndicatorContext";
import { useViewMode } from "../contexts/ViewMode";

const fundamentalIndicators = [
  { key: "dwelling_count", label: "Total number of dwellings" },
  { key: "house_hold_count", label: "Number of dwellings by Tenure Status" },
  { key: "total_person", label: "Total population" },
  { key: "male_count", label: "Number of Males" },
  { key: "female_count", label: "Number of Females" },
  { key: "children_count", label: "Population 0-14" },
  { key: "adult_count", label: "Population 15-64" },
  { key: "senior_citizen_count", label: "Population 65+" },
  { key: "urban_population_count", label: "Urban Population" },
  { key: "adult_literacy_count", label: "Literate Population Aged 15+" },
  { key: "school_attendance_count", label: "School Attendance" },
  {
    key: "total_population_for_schooling",
    label: "Population of Official Age Group for education",
  },
  { key: "school_population", label: "Enrollment in Education Level" },
  { key: "employment_count", label: "Employed Population" },
  { key: "unemployment_count", label: "Unemployed Population" },
  { key: "total_population_for_work", label: "Total Population for Work" },
  { key: "working_age_count", label: "Working-Age Population" },
  {
    key: "sanitation_house_count",
    label: "Households with Improved Sanitation",
  },
  { key: "electricity_house_count", label: "Households with Electricity" },
  { key: "house_holds_with_internet", label: "Households with Internet" },
  {
    key: "ethnic_group_population",
    label: "Population of Specific Ethnic Group",
  },
  { key: "live_births_count", label: "Number of Live Births" },
  {
    key: "reproductivity_women_no",
    label: "Number of Women of Reproductive Age",
  },
  { key: "number_of_infant_deaths", label: "Number of Infant Deaths" },
];

const primaryIndicators = [
  { key: "average_household_size", label: "Average Household Size" },
  { key: "literacy_rate_over_15", label: "Literacy Rate (15+)" },
  { key: "unemployment_rate", label: "Unemployment Rate" },
  { key: "infant_mortality_rate", label: "Infant Mortality Rate" },
  { key: "fertility_rate", label: "Fertility Rate" },
  { key: "sex_ratio", label: "Sex Ratio" },
  { key: "age_dependency_ratio", label: "Age Dependency Ratio" },
  { key: "urbanization_rate", label: "Urbanization Rate" },
  { key: "ethnic_composition", label: "Ethnic Composition" },
  { key: "migration_rate", label: "Migration Rate" },
  { key: "gross_enrollment_ratio", label: "Gross Enrollment Ratio" },
  {
    key: "employment_to_population_ratio",
    label: "Employment-to-Population Ratio",
  },
  {
    key: "access_to_improved_water_source",
    label: "Access to Improved Water Source",
  },
  {
    key: "access_to_improved_sanitation_rate",
    label: "Access to Improved Sanitation Facilities",
  },
  { key: "electricity_access_rate", label: "Electricity Access Rate" },
  { key: "internet_access_rate", label: "Internet Access Rate" },
];

function MapAreaDetails() {
  const [openFundamental, setOpenFundamental] = useState(false);
  const [openPrimary, setOpenPrimary] = useState(false);
  const { setViewMode ,viewMode } = useViewMode();

  const {
    filters,
    setIndicatoreFilters,
    cancelFetch: cancelFundamental,
  } = useContext(IndicatorContext);
  const { setFilters, cancelFetch: cancelPrimary } = useContext(
    PrimaryIndicatorContext
  );

  const toggleFundamental = () => setOpenFundamental((prev) => !prev);
  const togglePrimary = () => setOpenPrimary((prev) => !prev);

const handleClickIndicator = (item, type) => {
  if (type === "fundamental") {
    // Only cancel primary if the current view is not 'indicator'
    if (viewMode !== "indicator") {
      cancelPrimary();
    }
    // Fetch fundamental indicator
    setIndicatoreFilters({ ...filters, column: item.key });
    setViewMode("indicator");
  } else if (type === "primary") {
    // Only cancel fundamental if the current view is not 'primary'
    if (viewMode !== "primary") {
      cancelFundamental();
    }
    // Fetch primary indicator
    setFilters({ ...filters, column: item.key });
    setViewMode("primary");
  }
};



  const renderIndicatorList = (items, type) => (
    <List>
      {items.map((item, index) => (
        <ListItem
          key={index}
          divider
          button
          onClick={() => handleClickIndicator(item, type)}
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
        <Button variant="contained" onClick={toggleFundamental}>
          Fundamental Indicators
        </Button>
        <Drawer
          anchor="left"
          open={openFundamental}
          onClose={toggleFundamental}
        >
          <div
            style={{
              width: 300,
              padding: 16,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={toggleFundamental} aria-label="close drawer">
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="h6" gutterBottom>
              Fundamental Indicators
            </Typography>
            {renderIndicatorList(fundamentalIndicators, "fundamental")}
          </div>
        </Drawer>

        <Button variant="contained" onClick={togglePrimary}>
          Primary Indicators
        </Button>
        <Drawer anchor="left" open={openPrimary} onClose={togglePrimary}>
          <div
            style={{
              width: 300,
              padding: 16,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={togglePrimary} aria-label="close drawer">
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="h6" gutterBottom>
              Primary Indicators
            </Typography>
            {renderIndicatorList(primaryIndicators, "primary")}
          </div>
        </Drawer>
      </div>

      <div className="content">
        <div className="map-container">
          <ColombiaMap />
          <h3 className="chart-title">Colombia Map</h3>
        </div>
      </div>
    </div>
  );
}

export default MapAreaDetails;
