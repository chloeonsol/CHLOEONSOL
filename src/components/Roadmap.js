import React, { useState, useRef } from "react";
import "../components/Roadmap.css";
import carchloe from "../assets/carchloe.png";

const milestones = [
  { id: 0, text: "Start", description: "Beginning of the journey." },
  { id: 1, text: "1M - 10% supply locked for a year", description: "Lock 10% of supply for a year." },
  { id: 2, text: "5M - Shopify shop", description: "Launch the official Shopify store." },
  { id: 3, text: "10M - Start donations", description: "Begin community-driven charity donations." },
  { id: 4, text: "50M - Chloe's college", description: "Support Chloe’s education (if mom wants)." },
  { id: 5, text: "100M - More donations", description: "Expand donation initiatives worldwide." },
  { id: 6, text: "1B - Become a foundation", description: "Transform CHLOE into a major crypto foundation." },
];

const Roadmap = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const roadmapRef = useRef(null);
  const carRef = useRef(null);

  const moveCarToTarget = (targetIndex) => {
    let index = currentMilestone;
    let step = currentMilestone < targetIndex ? 1 : -1;
    let speed = Math.max(200 / Math.abs(targetIndex - currentMilestone), 80);

    const interval = setInterval(() => {
      if (index !== targetIndex) {
        index += step;
        setCurrentMilestone(index);
      } else {
        clearInterval(interval);
      }
    }, speed);
  };

  return (
    <div className="roadmap-wrapper">
      <div className="roadmap-header">
        <h1 className="roadmap-title">CHLOE'S ROADMAP</h1>
        <p className="roadmap-subtitle">A journey through the milestones of success</p>
      </div>

      <div className="roadmap-container" ref={roadmapRef}>
        <svg className="roadmap-path" viewBox="0 0 100 700" preserveAspectRatio="xMidYMid meet">
          <path d="M 10 10 Q 30 100, 10 200 T 20 400 T 10 600" stroke="white" strokeWidth="4" fill="none" strokeDasharray="6" />
        </svg>

        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`roadmap-milestone ${currentMilestone >= index ? "active" : "inactive"}`}
            style={{ top: `${index * 14 + 10}%`, left: `${(index % 2) * 40 + 20}%` }}
            onClick={() => moveCarToTarget(index)}
          >
            <div className="milestone-content">
              <h3 className={currentMilestone >= index ? "visible-text" : "hidden-text"}>{milestone.text}</h3>
              <p className={currentMilestone >= index ? "visible-text" : "hidden-text"}>{milestone.description}</p>
            </div>
          </div>
        ))}

        <img
          ref={carRef}
          src={carchloe}
          alt="CHLOE Car"
          className="roadmap-car"
          style={{ top: `${currentMilestone * 14 + 10}%`, left: `${(currentMilestone % 2) * 40 + 15}%`, transition: "top 0.4s ease-in-out, left 0.4s ease-in-out" }}
        />
      </div>
    </div>
  );
};

export default Roadmap;
