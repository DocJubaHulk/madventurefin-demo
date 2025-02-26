import React from "react";
import "./Card.css"; // Added missing CSS reference

const Card = ({ title, content, className }) => {
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;

