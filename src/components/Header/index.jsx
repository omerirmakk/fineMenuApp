import React from 'react';
import './main.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="mainLogo">LOGO</div>
        <div className="mainNavbar">
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
