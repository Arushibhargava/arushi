import React from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    navigate("/"); // Redirect to login page after sign-up
  };

  return (
    <div className="container">
      <h1>Don't Have an Account?</h1>
      <form onSubmit={handleSignUp}>
        <label>Mentor Name:</label>
        <input type="text" placeholder="Enter mentor name" required />
        <label>Email Address:</label>
        <input type="email" placeholder="Enter email address" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter password" required />
        <label>Phone Number:</label>
        <input type="tel" placeholder="Enter phone number" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
