import React, { useEffect, useState, useRef, useContext } from "react";
import "../style/LineChartColumbia.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import * as d3 from "d3";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { CrimeContext } from "../contexts/CrimeContex";
import Loader from "../components/Loader";

const LineChartColumbia = () => {
  const [showDataOnChart, setShowDataOnChart] = useState([]);
  const [showYearMonth, setShowYearMonth] = useState([]);
 
  const {
    crimeByYears,
    crimeByDepartment,
    crimeByMonths,
    crimeByMunicipalities,
    loading,
    fetchMonths,
    fetchMunicipalities,
    isYearView,
    setIsYearView,
    isDepartmentView,
    setIsDepartmentView,
  } = useContext(CrimeContext);

  const deptChartRef = useRef(null);
  const genderChartRef = useRef(null);

  // Transform data when API data changes
  useEffect(() => {
    if (!loading) {
      const normalizeGender = (gender) => {
        if (!gender) return "NO REPORTADO";
        gender = gender.toString().trim().toUpperCase();
        if (gender === "FEMENINO") return "FEMENINO";
        if (gender === "MASCULINO") return "MASCULINO";
        return "NO REPORTADO";
      };
     
      // Set state based on current view
      if (isDepartmentView) setShowDataOnChart(crimeByDepartment || []);
      else setShowDataOnChart(crimeByMunicipalities || []);

      if (isYearView) setShowYearMonth(crimeByYears || []);
      else setShowYearMonth(crimeByMonths || []);
    }
  }, [
    loading,
    crimeByDepartment,
    crimeByYears,
    crimeByMonths,
    crimeByMunicipalities,
    isDepartmentView,
    isYearView,
  ]);

  // Click Handlers
  const handleClickDepartment = async (chartData) => {
    if (!chartData?.activeLabel) return;
    const departmentName = chartData.activeLabel;
    const department = crimeByDepartment.find(
      (d) => d.department === departmentName
    );

    if (department?.department_code) {
      await fetchMunicipalities(department.department_code);
      setIsDepartmentView(false);
    }
  };

  const handleClickMonth = async (chartData) => {
    if (!chartData?.activeLabel) return;
    const year = chartData.activeLabel;

    if (year) {
      await fetchMonths(year);
      setIsYearView(false);
    }
  };

  const handleBackDepartment = () => {
  setShowDataOnChart([]);        // clear municipality data
  setIsDepartmentView(true);     // switch flag back
};

  const handleBackYear = () => {
    setShowYearMonth([]);
    setIsYearView(true);
  };

  // Download helpers
  const prepareChartForCapture = (chartRef) => {
    const chartContainer = chartRef.current;
    if (!chartContainer) return null;
    const clone = chartContainer.cloneNode(true);
    clone.style.overflow = "visible";
    clone.style.height = "auto";
    clone.style.width = "100%";
    clone.style.position = "absolute";
    clone.style.left = "-9999px";
    document.body.appendChild(clone);
    return clone;
  };

  const cleanupChartClone = (clone) => {
    if (clone?.parentNode) clone.parentNode.removeChild(clone);
  };

  const downloadChartAsPNG = (chartRef, filename) => {
    const clone = prepareChartForCapture(chartRef);
    if (!clone) return;
    setTimeout(() => {
      html2canvas(clone, { scale: 2, useCORS: true }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        cleanupChartClone(clone);
      });
    }, 100);
  };

  const downloadChartAsPDF = (chartRef, filename) => {
    const clone = prepareChartForCapture(chartRef);
    if (!clone) return;
    setTimeout(() => {
      html2canvas(clone, { scale: 2, useCORS: true }).then((canvas) => {
        const pdf = new jsPDF("landscape", "mm", "a4");
        const imgWidth = 280;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(
          canvas.toDataURL("image/png"),
          "PNG",
          10,
          10,
          imgWidth,
          imgHeight
        );
        pdf.save(filename);
        cleanupChartClone(clone);
      });
    }, 100);
  };


  const renderStackedBarLabel = (color) => ({ x, y, width, height, value }) => {
  if (!value || value === 0) return null;

  const fontSize = 12;

  return (
    <text
      x={x + width / 2}        // center of the bar
      y={y + height / 2}
      fill={color}
      fontSize={fontSize}
      fontWeight="bold"
      textAnchor="middle"
      dominantBaseline="middle"
      pointerEvents="none"      // ensures label is above everything
    >
      {value.toLocaleString()}
    </text>
  );
};


  if (loading) return <Loader />;

  return (
    <div className="line-top">
      {/* Department/Municipality Chart */}
      <div className="line-chart-container">
        <h2>
          Columbia Crime Statistics by{" "}
          {isDepartmentView ? "Department" : "Municipality"}
        </h2>
        {!isDepartmentView && (
          <button
            onClick={handleBackDepartment}
            style={{
              marginBottom: 10,
              padding: "5px 10px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            🔙 Back to Departments
          </button>
        )}
        <div style={{ marginBottom: 10 }}>
          <button
            onClick={() =>
              downloadChartAsPNG(deptChartRef, "Columbia_Department_Chart.png")
            }
          >
            📥 PNG
          </button>
          <button
            onClick={() =>
              downloadChartAsPDF(deptChartRef, "Columbia_Department_Chart.pdf")
            }
          >
            📥 PDF
          </button>
        </div>
        <div
          ref={deptChartRef}
          style={{
            height: 500,
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 10,
          }}
        >
          <ResponsiveContainer
            width="100%"
            height={Math.max((showDataOnChart?.length || 0) * 50, 500)}
          >
            {showDataOnChart?.length > 0 ? (
              <BarChart
                barSize={60}
                data={showDataOnChart.map((item) => {
                  const breakdownData = {};
                  item.breakdown?.forEach((b) => {
                    // b could be { gender: 'MASCULINO', total: 123 }
                    const categoryKey = Object.keys(b)[0]; // e.g. "gender" / "age_group" / "weapon_type"
                    const categoryValue = b[categoryKey]; // e.g. "MASCULINO"
                    breakdownData[categoryValue] = b.total;
                  });
                  return {
                    ...item,
                    Area: item.department || item.municipality,
                    ...breakdownData,
                  };
                })}
                layout="vertical"
                onClick={isDepartmentView ? handleClickDepartment : undefined}
                margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  type="number"
                  scale={d3.scalePow().exponent(0.3)}
                  domain={[0, "dataMax + 10000"]}
                  tickFormatter={(value) => value.toLocaleString()}
                />
                <YAxis type="category" dataKey="Area" width={150} />
                <Tooltip formatter={(value) => value.toLocaleString()} />
                <Legend />

                {/* Dynamically generate Bars based on breakdown keys */}
                {[
                  ...new Set(
                    showDataOnChart.flatMap(
                      (item) =>
                        item.breakdown?.map((b) => {
                          const categoryKey = Object.keys(b)[0];
                          return b[categoryKey]; // e.g. FEMENINO, ADULTOS, REVOLVER
                        }) || []
                    )
                  ),
                ].map((key, index) => (
                  <Bar
                    key={key}
                    dataKey={key}
                    stackId="a"
                    fill={
                      ["#4e79a7", "#f28e2c", "#000000", "#82ca9d", "#ffc658"][
                        index % 5
                      ]
                    }
                    name={key}
                  >
                    <LabelList
                      content={renderStackedBarLabel("#000000")}
                      dataKey={key}
                    />
                  </Bar>
                ))}
              </BarChart>
            ) : (
              <p>No data to display</p>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gender/Year Chart */}
      <div className="line-chart-container" style={{ marginTop: 40 }}>
        <h2>Crime by Gender (Stacked) - {isYearView ? "Yearly" : "Monthly"}</h2>
        {!isYearView && (
          <button
            onClick={handleBackYear}
            style={{
              marginBottom: 10,
              padding: "5px 10px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            🔙 Back to Year
          </button>
        )}
        <div style={{ marginBottom: 10 }}>
          <button
            onClick={() =>
              downloadChartAsPNG(genderChartRef, "Columbia_Gender_Chart.png")
            }
          >
            📥 PNG
          </button>
          <button
            onClick={() =>
              downloadChartAsPDF(genderChartRef, "Columbia_Gender_Chart.pdf")
            }
          >
            📥 PDF
          </button>
        </div>
        <div ref={genderChartRef} style={{ height: 400 }}>
          <ResponsiveContainer width="100%" height={400}>
            {showYearMonth?.length > 0 ? (
              <BarChart
              
                data={showYearMonth.map((item) => {
                  // Flatten breakdown into top-level keys
                  const breakdownData = {};
                  item.breakdown?.forEach((b) => {
                    breakdownData[b[Object.keys(b)[0]]] = b.total;
                  });

                  return {
                    ...item,
                    ...breakdownData,
                  };
                })}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                barGap={0}
                barCategoryGap="20%"
                onClick={isYearView ? handleClickMonth : null}
                barSize={45}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={isYearView ? "year" : "month"} />
                <YAxis tickFormatter={(value) => value.toLocaleString()} />
                <Tooltip formatter={(value) => value.toLocaleString()} />
                <Legend />

                {/* Dynamically generate Bars based on breakdown keys */}
                {[
                  ...new Set(
                    showYearMonth.flatMap(
                      (item) =>
                        item.breakdown?.map((b) => b[Object.keys(b)[0]]) || []
                    )
                  ),
                ].map((key, index) => (
                  <Bar
                    key={key}
                    dataKey={key}
                    stackId="a"
                    fill={
                      ["#4e79a7", "#f28e2c", "#000000", "#82ca9d", "#ffc658"][
                        index % 5
                      ]
                    } // rotate colors
                    name={key}
                  >
                    <LabelList
                      content={renderStackedBarLabel("#000000")}
                      dataKey={key}
                    />
                  </Bar>
                ))}
              </BarChart>
            ) : (
              <p>No data to display</p>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LineChartColumbia;
