import './Navbar.css';
import './NavbarMobile.css'; // Importa los dos archivos CSS
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png'; // Logo para desktop
import logoMobile from '/logomobile.png'; // Logo para móvil

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa
  const [isMobile, setIsMobile] = useState(false); // Para detectar si es móvil
  const menuRef = useRef(null); // Referencia al menú desplegable

  // Detecta el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Móvil cuando la pantalla es menor o igual a 768px
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Llama la función al principio para ajustar correctamente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para abrir y cerrar el menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.hamburger-icon-mobile')) {
        setMenuOpen(false); // Cierra el menú si se hace clic fuera de él
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={`navbar ${isMobile ? 'mobile-navbar' : 'desktop-navbar'}`}>
      <div className="navbar-logo-container">
        <img src={isMobile ? logoMobile : logo} alt="Logo" className={isMobile ? "navbar-logo-mobile" : "navbar-logo"} />
      </div>

      {/* Menú desplegable de móvil */}
      {isMobile ? (
        <>
          {/* Icono hamburguesa */}
          <div className={`hamburger-icon-mobile ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            ☰
          </div>

          {/* Menú de navegación cuando está abierto */}
          {menuOpen && (
            <div className="navbar-menu-mobile open" ref={menuRef}>
              <button className="navbar-button-mobile">Home</button>
              <button className="navbar-button-mobile">About</button>
              <a href="https://jup.ag/swap/SOL-7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump" target="_blank" rel="noopener noreferrer" className="navbar-button-mobile">Buy</a>
            </div>
          )}
        </>
      ) : (
        // Menú de escritorio
        <div className="navbar-buttons-container">
          <button className="navbar-button">Home</button>
          <button className="navbar-button">About</button>
          <a href="https://jup.ag/swap/SOL-7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump" target="_blank" rel="noopener noreferrer" className="navbar-button">Buy</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
