import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css";

const Project = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save project details here
    navigate("/tdashboard"); // Redirect to the Dashboard page
  };

  return (
    <div className="project-details-container">
      <h1>Project Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            placeholder="Enter Project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Tech Stack</label>
          <input
            type="text"
            placeholder="Enter Tech Stack"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Project;