import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransferandPayment.css";

const TransferandPayment = () => {
    const [transferAmount, setTransferAmount] = useState("");
    const [recipient, setRecipient] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [walletBalance, setWalletBalance] = useState(0);
    const API_URL = process.env.REACT_APP_API_URL;

    // Fetch current wallet balance
    useEffect(() => {
        fetchWalletBalance();
    }, []);

    const fetchWalletBalance = async () => {
        try {
            const response = await axios.get(`${API_URL}/getWalletBalance`);
            setWalletBalance(response.data.balance);
        } catch (error) {
            console.error("Error fetching wallet balance:", error);
        }
    };

    // Handle fund transfer
    const handleTransfer = async () => {
        if (!transferAmount || !recipient) {
            setStatusMessage("Please enter amount and recipient.");
            return;
        }

        if (transferAmount > walletBalance) {
            setStatusMessage("Insufficient funds.");
            return;
        }

        const transferData = {
            senderWalletId: "wallet123",  // Dummy sender ID (Replace with actual ID)
            recipientWalletId: recipient,
            amount: parseFloat(transferAmount),
        };

        try {
            const response = await axios.post(`${API_URL}/processTransfer`, transferData);
            setStatusMessage(`✅ Transfer Successful: $${transferAmount} sent to ${recipient}`);
            setTransferAmount("");
            setRecipient("");
            fetchWalletBalance();  // Refresh balance
        } catch (error) {
            console.error("Transfer error:", error);
            setStatusMessage("❌ Transfer failed. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2 className="header">Transfer & Payment</h2>
            <p className="wallet-balance">Available Balance: ${walletBalance.toLocaleString()}</p>
            <input
                type="number"
                placeholder="Enter Amount"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <button onClick={handleTransfer} className="transfer-button">
                Transfer Funds
            </button>
            {statusMessage && <p className="status">{statusMessage}</p>}
        </div>
    );
};

export default TransferandPayment;
