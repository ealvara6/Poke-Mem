import React from 'react';
import icon from './assets/pokeball-64.png';

function Header(props) {
  const { children } = { ...props };
  return (
    <div className="header">
      <div className="title-icon">
        <img src={icon} alt="" />
        <h1 className="title">POKE-MEM</h1>
      </div>
      {children}
    </div>
  );
}

export default Header;
