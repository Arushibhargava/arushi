import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation between pages
import "./RoleSelection.css"; // Include the CSS styles

function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    switch (role) {
      case "team":
        navigate("/loginteam");
        break;
      case "mentor":
        navigate("/login");
        break;
      case "coordinator":
        navigate("/cdashboard");
        break;
      case "admin":
        navigate("/admin-login");
        break;
      default:
        break;
    }
  };

  return (
    <div className="role-selection">
      <h1>Login as ??</h1>
      <div className="role-container">
        <div className="role-card" onClick={() => handleRoleClick("admin")}>
          <img
            src="https://via.placeholder.com/150" // Replace with the Admin image URL
            alt="Admin"
          />
          <p>ADMIN</p>
        </div>
        <div className="role-card" onClick={() => handleRoleClick("coordinator")}>
          <img
            src="https://via.placeholder.com/150" // Replace with the Coordinator image URL
            alt="Coordinator"
          />
          <p>COORDINATOR</p>
        </div>
        <div className="role-card" onClick={() => handleRoleClick("mentor")}>
          <img
            src="https://via.placeholder.com/150" // Replace with the Mentor image URL
            alt="Mentor"
          />
          <p>MENTOR</p>
        </div>
        <div className="role-card" onClick={() => handleRoleClick("team")}>
          <img
            src="https://via.placeholder.com/150" // Replace with the Team image URL
            alt="Team"
          />
          <p>TEAM</p>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
