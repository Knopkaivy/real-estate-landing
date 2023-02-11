import React, { useEffect } from 'react';
import Home from './Home';
import Gallery from './Gallery';
import Info from './Info';
import VideoTour from './VideoTour';

const MainPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <React.Fragment>
      <Home />
      <Gallery />
      <Info />
      <VideoTour />
    </React.Fragment>
  );
};

export default MainPage;
