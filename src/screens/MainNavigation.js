import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Screens
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import InvestorDashboard from "../screens/InvestorDashboard";
import InnovatorDashboard from "../screens/InnovatorDashboard";
import KYCSubmission from "../screens/KYCSubmission";
import ProjectSubmission from "../screens/ProjectSubmission";
import InvestorWallet from "../screens/InvestorWallet";
import InnovatorWallet from "../screens/InnovatorWallet";
import TransferAndPayment from "../screens/TransferAndPayment";
import ImpactInvestment from "../screens/ImpactInvestment";
import ImpactReporting from "../screens/ImpactReporting";
import SettingsProfile from "../screens/SettingsProfile";
import AdminDashboard from "../screens/AdminDashboard";

const MainNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/investor-dashboard" element={<InvestorDashboard />} />
        <Route path="/innovator-dashboard" element={<InnovatorDashboard />} />
        <Route path="/kyc-submission" element={<KYCSubmission />} />
        <Route path="/project-submission" element={<ProjectSubmission />} />
        <Route path="/investor-wallet" element={<InvestorWallet />} />
        <Route path="/innovator-wallet" element={<InnovatorWallet />} />
        <Route path="/transfer-and-payment" element={<TransferAndPayment />} />
        <Route path="/impact-investment" element={<ImpactInvestment />} />
        <Route path="/impact-reporting" element={<ImpactReporting />} />
        <Route path="/settings-profile" element={<SettingsProfile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default MainNavigation;

