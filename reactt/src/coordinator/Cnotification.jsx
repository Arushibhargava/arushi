import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./Cproposals.jsx";
import "./Cdashboard.css";

function Notification() {
  return (
    <Router>
      <div className="notification-container">
        <div className="notification-header">
          <h2>
            <i className="icon-bell" /> Notifications
          </h2>
          {/* Link to the Proposals page */}
          <Link to="/proposals" className="proposals-btn">
            Proposals
          </Link>
        </div>
        <div className="notification-form">
          <input
            type="text"
            placeholder="Title"
            className="notification-title"
          />
          <textarea
            placeholder="Description"
            className="notification-description"
          />
          <button className="send-btn">Send</button>
        </div>

        {/* Define routes within the Notification component */}
        <Routes>
          <Route path="/proposals" element={<Proposals />} />
        </Routes>
      </div>
    </Router>
  );
}

function Proposals() {
  return (
    <div className="proposals-container">
      <h2>Proposals</h2>
      <p>This is the Proposals page content.</p>
    </div>
  );
}

export default Notification;
