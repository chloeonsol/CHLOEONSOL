import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./Roadmap.css";

const roadmapData = [
  { cap: "$2M", title: "Listing CompareMarketcap", description: "Listing Chloe on CompareMarketcap for better visibility." },
  { cap: "$10M", title: "Partnerships & CEX Listings", description: "Strategic partnerships and Tier 2 exchange listings." },
  { cap: "$50M", title: "Merch & Donations Foundations", description: "Launching Chloe merchandise and donation programs." },
  { cap: "$100M", title: "Chloe’s University", description: "Ensuring Chloe gets the best education possible." },
  { cap: "$1B", title: "Charity Foundation", description: "Creating a non-profit for children’s mental health." },
];

const Roadmap = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const roadmapProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const glowEffect = useTransform(scrollYProgress, [0, 1], ["0px 0px 10px rgba(255, 105, 180, 0.5)", "0px 0px 50px rgba(255, 105, 180, 1)"]);
  const connectionHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [unlockedSteps, setUnlockedSteps] = useState(Array(roadmapData.length).fill(false));

  useEffect(() => {
    roadmapProgress.on("change", (latest) => {
      const newUnlocks = roadmapData.map((_, index) => latest > index / roadmapData.length);
      setUnlockedSteps(newUnlocks);
    });
  }, [roadmapProgress]);

  return (
    <div ref={scrollRef} className="roadmap-container" style={{ backgroundColor: "#1a1a2e" }}>
      <motion.div className="progress-bar" style={{ height: roadmapProgress, backgroundColor: "#ff69b4", boxShadow: glowEffect }} />

      <div className="roadmap-track">
        {roadmapData.map((item, index) => (
          <motion.div
            key={index}
            className={`roadmap-step ${unlockedSteps[index] ? "unlocked" : ""}`}
            animate={{ opacity: unlockedSteps[index] ? 1 : 0.3, scale: unlockedSteps[index] ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="roadmap-node"
              style={{ boxShadow: glowEffect, backgroundColor: "#ff69b4" }}
            >
              <span>{item.cap}</span>
            </motion.div>

            {index < roadmapData.length - 1 && (
              <motion.div
                className="roadmap-connector"
                style={{ height: connectionHeight, backgroundColor: "#ff69b4" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            )}

            <motion.div
              className="roadmap-content"
              animate={{
                boxShadow: unlockedSteps[index] ? "0px 0px 50px 5px rgba(255, 105, 180, 0.8)" : "none",
                backgroundColor: unlockedSteps[index] ? "rgba(255, 105, 180, 0.2)" : "rgba(50, 50, 50, 0.8)",
                borderColor: unlockedSteps[index] ? "#ff69b4" : "rgba(255, 255, 255, 0.3)",
              }}
              transition={{ duration: 0.6 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
