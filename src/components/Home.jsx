import React from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import BackgroundImage from '../images/bg.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__background">
        <img src={BackgroundImage} alt="product full view" />
      </div>
      <div className="Home__hero">
        <h1 className="Home__header">Cozy Cottage in Saint Francis Wood</h1>
        <p className="Home__address">
          75 Yerba Buena Ave San Francisco, CA 94127
        </p>
        <ul className="Home__params">
          <li className="Home__paramsItem">1 Living Room</li>
          <li className="Home__paramsItem">2 Bedroom</li>
          <li className="Home__paramsItem">2 Bathroom</li>
          <li className="Home__paramsItem">2 Car Garage</li>
        </ul>
        <div className="Home__price">$2,300,000</div>
        <div className="Home__scrollButton">
          <a href="#gallery">
            <IoChevronDownOutline />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
