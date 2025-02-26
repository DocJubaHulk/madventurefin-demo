import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(`${API_URL}/loginUser`, formData);
      if (response.data.success) {
        setMessage("✅ Login successful!");
        localStorage.setItem("token", response.data.token); // Store token
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setMessage("❌ Invalid email or password.");
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      setMessage("⚠️ An error occurred while logging in.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {message && <p className="login-message">{message}</p>}
      
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
