import React from "react";
import "./Notification.css";

const App = () => {
  return (
    <div className="dashboard">
      <div className="main-content">
        <div className="notification">
          <h2>
            <span className="icon">🔔</span> Notification
          </h2>
          <div className="form">
            <input type="text" placeholder="Title" className="input" />
            <textarea
              placeholder="Description"
              className="textarea"
              rows="5"
            ></textarea>
            <button className="send-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
