import React from 'react';
import logo from './images/headerlogo.png';

function Header() {
  return (
    <div className="header">
      <div className='logo-container'>
        <img src={logo} alt="headerlogo" className="logo" />
      </div>
      <div className="title-container">
        <h1>James Pokemon Store</h1>
      </div>
      <div className="menu-container">
        <div className="menu-item">Singles card</div>
        <div className="menu-item">Graded cards</div>
      </div>
    </div>
  );
}

export default Header;
