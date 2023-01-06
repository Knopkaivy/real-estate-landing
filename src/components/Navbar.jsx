import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <span>Emilia Ingram </span>/ Realtor
      </div>
      <div className="Navbar__linksContainer">
        <div className="Navbar__link Navbar__link--active">Home</div>
        <div className="Navbar__link">Gallery</div>
        <div className="Navbar__link">Info</div>
        <div className="Navbar__link">Video Tour</div>
        <div className="Navbar__link">Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
