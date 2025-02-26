import React from "react";
import logo from "./logo.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo-image" />
      <h1 className="logo-text">MADVENTUREFIN</h1>
    </div>
  );
};

export default Logo;



