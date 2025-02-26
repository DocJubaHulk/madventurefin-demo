import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SettingsProfile.css";

const SettingsProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchUserProfile();
  }, []);

  // Fetch User Profile Data
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`${API_URL}/getUserProfile`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (response.data.success) {
        setFormData({
          name: response.data.user.name,
          email: response.data.user.email,
          password: "", // Don't pre-fill password for security
        });
      }
    } catch (error) {
      console.error("❌ Error fetching profile:", error);
      setMessage("⚠️ Unable to fetch profile data.");
    }
  };

  // Handle Form Updates
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Profile Updates
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(`${API_URL}/updateUserProfile`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (response.data.success) {
        setMessage("✅ Profile updated successfully!");
      } else {
        setMessage("❌ Failed to update profile.");
      }
    } catch (error) {
      console.error("❌ Update error:", error);
      setMessage("⚠️ An error occurred while updating your profile.");
    }
  };

  return (
    <div className="settings-container">
      <h2>Profile Settings</h2>
      {message && <p className="settings-message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="New Password" onChange={handleChange} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsProfile;
