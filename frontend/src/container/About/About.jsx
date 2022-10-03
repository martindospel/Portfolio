import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './About.scss';

const aboutSections = [
  {title: "Frontend", description: "I am passionate about using technologies such as React to provide the user with a beautifully crafted interface"},
  {title: "Backend", description: "I love developing my understanding about the underlying functionality of technologies"},
  {title: "Fullstack", description: "To have full control over the frontend and backend is something that I really enjoy"},
  {title: "UI/UX", description: "My passion is to design a riveting information structure to that the user's flow seems clear, consistent and unforgettable"}
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