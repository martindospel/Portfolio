import React from "react";
import { About, Contact, Header, Skills, Projects } from "../index";
import Navbar from "../../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
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
