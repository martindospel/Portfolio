import React from "react";
import { About, Contact, Header, Skills, Projects } from "../index";
import Navbar from "../../components/Navbar/Navbar";
// import video from "./assets/waves.mp4";

const Layout = () => {
  return (
    <div>
      {/* <video src={video} autoPlay loop muted id="video" /> */}
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Layout;
