import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
 import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AnimatedCursor />
      {/* <Skills /> */}
      {/* <Projects />
      
      <Footer /> */}
      <Contact />
    </div>
  );
}

export default App;
