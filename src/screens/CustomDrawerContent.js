import React from "react";
import { Link } from "react-router-dom";
import "./CustomDrawerContent.css";

const CustomDrawerContent = () => {
  return (
    <div className="drawer-container">
      <div className="profile-section">
        <img src="/assets/user-profile.png" alt="Profile" className="profileImage" />
        <h3 className="profileName">Admin</h3>
      </div>
      
      <nav className="drawer-nav">
        <Link to="/dashboard" className="drawer-item">Dashboard</Link>
        <Link to="/impact-investments" className="drawer-item">Impact Investments</Link>
        <Link to="/user-management" className="drawer-item">User Management</Link>
        <Link to="/impact-reports" className="drawer-item">Impact Reports</Link>
        <Link to="/system-settings" className="drawer-item">System Settings</Link>
      </nav>
      
      <Link to="/login" className="logoutButton">Logout</Link>
    </div>
  );
};

// Styles
const styles = {
  drawerContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
  },
  profileSection: {
    textAlign: "center",
    marginBottom: "20px",
  },
  profileImage: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
  },
  profileName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#5e17eb",
  },
  drawerNav: {
    display: "flex",
    flexDirection: "column",
  },
  drawerItem: {
    textDecoration: "none",
    color: "#333",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    backgroundColor: "#e0e0e0",
  },
  logoutButton: {
    marginTop: "auto",
    padding: "10px",
    backgroundColor: "#e74c3c",
    color: "white",
    textAlign: "center",
    borderRadius: "5px",
    textDecoration: "none",
  },
};

export default CustomDrawerContent;

