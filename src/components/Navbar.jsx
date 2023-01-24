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
        <a href="#gallery" className="Navbar__link">
          Gallery
        </a>
        <a href="#info" className="Navbar__link">
          Info
        </a>
        <a href="#video" className="Navbar__link">
          Video Tour
        </a>
        <a href="#contact" className="Navbar__link">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
