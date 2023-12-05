import "./App.css";
import HeroSection from "./components/HeroSection";
import NavbarComponent from "./components/NavbarComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./components/Services";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroSection />
      <Services />
      <About />
    </div>
  );
}

export default App;
