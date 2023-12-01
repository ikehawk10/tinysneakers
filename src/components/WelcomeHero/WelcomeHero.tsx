import React, { useState } from 'react';
import Image from "../Image/Image";
import "./WelcomeHero.css";

const WelcomeHero: React.FC = () => {

  return (
    <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="flex-column">
                <h2 className="title">Welcome to Tiny Sneakers</h2>
                <p className="subtitle">Ashley and Isaac would like to share pictures and updates featuring baby River.</p>
                <button type="button" className="btn btn-primary">Scoll Below</button>
            </div>
        </div>
        <div className="col-12 col-md-6">
            <Image source={`${process.env.PUBLIC_URL}/images/river3.JPG`} alt="river1" />
        </div>
    </div>
  );
};

export default WelcomeHero;