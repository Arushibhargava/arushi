import React from "react";
import "./Cdashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h1 className="sidebar-header">Dashboard</h1>
        <p className="sidebar-role">Coordinator</p>
        <nav className="sidebar-menu">
          <ul>
            <li>Group</li>
            <li>Tasks</li>
            <li className="active">Notification</li>
            <li>Report</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <div className="proposals-section">
          <h2 className="section-title">
            <i className="icon">📋</i> Proposals
          </h2>
          <div className="proposal-list">
            {["Proposal 1", "Proposal 2", "Proposal 3"].map((proposal, index) => (
              <div key={index} className="proposal-item">
                <span className="proposal-name">{proposal}</span>
                <div className="proposal-actions">
                  <button className="btn accept">ACCEPT</button>
                  <button className="btn reject">REJECT</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;