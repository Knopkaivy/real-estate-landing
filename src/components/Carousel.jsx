import React, { useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import ImageOverlay from './ImageOverlay';
import Images from './Images';
import '../styles/Carousel.css';

const Carousel = () => {
  const [imageOverlayOpen, setImageOverlayOpen] = useState(false);
  const [openingImageIndex, setOpeningImageIndex] = useState();
  const [positionX, setPositionX] = useState(0);

  let closeOverlay = () => setImageOverlayOpen(false);

  let openOverlay = (e) => {
    if (e.target.id) {
      setOpeningImageIndex(e.target.id);

      setImageOverlayOpen(true);
    }
  };

  let handleClick = (direction) => {
    let newX = positionX;
    if (direction === 'left' && newX >= 100) {
      newX -= 100;
    } else if (direction === 'right' && newX <= 500) {
      newX += 100;
    } else {
      return;
    }
    return setPositionX(newX);
  };

  const carouselImageList = Images.map((image, index) => {
    return (
      <div
        key={index}
        className="Carousel__imageListItem"
        onClick={openOverlay}
      >
        <img src={image} alt="" id={index} />
      </div>
    );
  });

  return (
    <div className="Carousel">
      <ImageOverlay
        isOpen={imageOverlayOpen}
        openingImageIndex={openingImageIndex}
        closeOverlay={closeOverlay}
      />
      <div
        className="Carousel__button button__chevron--left"
        onClick={() => handleClick('left')}
      >
        <button className="button button-icon">
          <BsChevronLeft />
        </button>
      </div>
      <div
        className="Carousel__button button__chevron--right"
        onClick={() => handleClick('right')}
      >
        <button className="button button-icon">
          <BsChevronRight />
        </button>
      </div>
      <div
        className="Carousel__itemContainer"
        style={{ transform: `translate(-${positionX}rem)` }}
      >
        {carouselImageList}
      </div>
    </div>
  );
};

export default Carousel;
