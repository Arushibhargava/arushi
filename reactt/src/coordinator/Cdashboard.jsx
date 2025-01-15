import React, { useState } from "react";
import Cgroups from "./Cgroups";
import Creport from "./Creport";
import Cnotification from "./Cnotification"; 
import Ctasks from "./Ctasks";// Import Groups component
import "./Cdashboard.css";

function Dashboard() {
  const [activePage, setActivePage] = useState("Group");

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
          <p>Coordinator</p>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li
              className={activePage === "Group" ? "active" : ""}
              onClick={() => setActivePage("Group")}
            >
              Group
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
        {activePage === "Group" && <Cgroups />}
        {activePage === "Tasks" && <Ctasks />}
        {activePage === "Notification" && <Cnotification />}
        {activePage === "Report" && <Creport />}
      </main>
    </div>
  );
}

export default Dashboard;





