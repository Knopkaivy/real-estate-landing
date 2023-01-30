import React from 'react';
import '../styles/InfoAdded.css';

const InfoAdded = () => {
  const items = [
    '1,810 Sq Ft',
    'Extensively Remodelled Top-to-Bottom in 2017',
    'Landscaped Backyard Garden',
    '1-Car Garage Parking Plus Storage',
    'Laundry Area',
    'AlwaysSafe security system',
  ];
  const list = items.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
  return <ul className="InfoAdded">{list}</ul>;
};

export default InfoAdded;
