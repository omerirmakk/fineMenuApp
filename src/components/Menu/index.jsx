import React from 'react';
import './main.css';

const Menu = ({ title, desc, src }) => {
  const click = () => {};
  return (
    <>
      <div className="card">
        <img src={src} />
        <div>
          <span className="foodName">{title}</span>
          <span className="recipe">{desc}</span>
          <button className="show-modal" onClick={click}>
            Bilgi
          </button>
        </div>
        <div>
          <button className="close-modal">&times;</button>
          <h1>Modal Window</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            ipsum impedit commodi blanditiis asperiores quaerat saepe beatae
            quidem aliquid eos ipsam illo deserunt cupiditate sapiente, eaque
            dolores quae. Soluta, adipisci?
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu;
