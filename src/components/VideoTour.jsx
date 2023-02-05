import React from 'react';
import { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import VideoBackgroundImage from '../images/bg2.jpg';
import '../styles/VideoTour.css';
import VideoOverlay from './VideoOverlay';

const VideoTour = () => {
  const [videoOverlayOpen, setVideoOverlayOpen] = useState(false);
  const closeOverlay = () => setVideoOverlayOpen(false);
  return (
    <div id="video" className="VideoTour">
      <VideoOverlay isOpen={videoOverlayOpen} closeOverlay={closeOverlay} />
      <div className="VideoTour__background">
        <img src={VideoBackgroundImage} alt="background" />
      </div>
      <h2 className="VideoTour__header header">Home Video Tour</h2>
      <button
        className="button-tertiary"
        onClick={() => setVideoOverlayOpen(true)}
      >
        <BsPlayCircle />
      </button>
    </div>
  );
};

export default VideoTour;
