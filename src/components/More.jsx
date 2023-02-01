import React, { useEffect } from 'react';
import Neighborhood from './Neighborhood';
import Map from './Map';
import '../styles/More.css';
import Info from './Info';

const More = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="More">
      <Info />
      <Neighborhood />
      <Map />
    </div>
  );
};

export default More;
