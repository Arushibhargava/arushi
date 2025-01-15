import React from "react";
import "./Task.css";

function TasksPage() {
  return (
    <div className="tasks-container">
      
      <main className="main-content">
        <h1 className="task-title">
          <span className="task-icon">📋</span> My Tasks
        </h1>
        <hr className="separator" />
        <div className="tasks-details">
          <h2>Team 1</h2>
          <h3>CSD227</h3>
          <table>
            <thead>
              <tr>
                <th>SNO.</th>
                <th>Task Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Assigned Date</th>
                <th>Due Date</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {/* Add rows dynamically if needed */}
              <tr>
                <td colSpan="7" style={{ textAlign: "center", color: "#888" }}>
                  No tasks assigned yet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default TasksPage;
