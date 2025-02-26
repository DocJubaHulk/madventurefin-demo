import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ImpactInvestment.css";

const ImpactInvestment = () => {
    const [investmentAmount, setInvestmentAmount] = useState("");
    const [selectedProject, setSelectedProject] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [investmentOpportunities, setInvestmentOpportunities] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    // Fetch available investment opportunities
    useEffect(() => {
        fetchInvestmentOpportunities();
    }, []);

    const fetchInvestmentOpportunities = async () => {
        try {
            const response = await axios.get(`${API_URL}/getInvestmentOpportunities`);
            setInvestmentOpportunities(response.data);
        } catch (error) {
            console.error("Error fetching investment opportunities:", error);
        }
    };

    // Handle investment submission
    const handleInvestment = async () => {
        if (!investmentAmount || !selectedProject) {
            setStatusMessage("❌ Please enter investment amount and select a project.");
            return;
        }

        const investmentData = {
            investorId: "12345",  // Dummy investor ID (Replace with actual ID)
            investmentAmount: parseFloat(investmentAmount),
            projectId: selectedProject,
        };

        try {
            const response = await axios.post(`${API_URL}/simulateInvestment`, investmentData);
            setStatusMessage(`✅ Investment Successful: $${investmentAmount} in project ${selectedProject}`);
            setInvestmentAmount("");
            setSelectedProject("");
            fetchInvestmentOpportunities();  // Refresh available projects
        } catch (error) {
            console.error("Investment error:", error);
            setStatusMessage("❌ Investment failed. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2 className="header">Impact Investment</h2>
            <p className="instructions">Select a project and enter the amount to invest.</p>

            {/* Dropdown for selecting a project */}
            <select
                className="project-dropdown"
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
            >
                <option value="">Select a Project</option>
                {investmentOpportunities.map((project) => (
                    <option key={project.id} value={project.id}>
                        {project.projectName} - Min Investment: ${project.minInvestment}
                    </option>
                ))}
            </select>

            <input
                type="number"
                placeholder="Enter Investment Amount"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
            />

            <button onClick={handleInvestment} className="invest-button">
                Invest
            </button>

            {statusMessage && <p className="status">{statusMessage}</p>}
        </div>
    );
};

export default ImpactInvestment;
