import React from "react";
import "./Cdashboard.css";

function Report() {
  const reports = [
    { id: 1, name: "Report 1" },
    { id: 2, name: "Report 2" },
    { id: 3, name: "Report 3" },
    { id: 4, name: "Report 4" },
  ];

  return (
    <div className="report-container">
      <h2 className="report-header">Report</h2>
      <div className="report-list">
        {reports.map((report) => (
          <div className="report-item" key={report.id}>
            <div className="report-dot"></div>
            <button className="view-full-btn">View full</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Report;
