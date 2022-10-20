import React from "react";
import { About, Contact, Header, Skills, Projects } from "./container";
import Navbar from "./components/Navbar/Navbar";
import './App.scss';

const App = () => {
  return (
    <div className="app" >
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
