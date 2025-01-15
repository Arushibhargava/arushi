import React from "react";
import "./TGroups.css";

function Groups() {
  const groupData = [
    {
      teamName: "XYZ",
      members: ["abc", "def"],
      projectName: "GHI",
      mentor: "JKL",
      abstract: "szfdgfdhdgjdnngn xvbcvxbvxbx",
      teamId: "csd71",
    },
  ];

  return (
    <div className="groups">
      <h2>
        <span className="groups-icon"></span> Groups
      </h2>
      <div className="divider"></div>
      <table className="groups-table">
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
          {groupData.map((group, index) => (
            <tr key={index}>
              <td>{group.teamName}</td>
              <td>
                <ul>
                  {group.members.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </td>
              <td>{group.projectName}</td>
              <td>{group.mentor}</td>
              <td>{group.abstract}</td>
              <td>{group.teamId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Groups;

