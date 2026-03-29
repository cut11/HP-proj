import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import MagicCursor from "./components/MagicCursor";
import Characters from "./components/Characters";
import Creatures from "./components/Creatures";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <MagicCursor />
      {/* Background Magic Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-hp-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-hp-blue/10 blur-[120px] pointer-events-none" />
      
      <Navbar />
      <Hero />
      <Home />
      <Characters />
      <Creatures />
      <Gallery />
    </div>
  )
}

export default App
