import React, { useState } from 'react';
import Image from "../Image/Image";
import WelcomeHero from "../WelcomeHero/WelcomeHero";
import AboutMe from "../AboutMe/AboutMe";
import "./Home.css";

const Home: React.FC = () => {

  return (
    <div className='container'>
      <WelcomeHero></WelcomeHero>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;