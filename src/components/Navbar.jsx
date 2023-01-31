import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  let location = useLocation();
  return (
    <div
      className={`Navbar ${
        location.pathname.includes('more') && 'Navbar--more'
      }`}
    >
      <div className="Navbar__logo">
        <span>Emilia Ingram </span>/ Realtor
      </div>
      <div className="Navbar__linksContainer">
        <Link to="/" className="Navbar__link Navbar__link--active">
          Home
        </Link>
        <Link to="/#gallery" className="Navbar__link">
          Gallery
        </Link>
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
