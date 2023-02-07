import React from 'react';
import Images from './Images';

import '../styles/Gallery.css';

const Gallery = () => {
  const imageList = Images.slice(0, 5).map((image, index) => {
    return (
      <div
        key={index}
        className={`Gallery__image ${index === 0 &&
          'Gallery__gridItem--small'} ${index === 4 &&
          'Gallery__gridItem--small'} ${index === 1 &&
          'Gallery__gridItem--xsmall'} ${index === 2 &&
          'Gallery__gridItem--medium'} ${index === 3 &&
          'Gallery__gridItem--large'}`}
      >
        <img src={image} alt="" id={index} />
      </div>
    );
  });
  return (
    <div id="gallery" className="Gallery">
      <div className="Gallery__imageContainer">{imageList}</div>
    </div>
  );
};

export default Gallery;
