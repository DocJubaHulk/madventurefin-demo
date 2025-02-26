import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css"; // Ensure styles are loaded from external CSS

// Import Screens
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ProjectSubmission from "./screens/ProjectSubmission";
import ProjectDetails from "./screens/ProjectDetails";
import InnovatorWallet from "./screens/InnovatorWallet";
import TransferAndPayment from "./screens/TransferAndPayment";
import InnovatorDashboard from "./screens/InnovatorDashboard";
import InvestorDashboard from "./screens/InvestorDashboard";
import ImpactInvestment from "./screens/ImpactInvestment";
import InvestorWallet from "./screens/InvestorWallet";
import ImpactReporting from "./screens/ImpactReporting";
import AdminDashboard from "./screens/AdminDashboard";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/project-submission" element={<ProjectSubmission />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/innovator-wallet" element={<InnovatorWallet />} />
        <Route path="/transfer-payment" element={<TransferAndPayment />} />
        <Route path="/innovator-dashboard" element={<InnovatorDashboard />} />
        <Route path="/investor-dashboard" element={<InvestorDashboard />} />
        <Route path="/impact-investment" element={<ImpactInvestment />} />
        <Route path="/investor-wallet" element={<InvestorWallet />} />
        <Route path="/impact-reporting" element={<ImpactReporting />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

