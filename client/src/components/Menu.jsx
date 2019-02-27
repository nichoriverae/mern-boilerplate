import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <div className="menu">
      <div className="menu__item--home">
        <Link to="/">Home</Link>
      </div>
      <div className="menu__item--about">
        <Link to="/about">About</Link>
      </div>
      <div className="menu__item--porfolio">
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </div>
);

export default Menu;
