import React from "react";
import "./Report.css";

const Report = () => {
  return (
    <div className="dashboard">
      <div className="main-content">
        <div className="report">
          <h2>
            <span className="icon">📊</span> Report
          </h2>
          <div className="report-box">
            <div className="report-item">
              <span className="dot"></span>
              <button className="view-btn">View full</button>
            </div>
            <div className="report-item">
              <span className="dot"></span>
              <button className="view-btn">View full</button>
            </div>
            <div className="report-item">
              <span className="dot"></span>
              <button className="view-btn">View full</button>
            </div>
            <div className="report-item">
              <span className="dot"></span>
              <button className="view-btn">View full</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
