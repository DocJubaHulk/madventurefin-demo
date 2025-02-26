import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InvestorWallet.css";

const InvestorWallet = () => {
    const [walletBalance, setWalletBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL; // Get API URL from environment variable

    // Fetch wallet balance and transactions from API
    useEffect(() => {
        fetchWalletDetails();
    }, []);

    const fetchWalletDetails = async () => {
        try {
            const response = await axios.get(`${API_URL}/getInvestorWallet`);
            setWalletBalance(response.data.balance);
            setTransactions(response.data.transactions);
        } catch (error) {
            console.error("❌ Error fetching wallet details:", error);
        }
    };

    return (
        <div className="container">
            <h2 className="header">Investor Wallet</h2>

            {/* Wallet Balance Section */}
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
                            <p className="transaction-date">{transaction.date}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-transactions">No transactions found.</p>
                )}
            </div>

            {/* Add Funds Button (Optional) */}
            <button className="add-funds-button">+ Add Funds</button>
        </div>
    );
};

export default InvestorWallet;
