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
        <div className="badge flex">
          <div style={{ marginTop: 100 }}>
            <h1 className="title">Martin Dospel</h1>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.25, delayChildren: 0.25 }}
      className="personal-pic"
    >
      <img src={images.mecropped2} alt="personal-pic" />
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
