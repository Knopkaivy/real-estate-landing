import React, { useState } from 'react';
import Images from './Images';
import '../styles/Carousel.css';

const Carousel = () => {
  const [positionX, setPositionX] = useState(0);
  let handleClick = (direction) => {
    let newX = positionX;
    console.log(newX);
    if (direction === 'left' && newX >= 100) {
      console.log('going left');
      newX -= 100;
      console.log(newX);
    } else if (direction === 'right' && newX <= 500) {
      console.log('going right');
      newX += 100;
      console.log(newX);
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
        className="Carousel__button Carousel__button--left button-secondary"
        onClick={() => handleClick('left')}
      >
        <div>Click Left</div>
      </div>
      <div
        className="Carousel__button Carousel__button--right button-secondary"
        onClick={() => handleClick('right')}
      >
        <div>Click Right</div>
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
