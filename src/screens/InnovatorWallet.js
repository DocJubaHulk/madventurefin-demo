import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InnovatorWallet.css";

const InnovatorWallet = () => {
    const [walletBalance, setWalletBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;
    const innovatorId = "innovator123"; // Replace with actual user ID

    useEffect(() => {
        fetchWalletData();
    }, []);

    // Fetch Wallet Balance and Transactions
    const fetchWalletData = async () => {
        try {
            const response = await axios.get(`${API_URL}/getInnovatorWallet?innovatorId=${innovatorId}`);
            setWalletBalance(response.data.balance);
            setTransactions(response.data.transactions);
        } catch (error) {
            console.error("❌ Error fetching wallet data:", error);
        }
    };

    // Simulate requesting milestone-based funding
    const requestFunding = async (projectId, milestoneId) => {
        try {
            const fundingData = {
                projectId,
                milestoneId,
                fundingAmount: 50000, // Example amount
                innovatorId,
                walletId: "wallet123",
                fundingMethod: "Token"
            };

            const response = await axios.post(`${API_URL}/simulateFunding`, fundingData);
            console.log("✅ Funding request successful:", response.data);
            fetchWalletData(); // Refresh wallet balance after funding
        } catch (error) {
            console.error("❌ Funding request failed:", error);
        }
    };

    return (
        <div className="wallet-container">
            <h2 className="wallet-header">Innovator Wallet</h2>

            {/* Wallet Balance */}
            <div className="wallet-card">
                <p className="balance-label">Total Balance:</p>
                <p className="balance-amount">${walletBalance.toLocaleString()}</p>
            </div>

            {/* Transaction History */}
            <h3 className="transaction-title">Transaction History</h3>
            <div className="transaction-list">
                {transactions.length > 0 ? (
                    transactions.map((transaction, index) => (
                        <div key={index} className="transaction-card">
                            <p className="transaction-type">{transaction.type}</p>
                            <p className="transaction-amount">${transaction.amount.toLocaleString()}</p>
                            <p className="transaction-date">{new Date(transaction.date).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-transactions">No transactions available.</p>
                )}
            </div>

            {/* Simulate Funding Request */}
            <button className="request-funding-button" onClick={() => requestFunding("project123", "milestone456")}>
                Request Milestone Funding
            </button>
        </div>
    );
};

export default InnovatorWallet;
