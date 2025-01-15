import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="container">
      <h1>Project Management System</h1>
      <form onSubmit={handleLogin}>
        <label>Email ID:</label>
        <input type="email" placeholder="Enter email address" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter password" required />
        <div className="options">
          <label>
            <input type="checkbox" /> Keep me signed in
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default LoginPage;
