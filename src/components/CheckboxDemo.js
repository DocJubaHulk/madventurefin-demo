import React, { useState } from "react";
import Checkbox from "./Checkbox";
import "./CheckboxDemo.css";

const CheckboxDemo = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-demo-container">
      <h2>Checkbox Component Demo</h2>
      <Checkbox 
        label="Accept Terms and Conditions" 
        checked={isChecked} 
        onChange={handleCheckboxChange} 
      />
      <p>{isChecked ? "Checked" : "Unchecked"}</p>
    </div>
  );
};

export default CheckboxDemo;


