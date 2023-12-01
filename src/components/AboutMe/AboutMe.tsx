import React, { useState } from 'react';
import Image from "../Image/Image";
import "./AboutMe.css";

const AboutMe: React.FC = () => {

  return (
    <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="flex-column">
                <Image source={`${process.env.PUBLIC_URL}/images/river3.JPG`} alt="river1" />
            </div>
        </div>
        <div className="col-12 col-md-6">
        </div>
    </div>
  );
};

export default AboutMe;