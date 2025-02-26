import React, { useState } from "react";
import axios from "axios";
import "./KYCSubmission.css";

const KYCSubmission = () => {
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [document, setDocument] = useState(null);
  const [kycStatus, setKycStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;

  const handleFileUpload = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setKycStatus("");

    if (!document) {
      setErrorMessage("⚠️ Please upload a valid document.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("idNumber", idNumber);
      formData.append("document", document);

      const response = await axios.post(`${API_URL}/submitKYC`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        setKycStatus("✅ KYC Submitted Successfully! Awaiting approval.");
      } else {
        setErrorMessage("❌ KYC submission failed. Try again.");
      }
    } catch (error) {
      console.error("❌ KYC Submission Error:", error);
      setErrorMessage("⚠️ An error occurred while submitting KYC.");
    }
  };

  return (
    <div className="kyc-container">
      <h2>KYC Submission</h2>
      {kycStatus && <p className="kyc-success">{kycStatus}</p>}
      {errorMessage && <p className="kyc-error">{errorMessage}</p>}
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} required />
        <input type="text" placeholder="ID Number" onChange={(e) => setIdNumber(e.target.value)} required />
        <input type="file" onChange={handleFileUpload} required />
        <button type="submit">Submit KYC</button>
      </form>
    </div>
  );
};

export default KYCSubmission;
