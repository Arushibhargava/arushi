import React from "react";
import "./Notification.css";

function Notification() {
  const notifications = [
    { id: 1, message: "You have a new task assigned." },
    { id: 2, message: "Your project report is due soon." },
    { id: 3, message: "Meeting scheduled for tomorrow." },
    { id: 4, message: "Team collaboration updated." },
  ];

  return (
    <div className="notification-container">
      <h2 className="notification-header">
        <span className="notification-icon"></span> Notification
      </h2>
      <div className="divider"></div>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <span className="notification-bullet"></span>
            <span className="notification-text">{notification.message}</span>
            <button className="view-full-button">View full</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
