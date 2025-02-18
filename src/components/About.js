import './About.css';
import './AboutMobile.css';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const carouselRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const clickPrevented = useRef(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const memes = [
    'memes/meme1.jpg', 'memes/meme2.jpg', 'memes/meme3.jpg', 'memes/meme4.jpg',
    'memes/meme5.jpg', 'memes/meme6.jpg', 'memes/meme7.jpg', 'memes/meme8.jpg',
    'memes/meme9.jpg', 'memes/meme10.jpg', 'memes/meme11.gif', 'memes/meme12.jpg',
    'memes/meme14.jpg', 'memes/meme15.jpg', 'memes/meme16.jpg', 'memes/meme17.jpg',
    'memes/meme18.jpg'
  ];

  const extendedMemes = [...memes, ...memes];

  useEffect(() => {
    const autoScroll = () => {
      if (carouselRef.current && !isDraggingRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const getEventX = (e) => (e.touches ? e.touches[0].pageX : e.pageX);
  const getEventY = (e) => (e.touches ? e.touches[0].pageY : e.pageY);

  const handleDragStart = (e) => {
    isDraggingRef.current = true;
    startXRef.current = getEventX(e);
    startYRef.current = getEventY(e);
    scrollLeftRef.current = carouselRef.current.scrollLeft;
    clickPrevented.current = false;
  };

  const handleDragMove = (e) => {
    if (!isDraggingRef.current) return;
    const x = getEventX(e);
    const y = getEventY(e);
    const diffX = Math.abs(x - startXRef.current);
    const diffY = Math.abs(y - startYRef.current);

    if (diffY > diffX) {
      isDraggingRef.current = false;
      return;
    }

    e.preventDefault();
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 5) {
      clickPrevented.current = true;
    }
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    const preventTouchScroll = (e) => {
      if (isDraggingRef.current) {
        const diffY = Math.abs(getEventY(e) - startYRef.current);
        if (diffY < 10) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('touchmove', preventTouchScroll, { passive: false });
    return () => {
      document.removeEventListener('touchmove', preventTouchScroll);
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.userSelect = "none";
      carouselRef.current.style.webkitUserSelect = "none";
      carouselRef.current.style.msUserSelect = "none";
      carouselRef.current.style.mozUserSelect = "none";
      carouselRef.current.querySelectorAll('img, video').forEach(el => {
        el.draggable = false;
      });
    }
  }, []);

  return (
    <div id="about" className={isMobile ? "about-mobile-container" : "about-container"}>
      <h1 className={isMobile ? "about-title-mobile" : "about-title"}>ABOUT $CHLOE</h1>
      <div className={isMobile ? "about-text-container-mobile" : "about-text-container"}>
        <p className={isMobile ? "about-text-mobile" : "about-text"}>
          $Chloe isn’t just another token—it’s the beginning of something historic. Born out of the
          internet’s love for memes and the cult-like communities that thrive on humor, $Chloe is more
          than just a digital asset. It’s a movement. A symbol of a new era where memes are more than
          just jokes—they are a lifestyle, a way of thinking, and most importantly, a community.
          <br />
          This isn’t your average meme coin. This is a piece of history in the making. As we rally
          together, we will create a moment that people will look back on and say, "That was the
          beginning of something legendary." $Chloe represents a shared vision among all of us, one
          that embraces the absurd and the powerful impact it has on the world. Together, we will
          make this coin a symbol of what happens when the internet decides to make history.
        </p>
      </div>

      <div className={isMobile ? "carousel-container-mobile" : "carousel-container"}>
        <div
          className={isMobile ? "carousel-mobile" : "carousel"}
          ref={carouselRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {extendedMemes.map((meme, index) => (
            <div 
              key={index} 
              className={isMobile ? "carousel-item-mobile" : "carousel-item"} 
              onClick={() => !clickPrevented.current && setSelectedMeme(meme)}
              style={{ pointerEvents: isDraggingRef.current ? "none" : "auto" }}
            >
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

      {selectedMeme && (
        <div className="modal" onClick={() => setSelectedMeme(null)}>
          <div className="modal-content">
            <img src={selectedMeme} alt="Selected Meme" className="modal-image" />
          </div>
        </div>
      )}

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
