import React from 'react';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import Images from './Images';
import '../styles/ImageOverlay.css';

const ImageOverlay = ({ isOpen, closeOverlay }) => {
  let handleCloseOverlay = () => closeOverlay();
  let handleClick = (e) => {
    console.log('clicked chevron button');
  };
  return (
    <div className={`ImageOverlay ${isOpen && 'ImageOverlay--open'}`}>
      <nav className="ImageOverlay__nav">
        <button type="button" className="button button-icon">
          <BsArrowsAngleExpand />
        </button>
        <button
          type="button"
          className="button button-icon"
          onClick={handleCloseOverlay}
        >
          <IoClose />
        </button>
      </nav>
      <div
        className="ImageOverlay__button button--left"
        onClick={() => handleClick('left')}
      >
        <button className="button button-icon">
          <BsChevronLeft />
        </button>
      </div>
      <div
        className="ImageOverlay__button button--right"
        onClick={() => handleClick('right')}
      >
        <button className="button button-icon">
          <BsChevronRight />
        </button>
      </div>
      <div className="ImageOverlay__imageContainer">
        <img src={Images[0]} alt="" />
      </div>
    </div>
  );
};

export default ImageOverlay;
