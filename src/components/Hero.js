import chloeImage from '../assets/chloe.png'; // Asegúrate de que la ruta sea correcta
import './Hero.css'; // Importa el archivo de estilos
import './HeroMobile.css'; // Importa el CSS de la versión móvil
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false); // Estado para controlar si se copió
  const [isMobile, setIsMobile] = useState(false); // Detecta si es móvil

  const copyToClipboard = () => {
    const address = '7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump';
    navigator.clipboard.writeText(address).then(() => {
      setIsCopied(true); // Cambia el estado cuando se copie
      setTimeout(() => setIsCopied(false), 3000); // Vuelve al estado original después de 3 segundos
    });
  };

  // Detectar si es versión móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile: ancho <= 768px
    };
    handleResize(); // Detectar el tamaño inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    
    <div id="hero" className={isMobile ? "hero-container-mobile-version" : "hero-container"}>
      <div className="hero-content">
        <img src={chloeImage} alt="CHLOE" className={isMobile ? "hero-title-mobile-version" : "hero-title"} />
        <p className={isMobile ? "hero-text-mobile-version" : "hero-text"}>
          <span className="white-text">Wen CHLOE?</span>
          <span className="purple-text">Now CHLOEEEE.</span>
        </p>

        <div className={isMobile ? "address-button-container-mobile" : "address-button-container"}>
          <button className={isMobile ? "address-button-mobile" : "address-button"}>
            <span className="address-text">CA: 7DdHy...pump</span>
            <button
              className={`copy-button ${isCopied ? 'copied' : ''}`}
              onClick={copyToClipboard}
            >
              {isCopied ? (
                <span>
                  COPIED! <span className="check-icon">✔</span>
                </span>
              ) : (
                'Copy'
              )}
            </button>
          </button>
        </div>
        <div className={isMobile ? "social-buttons-container-mobile" : "social-buttons-container"}>
          {/* Primer botón: Telegram */}
          <a href="https://t.me/Chloe_CTO_Portal" target="_blank" rel="noopener noreferrer">
            <button className={isMobile ? "social-button-mobile" : "social-button"} style={{ backgroundImage: 'url(/tg.avif)' }}></button>
          </a>

          {/* Segundo botón: X */}
          <a href="https://x.com/buychloecto" target="_blank" rel="noopener noreferrer">
            <button className={isMobile ? "social-button-mobile" : "social-button"} style={{ backgroundImage: 'url(/X.jpg)' }}></button>
          </a>

          {/* Tercer botón: Jup */}
          <a href="https://jup.ag/swap/SOL-7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump" target="_blank" rel="noopener noreferrer">
            <button className={isMobile ? "social-button-mobile" : "social-button"} style={{ backgroundImage: 'url(/jup.webp)' }}></button>
          </a>

          {/* Cuarto botón: Dexs (png) */}
          <a href="https://dexscreener.com/solana/bsabartbatkx4npxhttc7h6dvl4e8phm4xcakbopzcy2" target="_blank" rel="noopener noreferrer">
            <button className={isMobile ? "social-button-mobile" : "social-button"} style={{ backgroundImage: 'url(/dexs.png)' }}></button>
          </a>

          {/* Quinto botón: Dexs (avif) */}
          <a href="https://www.dextools.io/app/es/solana/pair-explorer/BsAbARTbAtkx4nPxHttc7H6dvL4e8Phm4xCAkBopzcY2?t=1739275108537" target="_blank" rel="noopener noreferrer">
            <button className={isMobile ? "social-button-mobile" : "social-button"} style={{ backgroundImage: 'url(/dexs.avif)' }}></button>
          </a>
            {/* Imagen Logobg en móvil */}
        {isMobile && (
          <div className="logobg-container">
            <img src="/logobg.png" alt="Logo Background" className="logobg-image" />
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
