import { useState, useRef, useEffect } from "react";
import ReactHowler from "react-howler";
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp } from "react-icons/fa";
import "./MusicPlayer.css";

// Lista de canciones
const songs = [
    {
        title: "Side Eye song",
        artist: "CHLOE",
        src: process.env.PUBLIC_URL + "/music/$CHLOE Side Eye Song.mp3"
      },


    // Puedes seguir agregando más canciones de la misma manera
  ];
  

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [volume, setVolume] = useState(() => {
    return localStorage.getItem("musicVolume") ? parseFloat(localStorage.getItem("musicVolume")) : 0.5;
  });

  const playerRef = useRef(null);

  // Guardar el volumen en localStorage
  useEffect(() => {
    localStorage.setItem("musicVolume", volume);
  }, [volume]);

  const handlePlayPause = () => {
    if (loaded) {
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  return (
    <div className={`music-player ${isPlaying ? "expanded" : ""}`}>
      {/* Reproductor de audio */}
      <ReactHowler
        src={songs[currentSongIndex].src}
        playing={isPlaying}
        ref={playerRef}
        volume={volume} // Ajustar volumen
        onLoad={() => setLoaded(true)}
        onEnd={handleNext}
      />

      {!isPlaying ? (
        <div className="music-mini" onClick={handlePlayPause}>
          <span className="music-text">please don't stop the</span>
          <span className="music-title">MUSIC</span>
          <FaPlay className="play-icon" />
        </div>
      ) : (
        <div className="music-expanded">
          <div className="music-info">
            <span className="music-title">{songs[currentSongIndex].title}</span>
            <span className="music-artist">{songs[currentSongIndex].artist}</span>
          </div>
          <div className="music-controls">
            <FaStepBackward className="control-icon" onClick={handlePrev} />
            {isPlaying ? (
              <FaPause className="control-icon" onClick={handlePlayPause} />
            ) : (
              <FaPlay className="control-icon" onClick={handlePlayPause} />
            )}
            <FaStepForward className="control-icon" onClick={handleNext} />
          </div>
          <div className="music-volume">
            <FaVolumeUp className="volume-icon" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="volume-slider"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
