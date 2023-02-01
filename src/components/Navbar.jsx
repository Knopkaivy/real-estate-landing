import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';

const Navbar = () => {
  let location = useLocation();
  return (
    <div
      className={`Navbar ${location.pathname.includes('more') &&
        'Navbar--more'}`}
    >
      <div className="Navbar__logo">
        <span>Emilia Ingram </span>/ Realtor
      </div>
      <div className="Navbar__linksContainer">
        <Link to="/" className="Navbar__link Navbar__link--active">
          Home
        </Link>
        <HashLink to="/#gallery" className="Navbar__link">
          Gallery
        </HashLink>
        <HashLink to="/#info" className="Navbar__link">
          Info
        </HashLink>
        <HashLink to="/#video" className="Navbar__link">
          Video Tour
        </HashLink>
        <HashLink to="/#contact" className="Navbar__link">
          Contact
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
