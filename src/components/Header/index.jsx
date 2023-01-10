import React from 'react';
import './main.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="mainLogo">FISTIK</div>
        <div className="mainNavbar">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">To Top</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
