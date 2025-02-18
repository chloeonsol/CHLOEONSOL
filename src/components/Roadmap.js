import React, { useEffect, useState, useRef } from "react";
import "../components/Roadmap.css";
import carchloe from "../assets/carchloe.png";

const milestones = [
  { id: 1, text: "1M - 10% supply locked for a year", description: "Lock 10% of supply for a year." },
  { id: 2, text: "5M - Shopify shop", description: "Launch the official Shopify store." },
  { id: 3, text: "10M - Start donations", description: "Begin community-driven charity donations." },
  { id: 4, text: "50M - Chloe's college", description: "Support Chloe’s education (if mom wants)." },
  { id: 5, text: "100M - More donations", description: "Expand donation initiatives worldwide." },
  { id: 6, text: "1B - Become a foundation", description: "Transform CHLOE into a major crypto foundation." },
];

const Roadmap = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const roadmapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (roadmapRef.current) {
        const rect = roadmapRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveMilestone(1);
        } else {
          setActiveMilestone(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeMilestone > 0) {
      let index = 1;
      const interval = setInterval(() => {
        if (index < milestones.length) {
          setActiveMilestone(index);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeMilestone]);

  return (
    <div className="roadmap-container" ref={roadmapRef}>
      <div className="roadmap-track">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`roadmap-milestone ${activeMilestone >= index ? "active" : ""}`}
            style={{ top: `${index * 20}%` }}
          >
            <div className="milestone-content">
              <h3>{milestone.text}</h3>
              <p>{milestone.description}</p>
            </div>
          </div>
        ))}

        {/* Coche en movimiento */}
        <img
          src={carchloe}
          alt="CHLOE Car"
          className="roadmap-car"
          style={{ top: `${activeMilestone * 20}%` }}
        />
      </div>
    </div>
  );
};

export default Roadmap;
