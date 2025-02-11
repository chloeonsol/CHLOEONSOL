import './About.css'; // Importamos el archivo CSS para los estilos

const About = () => {
  const memes = [
    '/meme1.jpg', '/meme2.jpg', '/meme3.jpg', '/meme4.jpg', '/meme5.jpg',
    '/meme6.jpg', '/meme7.jpg', '/meme8.jpg', '/meme9.jpg', '/meme10.jpg',
    '/meme11.gif', '/meme12.jpg', '/meme14.jpg', '/meme15.jpg',
    '/meme16.jpg', '/meme17.jpg', '/meme18.jpg'
  ];

  return (
    <div id="about" className="about-container">
    <div className="about-container">
      <h1 className="about-title">About $Chloe</h1>
      {/* Contenedor para la descripción del meme */}
      <div className="about-text-container">
        <p className="about-text">
          $Chloe isnt just another token—its the beginning of something historic. Born out of the
          internet&apos;s love for memes and the cult-like communities that thrive on humor, $Chloe is more
          than just a digital asset. It&apos;s a movement. A symbol of a new era where memes are more than
          just jokes—they are a lifestyle, a way of thinking, and most importantly, a community.
          <br />
          This isn&apos;t your average meme coin. This is a piece of history in the making. As we rally
          together, we will create a moment that people will look back on and say, &quot;That was the
          beginning of something legendary.&quot; $Chloe represents a shared vision among all of us, one
          that embraces the absurd and the powerful impact it has on the world. Together, we will
          make this coin a symbol of what happens when the internet decides to make history.
        </p>
      </div>

      {/* Carousel de memes */}
      <div className="carousel-container">
        <div className="carousel">
          {memes.map((meme, index) => (
            <div key={index} className="carousel-item">
              {meme.endsWith('.mp4') ? (
                <video className="carousel-media" controls>
                  <source src={meme} type="video/mp4" />
                </video>
              ) : (
                <img src={meme} alt={`Meme ${index + 1}`} className="carousel-media" />
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
        className="about-button"
      >
        Join the Community
      </a>
    </div>
    </div>
  );
};

export default About;
