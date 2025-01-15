import React from "react";
import "./Report.css";

const Report = () => {
  return (
    <div className="dashboard">
      <div className="main-content">
        <div className="report-section">
          <h2>
            <span className="icon">📊</span> Report
          </h2>
          <div className="report-box">
            <h3>Report a problem</h3>
            <div className="form-group">
              <label>Select</label>
              <select className="dropdown">
                <option>All</option>
                <option>Team Members</option>
                <option>Group</option>
                <option>Tasks</option>
                <option>Notification</option>
              </select>
            </div>
            <textarea
              placeholder="Description"
              className="textarea"
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;

