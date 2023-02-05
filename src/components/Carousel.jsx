import React, { useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import Images from './Images';
import '../styles/Carousel.css';

const Carousel = () => {
  const [positionX, setPositionX] = useState(0);
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
  const reorderedImageArray = [...Images.slice(5), ...Images.slice(0, 5)];
  const carouselImageList = reorderedImageArray.map((image, index) => {
    return (
      <div key={index} className="Carousel__imageListItem">
        <img src={image} alt="" />
      </div>
    );
  });
  return (
    <div className="Carousel">
      <div
        className="Carousel__button Carousel__button--left"
        onClick={() => handleClick('left')}
      >
        <div>
          <BsChevronLeft />
        </div>
      </div>
      <div
        className="Carousel__button Carousel__button--right"
        onClick={() => handleClick('right')}
      >
        <div>
          <BsChevronRight />
        </div>
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
