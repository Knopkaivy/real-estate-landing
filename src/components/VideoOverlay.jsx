import React, { useRef } from 'react';
import '../styles/VideoOverlay.css';

const VideoOverlay = ({ isOpen, closeOverlay }) => {
  const video = useRef(null);
  const handleCloseOverlay = () => {
    const video = document.querySelector('.VideOverlay__video');
    const source = video.src;
    video.src = '';
    video.src = source;
    closeOverlay();
  };
  return (
    <div className={`VideoOverlay ${isOpen && 'VideoOverlay--open'}`}>
      <div className="VideoOverlay__closeButtonContainer">
        <button type="button" onClick={handleCloseOverlay}>
          x
        </button>
      </div>
      <div className="VideoOverlay__videoContainer">
        <iframe
          className="VideOverlay__video"
          ref={video}
          width="100%"
          height="100%"
          // src="https://www.youtube.com/embed/OgNN2TUiHKc?&autoplay=1"
          src="https://www.youtube.com/embed/OgNN2TUiHKc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoOverlay;
