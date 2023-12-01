import React from 'react';

interface ImageProps {
  source: any;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ source, alt }) => {
  return (
    <img className="img-fluid" src={source} alt={alt} />
  );
};

export default Image;