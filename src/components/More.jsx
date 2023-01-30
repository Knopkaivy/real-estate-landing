import React from 'react';
import Neighborhood from './Neighborhood';
import '../styles/More.css';
import Info from './Info';

const More = () => {
  return (
    <div className="More">
      <Info />
      <Neighborhood />
    </div>
  );
};

export default More;
