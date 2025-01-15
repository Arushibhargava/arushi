import React, { useState } from "react";
import Team from "./Team";
import Task from "./Task"; 
import Notification from "./Notification";
import Report from "./Report";
import "./Dashboard.css";

function Dashboard() {
  const [activePage, setActivePage] = useState("My Teams");

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
          <p>Mentor</p>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li
              className={activePage === "My Teams" ? "active" : ""}
              onClick={() => setActivePage("My Teams")}
            >
              My Teams
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

      <main className="main-content">
        {activePage === "My Teams" && <Team />}
        {activePage === "Tasks" && <Task />}
        {activePage === "Notification" && <Notification />}
        {activePage === "Report" && <Report />}
      </main>
    </div>
  );
}

export default Dashboard;


