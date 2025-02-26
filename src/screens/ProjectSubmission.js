import React, { useState } from "react";
import axios from "axios";
import "./ProjectSubmission.css";

const ProjectSubmission = () => {
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [sdgAlignment, setSdgAlignment] = useState("");
    const [fundingAmount, setFundingAmount] = useState("");
    const [innovatorId, setInnovatorId] = useState("innovator123"); // Placeholder ID for demo
    const API_URL = process.env.REACT_APP_API_URL;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!projectName || !description || !sdgAlignment || !fundingAmount) {
            alert("❌ Please fill in all required fields.");
            return;
        }

        const projectData = {
            projectName,
            description,
            sdgAlignment,
            fundingAmount: parseFloat(fundingAmount),
            innovatorId
        };

        try {
            const response = await axios.post(`${API_URL}/SimulateProjectSubmission`, projectData);
            console.log("✅ Project submitted successfully:", response.data);
            alert("✅ Project submitted successfully!");
            // Reset form fields after submission
            setProjectName("");
            setDescription("");
            setSdgAlignment("");
            setFundingAmount("");
        } catch (error) {
            console.error("❌ Error submitting project:", error);
            alert("❌ Project submission failed. Please try again.");
        }
    };

    return (
        <div className="submission-container">
            <h2 className="submission-title">Submit Your Impact Project</h2>
            <form onSubmit={handleSubmit} className="submission-form">
                <label>Project Name:</label>
                <input 
                    type="text" 
                    value={projectName} 
                    onChange={(e) => setProjectName(e.target.value)} 
                    required 
                />

                <label>Project Description:</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                />

                <label>SDG Alignment:</label>
                <input 
                    type="text" 
                    value={sdgAlignment} 
                    onChange={(e) => setSdgAlignment(e.target.value)} 
                    required 
                />

                <label>Funding Amount ($):</label>
                <input 
                    type="number" 
                    value={fundingAmount} 
                    onChange={(e) => setFundingAmount(e.target.value)} 
                    required 
                />

                <button type="submit" className="submit-button">Submit Project</button>
            </form>
        </div>
    );
};

export default ProjectSubmission;
