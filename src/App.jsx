import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-chloeWhite text-chloePurple">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
