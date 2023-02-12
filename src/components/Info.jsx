import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCouch, FaBath } from 'react-icons/fa';
import { MdGarage } from 'react-icons/md';
import { IoBed } from 'react-icons/io5';
import '../styles/Info.css';
import InfoAdded from './InfoAdded';

const Info = () => {
  let location = useLocation();
  return (
    <div id="info" className="Info">
      <div className="Info__container container">
        <h2 className="header">Home Information and Amenities</h2>
        <ul className="Info__amenities">
          <li className="Info__amenitiesItem">
            <div className="Info__amenitiesIcon">
              <FaCouch />
            </div>
            <p className="Info_amenitiesDescription">
              <span>1</span> Living Room
            </p>
          </li>
          <li className="Info__amenitiesItem">
            <div className="Info__amenitiesIcon">
              <IoBed />
            </div>
            <p className="Info_amenitiesDescription">
              <span>2</span> Bedrooms
            </p>
          </li>
          <li className="Info__amenitiesItem">
            <div className="Info__amenitiesIcon">
              <FaBath />
            </div>
            <p className="Info_amenitiesDescription">
              <span>2</span> Bathrooms
            </p>
          </li>
          <li className="Info__amenitiesItem">
            <div className="Info__amenitiesIcon">
              <MdGarage />
            </div>
            <p className="Info_amenitiesDescription">
              <span>1 Car</span> Garage
            </p>
          </li>
        </ul>
        <div className="Info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde
          voluptas, placeat facilis exercitationem cumque adipisci dicta
          tenetur, eaque deleniti et, accusantium debitis molestiae rem
          provident. A vel eum magni!
        </div>
        {location.pathname.includes('more') ? (
          <InfoAdded />
        ) : (
          <Link to={'more'} className="button-secondary">
            More Info
          </Link>
        )}
      </div>
    </div>
  );
};

export default Info;
