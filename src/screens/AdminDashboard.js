import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css"; // Ensure styles are loaded from external CSS

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      {/* Dashboard Sections */}
      <div className="dashboard-sections">
        <Link to="/platform-metrics" className="dashboard-card">
          <h2>Platform Metrics</h2>
          <p>View overall performance statistics and analytics.</p>
        </Link>

        <Link to="/project-overview" className="dashboard-card">
          <h2>Project Overview</h2>
          <p>Manage and track active projects.</p>
        </Link>

        <Link to="/user-management" className="dashboard-card">
          <h2>Investors & Innovators</h2>
          <p>Review and manage users on the platform.</p>
        </Link>

        <Link to="/impact-reports" className="dashboard-card">
          <h2>SDG Impact Reports</h2>
          <p>Generate impact reports based on project data.</p>
        </Link>

        <Link to="/system-settings" className="dashboard-card">
          <h2>System Settings</h2>
          <p>Adjust application settings and permissions.</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;

