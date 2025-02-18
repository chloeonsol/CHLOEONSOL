import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import BuySection from "./components/BuySection";


function App() {
  return (
    <div className="bg-chloeWhite text-chloePurple">
      <Navbar />
      <Hero />
      <About />

      <BuySection />
      <Footer />
    </div>
  );
}

export default App;
