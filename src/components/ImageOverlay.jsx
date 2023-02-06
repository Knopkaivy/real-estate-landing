import React from 'react';
import { IoClose } from 'react-icons/io5';
import '../styles/ImageOverlay.css';

const ImageOverlay = ({ isOpen, closeOverlay }) => {
  let handleCloseOverlay = () => closeOverlay();
  return (
    <div className={`ImageOverlay ${isOpen && 'ImageOverlay--open'}`}>
      <div>Image Overlay Component</div>
      <button type="button" onClick={handleCloseOverlay}>
        <IoClose />
      </button>
    </div>
  );
};

export default ImageOverlay;
