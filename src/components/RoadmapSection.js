import React from "react";
import "../components/RoadmapSection.css";
import bgroadmap from "../assets/bgroadmap.png";
import roadmap from "../assets/roadmap.png";

const RoadmapSection = () => {
  return (
    <div className="roadmap-container">
      {/* Fondo */}
      <img src={bgroadmap} alt="Background" className="roadmap-background" />

      {/* Contenedor del libro */}
      <div className="roadmap-book-container">
        <img src={roadmap} alt="Roadmap Book" className="roadmap-book" />

        {/* Texto del roadmap */}
        <div className="roadmap-text">

        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
