import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import BuySection from "./components/BuySection";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="bg-chloeWhite text-chloePurple">
      <MusicPlayer />
      <Navbar />
      <Hero />
      <About />
      <BuySection />
      <Footer />
    </div>
  );
}

export default App;
