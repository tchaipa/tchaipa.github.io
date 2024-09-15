import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Languages } from "./components/Languages";
import AnimatedCursor from "react-animated-cursor";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import RecipeReviewCard from "./components/RecipeReviewCard";

function App() { 
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AnimatedCursor />
      <Languages /> 
      {/* <RecipeReviewCard /> */}
    </div>
  );
}

export default App;
