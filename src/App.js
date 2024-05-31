import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import './App.css';

function App() {
  return (
    <div className="main_app">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
