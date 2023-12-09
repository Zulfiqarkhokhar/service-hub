import "./App.css";
import HeroSection from "./components/HeroSection";
import NavbarComponent from "./components/NavbarComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./components/Services";
import About from "./components/About";
import Value from "./components/Value";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroSection />
      <Services />
      <About />
      <Value />
      <Footer />
    </div>
  );
}

export default App;
