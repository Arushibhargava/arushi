import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/tdashboard");
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/loginsignup");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>PROJECT MANAGEMENT SYSTEM</h1>
        <img src="https://via.placeholder.com/300" alt="Project Management" />
      </div>
      <div className="login-right">
        <h2>Let's you sign in</h2>
        <p>Welcome to your page</p>
        <form>
          <label htmlFor="team_id">Team_id</label>
          <input type="text" id="team_id" placeholder="Enter team_id" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
          <div className="remember-me">
            <input type="checkbox" id="keep-login" />
            <label htmlFor="keep-login" align>Keep me login</label>
          </div>
          <button type="button" onClick={handleSignIn}>
            Sign in
          </button>
        </form>
        <p>
          Don’t have an account?{" "}
          <span className="signup-link" onClick={handleSignUp}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;