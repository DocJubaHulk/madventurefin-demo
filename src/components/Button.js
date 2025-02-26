import React from "react";
import "./Button.css"; // Added missing CSS reference

const Button = ({ onClick, label, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

