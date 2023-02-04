import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Info from './Info';
import Map from './Map';
import Neighborhood from './Neighborhood';
import '../styles/More.css';

const More = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="More">
      <Info />
      <Carousel />
      <Neighborhood />
      <Map />
    </div>
  );
};

export default More;
