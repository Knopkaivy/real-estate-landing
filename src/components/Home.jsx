import React from 'react';
import BackgroundImage from '../images/bg.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__background">
        <img src={BackgroundImage} alt="product full view" />
      </div>
      <div className="Home__hero">
        <h1 className="Home__header">Cozy Cottage in the Heart of SOMA</h1>
        <p className="Home__address">
          500 Terry Francois St. San Francisco, CA
        </p>
        <ul className="Home__params">
          <li className="Home__paramsItem">1 Living Room</li>
          <li className="Home__paramsItem">2 Bedroom</li>
          <li className="Home__paramsItem">2 Bathroom</li>
          <li className="Home__paramsItem">2 Car Garage</li>
        </ul>
        <div className="Home__price">$2,300,000</div>
        <div className="Home__scrollButton">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 20 20"
          >
            <title>chevron-down</title>
            <path d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 4.242-4.243-4.242-1.414 1.414z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
