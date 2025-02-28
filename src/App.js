import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import BuySection from "./components/BuySection";
import MusicPlayer from "./components/MusicPlayer";
import Roadmap from './components/Roadmap';
function App() {
  return (
    <div className="bg-chloeWhite text-chloePurple">
      <MusicPlayer />
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <BuySection />
      <Footer />
    </div>
  );
}

export default App;
