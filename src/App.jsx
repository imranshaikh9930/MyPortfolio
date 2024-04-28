import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
// import AnimatedCursor from "react-animated-cursor"



function App() {
  useEffect(() => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.add("dark");
    }
  }, []);

  return (
    <div className="select-none">
   
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
