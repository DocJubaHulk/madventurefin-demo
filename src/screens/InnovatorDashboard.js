import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./InnovatorDashboard.css"; // Ensure styles are loaded

const InnovatorDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetchProjects();
    }, []);

    // Fetch projects linked to the logged-in innovator
    const fetchProjects = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/getInnovatorProjects`);
            setProjects(response.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
        setLoading(false);
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Innovator Dashboard</h1>

            <div className="dashboard-sections">
                <Link to="/submit-project" className="dashboard-card">
                    <h2>Submit a Project</h2>
                    <p>Start a new impact project submission.</p>
                </Link>

                <div className="dashboard-card">
                    <h2>My Projects</h2>
                    {loading ? (
                        <p>Loading projects...</p>
                    ) : projects.length === 0 ? (
                        <p>No projects found</p>
                    ) : (
                        <ul className="project-list">
                            {projects.map((project) => (
                                <li key={project.id} className="project-item">
                                    <span>{project.projectName}</span>
                                    <Link to={`/project-details/${project.id}`} className="view-details">
                                        View Details
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <Link to="/wallet" className="dashboard-card">
                    <h2>Innovator Wallet</h2>
                    <p>View and manage your funding and transactions.</p>
                </Link>

                <Link to="/impact-reports" className="dashboard-card">
                    <h2>Impact Reports</h2>
                    <p>Generate reports on your project's progress.</p>
                </Link>
            </div>
        </div>
    );
};

export default InnovatorDashboard;
