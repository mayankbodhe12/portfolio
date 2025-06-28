import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";
import BlurBlob from "./BlurBlob";

function App() {
  return (
      <div className="app-background">
  <BlurBlob position={{ top: '8%', left: '20%' }} size={{ width: '30%', height: '7%' }} />

  <div className="grid-overlay"></div>

  <div className="main-content">
    <Navbar />
    <About />
    <Skill />
    <Experience />
    <Work />
    <Education />
    <Contact />
    <Footer />
  </div>
</div>
  );
};

export default App;
