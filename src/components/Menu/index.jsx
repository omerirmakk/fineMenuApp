import React from 'react';
import './main.css';
import { useState } from 'react';

const Menu = ({ title, desc, src, modalTitle, modalDesc }) => {
  const [btnActive, setBtnActive] = useState(true);

  const clickEvent = () => {
    setBtnActive((current) => !current);
  };
  return (
    <>
      <div id="menu">
        <div className="card">
          <img src={src} className={btnActive ? '' : 'blurback'} />
          <div className={btnActive ? '' : 'blurback'}>
            <span className="foodName">{title}</span>
            <span className="recipe">{desc}</span>
            <button
              className={btnActive ? 'show-modal' : 'hidden'}
              onClick={clickEvent}
            >
              More
            </button>
          </div>
          <div className={btnActive ? 'hidden' : 'modal'}>
            <button
              onClick={clickEvent}
              className={btnActive ? 'hidden' : 'close-modal'}
            >
              &times;
            </button>
            <h1>{modalTitle}</h1>
            <p>{modalDesc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
