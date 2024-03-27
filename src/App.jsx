import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import AnimatedCursor from "react-animated-cursor"



function App() {
  return (
    <div>
    <AnimatedCursor
     innerSize={25}
     outerSize={25}
     color='254, 88, 163'
     outerAlpha={0.2}
     innerScale={0.2}
     outerScale={5}
     clickables={[
       'a',
       'input[type="text"]',
       'input[type="email"]',
       'input[type="number"]',
       'input[type="submit"]',
       'input[type="image"]',
       'label[for]',
       'select',
       'textarea',
       'button',
       '.link',
       {
         target: '.custom',
         options: {
           innerSize: 12,
           outerSize: 12,
           color: '255, 255, 255',
           outerAlpha: 0.3,
           innerScale: 0.7,
           outerScale: 5
         }
       }
     ]}
    />
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
