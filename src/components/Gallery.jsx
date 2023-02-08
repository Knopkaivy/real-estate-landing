import React, { useState } from 'react';
import ImageOverlay from './ImageOverlay';
import Images from './Images';

import '../styles/Gallery.css';

const Gallery = () => {
  const [imageOverlayOpen, setImageOverlayOpen] = useState(false);
  const [openingImageIndex, setOpeningImageIndex] = useState();

  let closeOverlay = () => setImageOverlayOpen(false);

  let openOverlay = (e) => {
    if (e.target.id) {
      setOpeningImageIndex(e.target.id);
      setImageOverlayOpen(true);
    }
  };

  const imageList = Images.slice(0, 5).map((image, index) => {
    return (
      <div
        key={index}
        onClick={openOverlay}
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
      <ImageOverlay
        isOpen={imageOverlayOpen}
        openingImageIndex={openingImageIndex}
        closeOverlay={closeOverlay}
      />
      <div className="Gallery__imageContainer">{imageList}</div>
    </div>
  );
};

export default Gallery;
