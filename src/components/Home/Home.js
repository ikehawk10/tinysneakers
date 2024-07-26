// src/components/Home.js
import React from 'react';
import Nav from './Nav';

const Home = () => {
  const navItems = ['Home', 'Photos', 'Upload'];

  return (
    <div>
      <Nav items={navItems} />
      <div>
        {/* Other components or content can go here */}
        <h1>Welcome to TinySneakers!</h1>
      </div>
    </div>
  );
};

export default Home;
