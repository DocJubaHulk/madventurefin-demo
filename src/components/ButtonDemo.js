import React, { useState } from "react";
import Button from "./Button";
import "./ButtonDemo.css";

const ButtonDemo = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="button-demo-container">
      <h2>Button Component Demo</h2>
      <Button onClick={handleClick} label="Click Me" className="primary-button" />
      <p>Button clicked {clickCount} times</p>
    </div>
  );
};

export default ButtonDemo;


