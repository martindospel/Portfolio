import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './About.scss';

const aboutSections = [
  {title: "About me", description: "I was born in Slovakia and raised in the UK where I obtained my International Relations degree. In the following years, I worked in 3 different countries, and in 3 different industries. At a pivotal moment, I decided to listen to what I was really passionate about. That's when I decided I had to become a software developer."},
  {title: "Frontend", description: "Making a responsive, well-tested frontend with the use of popular frameworks is an integral part of a developer's skillset. I enjoy this kind of work because it gives me the freedom to make beautifully styled and reliable interfaces."},
  {title: "Backend", description: "By utilizing NodeJS and JavaScript, I am able to make lightweight, dynamic and asynchronous apps. I have found GoLang to be very useful since it makes developing applications more effective and easier to test."},
  {title: "Fullstack", description: "Whilst being comfortable with version control, web hosting platforms and database management systems, I have also learned the importance of agile working methods when working as a full stack developer."}
]

const About = () => {
  return (
    <>
      <h2 className='title'>
        <br />
        Software Developer.
      </h2>
      <div className='profiles'>
      {aboutSections.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="profile"
            key={about.title + index}
          >
            <h2 className="titlebold" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="paragraph" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about')