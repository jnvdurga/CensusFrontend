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

      // Department Data
      const deptData = crimeByDepartment?.map((item) => {
        const acc = { 
          FEMENINO: 0, 
          MASCULINO: 0, 
          "NO REPORTADO": 0, 
          Area: item.department, 
          total: item.total, 
          department_code: item.department_code 
        };
        item.breakdown?.forEach((gen) => {
          const key = normalizeGender(gen.gender);
          acc[key] = gen.total || 0;
        });
        return acc;
      });

      // Yearly Data
      const yearData = crimeByYears?.map((item) => {
        const acc = { 
          FEMENINO: 0, 
          MASCULINO: 0, 
          "NO REPORTADO": 0, 
          year: item.year, 
          total: item.total 
        };
        item.breakdown?.forEach((gen) => {
          const key = normalizeGender(gen.gender);
          acc[key] = gen.total || 0;
        });
        return acc;
      });

      // Municipality Data
      const muniData = crimeByMunicipalities?.map((item) => {
        const acc = { 
          FEMENINO: 0, 
          MASCULINO: 0, 
          "NO REPORTADO": 0, 
          Area: item.municipality, 
          total: item.total, 
          department: item.department 
        };
        item.breakdown?.forEach((gen) => {
          const key = normalizeGender(gen.gender);
          acc[key] = gen.total || 0;
        });
        return acc;
      });

      // Monthly Data
      const monthData = crimeByMonths?.map((item) => {
        const acc = { 
          FEMENINO: 0, 
          MASCULINO: 0, 
          "NO REPORTADO": 0, 
          month: item.month, 
          total: item.total 
        };
        item.breakdown?.forEach((gen) => {
          const key = normalizeGender(gen.gender);
          acc[key] = gen.total || 0;
        });
        return acc;
      });

      // Set state based on current view
      if (isDepartmentView) setShowDataOnChart(deptData || []);
      else setShowDataOnChart(muniData || []);

      if (isYearView) setShowYearMonth(yearData || []);
      else setShowYearMonth(monthData || []);
    }
  }, [loading, crimeByDepartment, crimeByYears, crimeByMonths, crimeByMunicipalities, isDepartmentView, isYearView]);

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

  const handleBackDepartment = () => setIsDepartmentView(true);
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
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save(filename);
        cleanupChartClone(clone);
      });
    }, 100);
  };

  // FIXED: Correct label rendering functions
  const renderInsideBarLabel = (color) => ({ x, y, width, height, value }) => {
    if (!value || value === 0) return null;
    
    return (
      <text
        x={x + width / 2}
        y={y + height / 2}
        fill={color}
        fontSize={12}
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.toLocaleString()}
      </text>
    );
  };

  const renderStackedBarLabel = (color) => ({ x, y, width, height, value }) => {
    if (!value || value === 0) return null;
    
    return (
      <text
        x={x + width / 2}
        y={y + height / 2}
        fill={color}
        fontSize={10}
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
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
        <h2>Columbia Crime Statistics by {isDepartmentView ? "Department" : "Municipality"}</h2>
        {!isDepartmentView && (
          <button
            onClick={handleBackDepartment}
            style={{ marginBottom: 10, padding: "5px 10px", background: "#007bff", color: "#fff", border: "none", borderRadius: 5, cursor: "pointer" }}
          >
            🔙 Back to Departments
          </button>
        )}
        <div style={{ marginBottom: 10 }}>
          <button onClick={() => downloadChartAsPNG(deptChartRef, "Columbia_Department_Chart.png")}>📥 PNG</button>
          <button onClick={() => downloadChartAsPDF(deptChartRef, "Columbia_Department_Chart.pdf")}>📥 PDF</button>
        </div>
        <div ref={deptChartRef} style={{ height: 500, overflowY: "auto", border: "1px solid #ddd", borderRadius: 8, padding: 10 }}>
          <ResponsiveContainer width="100%" height={Math.max((showDataOnChart?.length || 0) * 50, 500)}>
            {showDataOnChart?.length > 0 ? (
              <BarChart
                data={showDataOnChart}
                layout="vertical"
                onClick={isDepartmentView ? handleClickDepartment : undefined}
                margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number" 
                  scale={d3.scalePow().exponent(0.3)} 
                  domain={[0, 'dataMax + 10000']} 
                  tickFormatter={(value) => value.toLocaleString()}
                />
                <YAxis type="category" dataKey="Area" width={150} />
                <Tooltip formatter={(value) => value.toLocaleString()} />
                <Legend />
                <Bar dataKey="FEMENINO" stackId="a" fill="#82ca9d" name="Femenino">
                  <LabelList content={renderStackedBarLabel("#fff")} dataKey="FEMENINO" />
                </Bar>
                <Bar dataKey="MASCULINO" stackId="a" fill="#ffc658" name="Masculino">
                  <LabelList content={renderStackedBarLabel("#fff")} dataKey="MASCULINO" />
                </Bar>
                <Bar dataKey="NO REPORTADO" stackId="a" fill="#8884e8" name="No Reportado">
                  <LabelList content={renderStackedBarLabel("#000")} dataKey="NO REPORTADO" />
                </Bar>
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
            style={{ marginBottom: 10, padding: "5px 10px", background: "#007bff", color: "#fff", border: "none", borderRadius: 5, cursor: "pointer" }}
          >
            🔙 Back to Year
          </button>
        )}
        <div style={{ marginBottom: 10 }}>
          <button onClick={() => downloadChartAsPNG(genderChartRef, "Columbia_Gender_Chart.png")}>📥 PNG</button>
          <button onClick={() => downloadChartAsPDF(genderChartRef, "Columbia_Gender_Chart.pdf")}>📥 PDF</button>
        </div>
        <div ref={genderChartRef} style={{ height: 400 }}>
          <ResponsiveContainer width="100%" height={400}>
            {showYearMonth?.length > 0 ? (
              <BarChart
                data={showYearMonth}
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
                <Bar dataKey="MASCULINO" stackId="a" fill="#4e79a7" name="Masculino">
                  <LabelList content={renderStackedBarLabel("#fff")} dataKey="MASCULINO" />
                </Bar>
                <Bar dataKey="FEMENINO" stackId="a" fill="#f28e2c" name="Femenino">
                  <LabelList content={renderStackedBarLabel("#fff")} dataKey="FEMENINO" />
                </Bar>
                <Bar dataKey="NO REPORTADO" stackId="a" fill="#FF69B4" name="No Reportado">
                  <LabelList content={renderStackedBarLabel("#000")} dataKey="NO REPORTADO" />
                </Bar>
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