import { useState, useEffect } from "react";
import gsap from "gsap";
import "./Roadmap.css";

const milestones = [
  { id: 1, label: "1M CHLOE", position: 150, description: "Making CTO and update DEXScreener Social media blitz, (Twitter, Telegram) First meme campaign & community engagement" },
  { id: 2, label: "10M CHLOE", position: 300, description: "Listings on CoinGecko & CoinMarketCap Partnerships with meme influencers Viral marketing push Spreading our charity plan everywhere " },
  { id: 3, label: "100M CHLOE", position: 450, description: "Sending the first funds to help children." },
  { id: 4, label: "500M CHLOE", position: 600, description: "Global attention to the project, first partnerships with charitable foundations" },
  { id: 5, label: "1B CHLOE", position: 750, description: "Maximizing impact on society. Sending more and more funds to charity. Partnerships with large institutions and foundations" },
];

const Roadmap = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current < 0 || current >= milestones.length) return;

    gsap.to(".car", {
      y: milestones[current].position - 25,
      duration: 1.5,
      ease: "power2.inOut",
    });

    gsap.to(".roadmap-line", {
      height: milestones[current].position,
      duration: 1.5,
      ease: "power2.inOut",
    });

    gsap.to(".milestone-dot", {
      background: (i) => (i <= current ? "#FFD700" : "#532956"),
      duration: 0.5,
    });

  }, [current]);

  const moveCar = (index) => {
    if (index !== current) {
      setCurrent(index);
    }
  };

  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">CHLOE ROADMAP</h1>
      <div className="roadmap">
        <div className="roadmap-line"></div>
        <img src="/carchloe.png" className="car" alt="Car Chloe" />

        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`milestone ${index <= current ? "active" : ""}`}
            onClick={() => moveCar(index)}
            style={{ top: `${milestone.position}px` }}
          >
            <div className="milestone-label">{milestone.label}</div>
            <div className="milestone-dot"></div>
            <div className="milestone-box">{milestone.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
