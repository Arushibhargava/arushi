import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    navigate("/project"); // Navigate to Project Details page on signup
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Don’t have Account?</h1>
        <p>Welcome to your page</p>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Team Name</label>
            <input type="text" placeholder="Enter team name" required />
          </div>
          <div className="form-group">
            <label>Team ID</label>
            <input type="text" placeholder="Enter user id" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="signup-button">Sign up</button>
        </form>
      </div>
      <div className="signup-right">
        <h1>PROJECT MANAGEMENT SYSTEM</h1>
        <img
          src="https://via.placeholder.com/300" // Replace this with the actual image URL
          alt="Project Management Illustration"
        />
      </div>
    </div>
  );
};

export default Signup;