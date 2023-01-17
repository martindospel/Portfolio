import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="socials">
    <a href="https://www.linkedin.com/in/martindospel/" alt="LinkedIn">
      <div>
        <FaLinkedin />
      </div>
    </a>
    <a href="https://github.com/martindospel" alt="LinkedIn">
      <div>
        <FaGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
