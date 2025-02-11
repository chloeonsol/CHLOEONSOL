import './Footer.css'; // Importamos el archivo de estilos
import logo from '../assets/logo.png'; // Ruta del logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img src={logo} alt="CHLOE Logo" className="footer-logo" />
      </div>

      <div className="footer-links">
        <a href="https://t.me/chloe_official_cto" target="_blank" rel="noopener noreferrer" className="footer-link">
          Telegram
        </a>
        <a href="https://x.com/chloe_off_cto" target="_blank" rel="noopener noreferrer" className="footer-link">
          X (Twitter)
        </a>
        <a href="https://jup.ag/swap/SOL-7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump" target="_blank" rel="noopener noreferrer" className="footer-link">
          Swap $Chloe
        </a>
        <a href="https://dexscreener.com/solana/bsabartbatkx4npxhttc7h6dvl4e8phm4xcakbopzcy2" target="_blank" rel="noopener noreferrer" className="footer-link">
          DexScreener
        </a>
        <a href="https://www.dextools.io/app/es/solana/pair-explorer/BsAbARTbAtkx4nPxHttc7H6dvL4e8Phm4xCAkBopzcY2?t=1739275108537" target="_blank" rel="noopener noreferrer" className="footer-link">
          Dextools
        </a>
      </div>
      
      <div className="footer-copy">
        <p>&copy; 2025 $Chloe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
