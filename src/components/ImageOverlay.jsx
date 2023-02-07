import React, { useEffect, useState } from 'react';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import Images from './Images';
import '../styles/ImageOverlay.css';

const ImageOverlay = ({ isOpen, openingImageIndex, closeOverlay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState();
  useEffect(() => {
    if (openingImageIndex !== currentImageIndex) {
      setCurrentImageIndex(openingImageIndex);
    }
  }, [openingImageIndex]);
  let handleCloseOverlay = () => closeOverlay();

  let handleClickLeft = () => {
    let newIndex = Number(currentImageIndex);
    if (newIndex > 0) {
      newIndex -= 1;
      setCurrentImageIndex(newIndex);
    } else if (newIndex === 0) {
      newIndex = Images.length - 1;
      setCurrentImageIndex(newIndex);
    } else {
      return;
    }
    return;
  };
  let handleClickRight = () => {
    let newIndex = Number(currentImageIndex);
    if (newIndex < Images.length - 1) {
      newIndex += 1;
      setCurrentImageIndex(newIndex);
    } else if (newIndex === Images.length - 1) {
      newIndex = 0;
      setCurrentImageIndex(newIndex);
    }
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
        onClick={() => handleClickLeft()}
      >
        <button className="button button-icon">
          <BsChevronLeft />
        </button>
      </div>
      <div
        className="ImageOverlay__button button--right"
        onClick={() => handleClickRight()}
      >
        <button className="button button-icon">
          <BsChevronRight />
        </button>
      </div>
      <div className="ImageOverlay__imageContainer">
        <img src={Images[currentImageIndex]} alt="" />
      </div>
    </div>
  );
};

export default ImageOverlay;
