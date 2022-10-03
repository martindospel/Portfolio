import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="title">Technical Skills and Experiences</h2>
      <div className="skills-container">
        <motion.div className="skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skill flex"
              key={skill.name}
            >
              <div className="flex">
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="paragraph">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="experiences">
          <motion.div className="experience">
            <div className="experience-year">
              <p className="titlebold">2022</p>
            </div>
            <motion.div className="experience-info">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="experience-content"
                >
                  <h4 className="titlebold">Software Developer</h4>
                  <p className="titlebold">School of Applied Technology</p>
                  <br />
                  <p className="paragraph">
                    Intensive three month training program for full stack web
                    development with a focus on TDD, mob programming, and
                    applied learning.
                  </p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
          <motion.div className="experience">
            <div className="experience-year">
              <p className="titlebold">2020</p>
            </div>
            <motion.div className="experience-info">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="experience-content"
                >
                  <h4 className="titlebold">Administrator</h4>
                  <p className="titlebold">Uppsala University</p>
                  <br />
                  <p className="paragraph">
                    Conducted meetings, communicated with internal and external
                    partners, coordinated studies, projects and financial
                    reports.
                  </p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
          <motion.div className="experience">
            <div className="experience-year">
              <p className="titlebold">2017</p>
            </div>
            <motion.div className="experience-info">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="experience-content"
                >
                  <h4 className="titlebold">Teacher</h4>
                  <p className="titlebold">Phoenix Private School</p>
                  <br />
                  <p className="paragraph">
                    Whilst being a teacher of 27 students, I also initiated and
                    led a project in mental health, gathered and analyzed data
                    for the ministry of education and organized collaborative
                    meetings.
                  </p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
          <motion.div className="experience">
            <div className="experience-year">
              <p className="titlebold">2017</p>
            </div>
            <motion.div className="experience-info">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="experience-content"
                >
                  <h4 className="titlebold">Refugee Services Worker</h4>
                  <p className="titlebold">British Red Cross</p>
                  <br />
                  <p className="paragraph">
                    Provided services and created opportunities for refugees,
                    completed reporting requirements for service users, helped
                    coordinate community events aimed at brand exposure and
                    fundraising.
                  </p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "skillsExperiences"), "skills");
