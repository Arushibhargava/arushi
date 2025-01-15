import React from "react";
import "./Cdashboard.css";

function TasksPage() {
  return (
    <div className="dashboard-container">
      
      <main className="main-content">
        <div className="tasks-container">
          <h2 className="tasks-header">Tasks</h2>
          <div className="tasks-table">
            <table>
              <thead>
                <tr>
                  <th>Team Name</th>
                  <th>Name of Members</th>
                  <th>Project Name</th>
                  <th>Stu_ID</th>
                  <th>Team_id</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XYZ</td>
                  <td>
                    <ul>
                      <li>abc</li>
                      <li>def</li>
                    </ul>
                  </td>
                  <td>GHI</td>
                  <td>vbvbvb</td>
                  <td>csd71</td>
                  <td>6767</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TasksPage;



