import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const API_URL = process.env.REACT_APP_API_URL;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjectDetails();
  }, [projectId]);

  const fetchProjectDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/getProjectDetails/${projectId}`);
      setProject(response.data);
      setLoading(false);
    } catch (err) {
      console.error("❌ Error fetching project details:", err);
      setError("Failed to load project details.");
      setLoading(false);
    }
  };

  if (loading) return <p>Loading project details...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="project-details-container">
      <h1 className="project-title">{project.projectName}</h1>
      <p className="project-description">{project.description}</p>
      <p className="funding-status">
        <strong>Funding Goal:</strong> ${project.fundingAmount.toLocaleString()}
      </p>
      <p className="funding-raised">
        <strong>Funds Raised:</strong> ${project.fundsRaised?.toLocaleString() || 0}
      </p>
      <p className="project-status">
        <strong>Status:</strong> {project.submissionStatus}
      </p>
    </div>
  );
};

export default ProjectDetails;
