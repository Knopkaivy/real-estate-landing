import React from 'react';
import Home from './Home';
import Gallery from './Gallery';
import Info from './Info';

const MainPage = () => {
  return (
    <React.Fragment>
      <Home />
      <Gallery />
      <Info />
    </React.Fragment>
  );
};

export default MainPage;
