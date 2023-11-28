import React from 'react';

interface ImageProps {
  source: any;
  alt: string;
  width: number;
  height: number;
}

const Image: React.FC<ImageProps> = ({ source, alt, width, height }) => {
  return (
    <img src={source} alt={alt} width={width} height={height} />
  );
};

export default Image;