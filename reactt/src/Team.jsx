import React from "react";
import "./Team.css"; // Add the styles here if needed

function Team() {
  return (
    <div className="team-page">
      <h1 className="page-title">My Team Details</h1>
      <div className="team-container">
        <h2>Team 1</h2>
        <p className="team-code">CSD227</p>
        <table className="team-table">
          <thead>
            <tr>
              <th>SNO.</th>
              <th>Name</th>
              <th>Class</th>
              <th>Branch</th>
              <th>stu_id</th>
              <th>E-mail</th>
              <th>Phone no.</th>
              <th>Semester</th>
              <th>Roll-no</th>
            </tr>
          </thead>
          <tbody>
            {/* Add rows dynamically here if needed */}
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>12th</td>
              <td>CSE</td>
              <td>123456</td>
              <td>johndoe@example.com</td>
              <td>9876543210</td>
              <td>5</td>
              <td>001</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>12th</td>
              <td>CSE</td>
              <td>789012</td>
              <td>janesmith@example.com</td>
              <td>9876543211</td>
              <td>5</td>
              <td>002</td>
            </tr>
          </tbody>
        </table>
        <a href="#" className="project-details-link">
          Project Details
        </a>
      </div>
    </div>
  );
}

export default Team;
