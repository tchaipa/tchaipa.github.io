import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
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
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
import { NavBar } from "./components/NavBar";
import Starfield from 'react-starfield';
import { Banner } from "./components/Banner";
import { Languages } from "./components/Languages";
import AnimatedCursor from "react-animated-cursor";
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Projects from "./components/Projects";
// import RecipeReviewCard from "./components/RecipeReviewCard";

function App() {
  return (
    <div className="App">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.25}
        backgroundColor="black"
      />
      <NavBar />
      <Banner />
      <AnimatedCursor />
      <Languages /> 
      <Projects />
      {/* <RecipeReviewCard /> */}
    </div>
  );
}

export default App;
