import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    userType: "innovator", // Default user type
  });
  const [message, setMessage] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(`${API_URL}/registerUser`, formData);
      if (response.data.success) {
        setMessage("✅ Registration successful! You can now log in.");
      } else {
        setMessage("❌ Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("❌ Sign-up error:", error);
      setMessage("⚠️ An error occurred while signing up.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {message && <p className="signup-message">{message}</p>}
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        
        <select name="userType" onChange={handleChange}>
          <option value="innovator">Innovator</option>
          <option value="investor">Investor</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;


