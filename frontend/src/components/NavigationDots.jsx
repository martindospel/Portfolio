/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="navigator">
    {['home', 'about', 'projects', 'skills'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="navigator-dot"
        style={active === item ? { backgroundColor: 'darkslategray' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;