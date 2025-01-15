import React from "react";
import "./Tasks.css";

function Tasks() {
  return (
    <div className="tasks">
      <h2>
        <span className="tasks-icon"></span> Tasks
      </h2>
      <div className="divider"></div>
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Document Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Upload File</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XYZ</td>
            <td>00/00/2000</td>
            <td>00/00/2000</td>
            <td>
              <span className="upload-icon"></span>
            </td>
            <td>
              <span className="status pending">Pending</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
