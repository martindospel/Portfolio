import React from "react";
import { motion } from "framer-motion";

import AppWrap from "../../wrapper/AppWrap";
import { images } from "../../constants";
import "./Header.scss";

const viewScale = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.75,
      ease: "easeIn",
    },
  },
};

const Header = () => (
  <div className="header flex">
    <motion.div
      whileInView={{ x: [-100, 1], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="personal-info"
    >
      <div className="personal-name">
        <div className="flex">
          <div>
            <h1 className="title">Martin Dospel</h1>
          </div>
        </div>
      {/* <div className="personal-bio">
        Welcome to my portfolio. I am a passionate software developer but above
        all I am an enthusiastic problem solver who loves to learn new things
      </div> */}
      </div>
    </motion.div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.25, delayChildren: 0.25 }}
      className="personal-pic"
    >
      <img src={images.mecircle} alt="personal-pic" />
    </motion.div>
    <motion.div
      variants={viewScale}
      whileInView={{ x: [-100, 1], opacity: [0, 1] }}
      className="header-images"
    >
      {[images.api, images.react, images.tsblack].map((image, index) => (
        <div className="flex" key={`image-${index}`}>
          <img src={image} alt="personal-technologies" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
