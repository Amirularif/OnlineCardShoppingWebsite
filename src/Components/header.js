import React, { useState } from 'react';
import logo from '../images/headerlogo.png';
import cartIcon from '../icons/cart.png'
import profileIcon from '../icons/profile.png'
import { Link } from "react-router-dom";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

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
        <div className="menu-item">Booster boxes</div>
        <div className="menu-item">Mystery packs</div>
        <div className="menu-item">Contact</div>
      </div>
       <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="icon-container">
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" className="icon" />
        </Link>
        <img src={profileIcon} alt="Profile" className="icon" />
      </div>
    </div>
  );
}

export default Header;
