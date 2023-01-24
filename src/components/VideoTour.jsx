import React from 'react';
import VideoBackgroundImage from '../images/bg2.jpg';
import '../styles/VideoTour.css';

const VideoTour = () => {
  return (
    <div className="VideoTour">
      <div className="VideoTour__background">
        <img src={VideoBackgroundImage} alt="background" />
      </div>
      <h2 className="VideoTour__header">Home Video Tour</h2>
      <button className="button-tertiary">
        <svg
          fill="#ffffff"
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM10,8l6,4-6,4Z"></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default VideoTour;
