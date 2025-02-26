import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InvestorDashboard.css";

const InvestorDashboard = () => {
    const [totalInvestment, setTotalInvestment] = useState(0);
    const [portfolioGrowth, setPortfolioGrowth] = useState(0);
    const [investments, setInvestments] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    // Fetch investment details from API
    const fetchInvestments = async () => {
        try {
            const response = await axios.get(`${API_URL}/getInvestorInvestments`);
            setInvestments(response.data);
            // Calculate total investment and growth dynamically
            const total = response.data.reduce((acc, inv) => acc + inv.investmentAmount, 0);
            setTotalInvestment(total);
            setPortfolioGrowth(12.5); // Placeholder for API-based calculation
        } catch (error) {
            console.error("Error fetching investments:", error);
        }
    };

    useEffect(() => {
        fetchInvestments();
    }, []);

    // Simulate investment and update database
    const handleInvestment = async () => {
        const investmentData = {
            investorId: "12345",
            investmentAmount: 10000,
            investmentCategory: "Tech",
            walletId: "wallet123"
        };

        try {
            const response = await axios.post(`${API_URL}/simulateInvestment`, investmentData);
            console.log("Investment success:", response.data);
            fetchInvestments();
        } catch (error) {
            console.error("Investment error:", error);
        }
    };

    return (
        <div className="container">
            <h2 className="header">Investor Dashboard</h2>
            <div className="investment-summary">
                <p className="summary-label">Total Investment</p>
                <p className="summary-value">${totalInvestment.toLocaleString()}</p>
                <p className="summary-label">Portfolio Growth</p>
                <p className="summary-value positive">+{portfolioGrowth.toFixed(1)}%</p>
                <button className="reinvest-button" onClick={handleInvestment}>
                    Simulate Investment
                </button>
            </div>
            <h3 className="portfolio-title">Investment Portfolio</h3>
            <div className="investment-list">
                {investments.map((investment, index) => (
                    <div key={index} className="investment-card">
                        <p className="investment-project">{investment.projectName}</p>
                        <p className="investment-amount">
                            Invested: ${investment.investmentAmount.toLocaleString()}
                        </p>
                        <p className="investment-return">
                            Expected Return: {investment.expectedReturns}%
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InvestorDashboard;

