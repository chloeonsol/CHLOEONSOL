import './Navbar.css';
import './NavbarMobile.css'; // Importa los dos archivos CSS
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png'; // Logo para desktop
const logoMobile = "/logomobile.png"; // Usar una URL relativa en lugar de import

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
          {/* Botón Buy en la esquina superior derecha */}
          <a 
            href="https://jup.ag/swap/SOL-7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="navbar-button-mobile-top-right">
            Buy
          </a>

          {/* Menú de navegación cuando está abierto */}
          {menuOpen && (
            <div className="navbar-menu-mobile open" ref={menuRef}>
              <a href="https://jup.ag/swap/SOL-7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump" target="_blank" rel="noopener noreferrer" className="navbar-button-mobile">Buy</a>
            </div>
          )}
        </>
      ) : (
        // Menú de escritorio
        <div className="navbar-buttons-container">
          <a href="https://jup.ag/swap/SOL-7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump" target="_blank" rel="noopener noreferrer" className="navbar-button">Buy</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
