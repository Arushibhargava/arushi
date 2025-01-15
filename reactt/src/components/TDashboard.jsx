import React, { useState } from "react"; // Added useState import
import TeamMembers from "./TeamMembers";
import TGroups from "./TGroups";
import Tasks from "./Tasks";
import Notification from "./Notification";
import Report from "./Report";
import "./TDashboard.css";

function TDashboard() {
  const [activePage, setActivePage] = useState("My Teams"); // Initialize state for active page

  return (
    <div className="dashboard-container">
      {/* Sidebar Section */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
          <p>Team</p>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li
              className={activePage === "My Teams" ? "active" : ""}
              onClick={() => setActivePage("My Teams")}
            >
              Team Members
            </li>
            <li
              className={activePage === "Groups" ? "active" : ""}
              onClick={() => setActivePage("Groups")}
            >
              Groups
            </li>
            <li
              className={activePage === "Tasks" ? "active" : ""}
              onClick={() => setActivePage("Tasks")}
            >
              Tasks
            </li>
            <li
              className={activePage === "Notification" ? "active" : ""}
              onClick={() => setActivePage("Notification")}
            >
              Notification
            </li>
            <li
              className={activePage === "Report" ? "active" : ""}
              onClick={() => setActivePage("Report")}
            >
              Report
            </li>
          </ul>
        </nav>
        <button className="logout-btn">Logout</button>
      </aside>

      {/* Main Content Section */}
      <main className="main-content">
        {activePage === "My Teams" && <TeamMembers />}
        {activePage === "Groups" && <TGroups />}
        {activePage === "Tasks" && <Tasks />}
        {activePage === "Notification" && <Notification />}
        {activePage === "Report" && <Report />}
      </main>
    </div>
  );
}

export default TDashboard;

