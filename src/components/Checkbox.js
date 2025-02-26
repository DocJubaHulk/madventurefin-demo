import React from "react";
import "./Checkbox.css"; // Added missing CSS reference

const Checkbox = ({ label, checked, onChange, className }) => {
  return (
    <label className={`checkbox-container ${className}`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;

