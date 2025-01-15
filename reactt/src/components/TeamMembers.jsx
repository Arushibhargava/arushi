import React from "react";
import "./TeamMembers.css";

const TeamMembers = () => {
  return (
    <div className="team-members">
      <h2 className="section-title">Team Members</h2>
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
            <th>rollno</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>B.Tech</td>
            <td>CSE</td>
            <td>12345</td>
            <td>john@example.com</td>
            <td>9876543210</td>
            <td>6</td>
            <td>101</td>
          </tr>
        </tbody>
      </table>
      <button className="create-new-btn">+ Create New</button>
    </div>
  );
};

export default TeamMembers;
