import React from "react";
import "./Cdashboard.css";

const Group = () => {
  return (
    <div className="group-container">
      <h2 className="section-title">👥 Groups</h2>
      <table className="group-table">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Name of Members</th>
            <th>Project Name</th>
            <th>Mentor</th>
            <th>Abstract</th>
            <th>Team_id</th>
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
            <td>mklkk V</td>
            <td>szfdgfdhdgjdnngn xvbxcbvxvbxbx</td>
            <td>csd71</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Group;
