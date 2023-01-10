import React from 'react';
import Images from './Images';
import '../styles/Gallery.css';

const Gallery = () => {
  const imageList = Images.map((image, index) => {
    return (
      <div key={index}>
        <img src={image} alt="" />
      </div>
    );
  });
  return (
    <div className="Gallery">
      <div className="Gallery__imageContainer">{imageList}</div>
    </div>
  );
};

export default Gallery;
