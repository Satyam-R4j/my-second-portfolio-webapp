import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Projectpage from "./components/Projectpage";
import Skills from "./components/Skills";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      {" "}
      <div className="bg-[#000000] w-screen bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <Navbar />
        <Landingpage />
        <Projectpage />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
