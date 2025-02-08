import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Landingpage } from "./components/landing/landingpage";
import Navbar from "./components/Navbar";
import Projectpage from "./components/Projectpage";
import Skills from "./components/Skills";
import LocomotiveScroll from 'locomotive-scroll';




function App() {

  
const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
      {" "}
      <Navbar />
      <Landingpage />
      <Projectpage />
      <Skills />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
