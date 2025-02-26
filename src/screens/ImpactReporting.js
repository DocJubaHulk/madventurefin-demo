import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ImpactReporting.css";

const ImpactReporting = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const API_URL = process.env.REACT_APP_API_URL;

    // Fetch available reports
    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/getImpactReports`);
            setReports(response.data);
        } catch (error) {
            console.error("Error fetching reports:", error);
        }
        setLoading(false);
    };

    // Generate a new report
    const generateReport = async () => {
        setStatusMessage("🔄 Generating report...");
        try {
            const response = await axios.post(`${API_URL}/generateImpactReport`);
            setStatusMessage("✅ Report generated successfully!");
            fetchReports();  // Refresh reports list
        } catch (error) {
            console.error("Error generating report:", error);
            setStatusMessage("❌ Failed to generate report.");
        }
    };

    return (
        <div className="container">
            <h2 className="header">Impact Reporting</h2>
            <p className="description">Generate reports on project impact metrics.</p>

            <button className="generate-button" onClick={generateReport} disabled={loading}>
                {loading ? "Generating..." : "Generate Report"}
            </button>

            {statusMessage && <p className="status">{statusMessage}</p>}

            <h3 className="report-list-title">Available Reports</h3>
            <ul className="report-list">
                {reports.length === 0 ? (
                    <p>No reports available</p>
                ) : (
                    reports.map((report) => (
                        <li key={report.id} className="report-item">
                            <span>{report.title}</span>
                            <a href={report.downloadUrl} download className="download-link">
                                Download
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ImpactReporting;
