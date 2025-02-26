import React from "react";
import Card from "./Card";
import "./CardDemo.css";

const CardDemo = () => {
  return (
    <div className="card-demo-container">
      <h2 className="header">Card Component Demo</h2>

      <Card title="Investment Opportunity" content="A high-potential green energy project looking for investors.">
        <button className="card-action">Learn More</button>
      </Card>

      <Card title="Project Spotlight" content="An impact-driven initiative focused on water conservation.">
        <button className="card-action">Read More</button>
      </Card>

    </div>
  );
};

export default CardDemo;


