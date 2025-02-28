import './About.css';
import './AboutMobile.css';
import { useState, useEffect } from 'react';
import bottomImage from '../assets/bottom.webp';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="about" className={isMobile ? "about-mobile-container" : "about-container"}>
      <h1 className={isMobile ? "about-title-mobile" : "about-title"}>
        MAKE CHARITY GREAT AGAIN $CHLOE
      </h1>

      <div className={isMobile ? "about-text-container-mobile" : "about-text-container"}>
        <p className={isMobile ? "about-text-mobile" : "about-text"}>
          <strong>More holders = More funds for kids</strong>
          <br /><br />
          We've created a dedicated <strong>Charity Wallet</strong> to support children in need:
          <br />
          🔹 Wallet Address: 
          <a 
            href="https://solscan.io/account/8RJpWZB7QPZW8jtokSfdVaDvpPZTi258qwfqbJcsNWSW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="charity-wallet"
          >
            8RJpWZB7QPZW8jtokSfdVaDvpPZTi258qwfqbJcsNWSW
          </a>
          <br />
          🔹 <a href="https://solscan.io/" target="_blank" rel="noopener noreferrer">Track transactions on Solscan</a>
          <br /><br />
          <strong>How It Works</strong>
          <br />
          The more $CHLOE holders we have, the higher its value—resulting in more funds for charity.
          <br />
          The easiest way to help? <strong>Simply buy and hold $CHLOE.</strong>
          <br />
          Anyone can contribute by sending $CHLOE to the Charity Wallet, but it’s not necessary—whales have already started filling it!
          <br /><br />
          <strong>Our Mission</strong>
          <br />
          Originally, we aimed to support children’s education, but we’re open to expanding our impact.
          <br />
          We will never drain the Charity Wallet. Funds will only be used in small portions, ensuring continuous support for those in need.
          <br />
          And we won’t touch it until we reach a significant market cap—meaning no sudden price impacts.
          <br /><br />
          <strong>Beyond the Moon</strong>
          <br />
          We’re not just aiming for the Moon.
          <br />
          We’re building a spaceship to Mars.
        </p>
      </div>

      {/* 🔹 Imagen insertada correctamente debajo del texto y antes del botón */}
      <div className="bottom-image-container">
        <img src={bottomImage} alt="Bottom Decorative" className="bottom-image" />
      </div>

      <a
        href="https://linktr.ee/chloeonsol"
        target="_blank"
        rel="noopener noreferrer"
        className={isMobile ? "about-button-mobile" : "about-button"}
      >
        Join the Community
      </a>
    </div>
  );
};

export default About;
