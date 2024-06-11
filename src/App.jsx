import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Aos from "aos";
import "aos/dist/aos.css"
// import AnimatedCursor from "react-animated-cursor"



function App() {
  useEffect(() => {
    Aos.init();
    
   }, [])

  return (
    <div className="select-none" data-aos-once="true">
   
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
