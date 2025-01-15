import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleSelection from "./RoleSelection";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import Dashboard from "./Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Project from "./components/Project";
import TDashboard from "./components/TDashboard";
import Cdashboard from "./coordinator/Cdashboard"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loginteam" element={<Login />} />
        <Route path="/loginsignup" element={<Signup />} />
        <Route path="/project" element={<Project />} />
        <Route path="/tdashboard" element={<TDashboard />} />
        <Route path="/cdashboard" element={<Cdashboard />} />
        
      </Routes>

    </Router>
  );
}

export default App;

