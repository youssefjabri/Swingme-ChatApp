import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Benefits from "./Components/Benefits";
import Roadmap from "./Components/Roadmaps";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefits/>
        <Roadmap/>  
        <Footer/>
      </div>
      
    </>
  );
};

export default App;
