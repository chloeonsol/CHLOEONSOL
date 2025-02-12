import './About.css'; // Importamos el archivo CSS para los estilos
import './AboutMobile.css';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isMobile, setIsMobile] = useState(false); // Detecta si es móvil

  // Detectar si es versión móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile: ancho <= 768px
    };
    handleResize(); // Detectar el tamaño inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const memes = [
    '/meme1.jpg', '/meme2.jpg', '/meme3.jpg', '/meme4.jpg', '/meme5.jpg',
    '/meme6.jpg', '/meme7.jpg', '/meme8.jpg', '/meme9.jpg', '/meme10.jpg',
    '/meme11.gif', '/meme12.jpg', '/meme14.jpg', '/meme15.jpg',
    '/meme16.jpg', '/meme17.jpg', '/meme18.jpg'
  ];

  // Para la funcionalidad de arrastrar el carrusel
  const carouselRef = useRef(null);
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  // Funcionalidad para el arrastre en desktop
  const handleMouseDown = (e) => {
    isMouseDown = true;
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isMouseDown = false;
  };

  const handleMouseUp = () => {
    isMouseDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const scroll = x - startX;
    carouselRef.current.scrollLeft = scrollLeft - scroll;
  };

  // Funcionalidad para el arrastre en dispositivos móviles
  const handleTouchStart = (e) => {
    isMouseDown = true;
    startX = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isMouseDown = false;
  };

  const handleTouchMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const scroll = x - startX;
    carouselRef.current.scrollLeft = scrollLeft - scroll;
  };

  return (
    <div id="about" className={isMobile ? "about-mobile-container" : "about-container"}>
      <h1 className={isMobile ? "about-title-mobile" : "about-title"}>ABOUT $CHLOE</h1>
      <div className={isMobile ? "about-text-container-mobile" : "about-text-container"}>
        <p className={isMobile ? "about-text-mobile" : "about-text"}>
          $Chloe isnt just another token—its the beginning of something historic. Born out of the
          internets love for memes and the cult-like communities that thrive on humor, $Chloe is more
          than just a digital asset. Its a movement. A symbol of a new era where memes are more than
          just jokes—they are a lifestyle, a way of thinking, and most importantly, a community.
          <br />
          This isnt your average meme coin. This is a piece of history in the making. As we rally
          together, we will create a moment that people will look back on and say, That was the
          beginning of something legendary. $Chloe represents a shared vision among all of us, one
          that embraces the absurd and the powerful impact it has on the world. Together, we will
          make this coin a symbol of what happens when the internet decides to make history.
        </p>
      </div>

      {/* Carousel de memes */}
      <div className={isMobile ? "carousel-container-mobile" : "carousel-container"}>
        <div
          className={isMobile ? "carousel-mobile" : "carousel"}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          style={{ cursor: "grab" }}
        >
          {memes.map((meme, index) => (
            <div key={index} className={isMobile ? "carousel-item-mobile" : "carousel-item"}>
              {meme.endsWith('.mp4') ? (
                <video className={isMobile ? "carousel-media-mobile" : "carousel-media"} controls>
                  <source src={meme} type="video/mp4" />
                </video>
              ) : (
                <img src={meme} alt={`Meme ${index + 1}`} className={isMobile ? "carousel-media-mobile" : "carousel-media"} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enlace estilizado como botón */}
      <a
        href="https://t.me/chloe_official_cto"
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
