import './Navbar.css';
import { Link } from 'react-scroll'; // Usamos Link de react-scroll
import logo from '../assets/logo.png'; // Asegúrate de tener el logo en la carpeta correcta

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-buttons-container">
        <Link to="hero" smooth={true} duration={500} className="navbar-button">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="navbar-button">
          About
        </Link>
        <a href="https://jup.ag/swap/SOL-7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump" target="_blank" rel="noopener noreferrer" className="navbar-button">
          Buy
        </a>
      </div>
    </div>
  );
};

export default Navbar;
