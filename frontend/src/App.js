import React from "react";
import { Layout } from "./container";
import "./App.scss";
import video from "./assets/links.mp4";
import poster from "./assets/linksposter.png"

const App = () => {
  return (
    <div className="app" id="overlay">
      <video className="video" autoPlay loop muted poster={poster}>
        <source src={video} type="video/mp4" />
      </video>
      <Layout />
    </div>
  );
};

export default App;
