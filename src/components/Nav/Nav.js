// src/components/Nav.js
import React from 'react';

const Nav = ({ items }) => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '0 10px' }}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;