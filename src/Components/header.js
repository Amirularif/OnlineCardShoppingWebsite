import React, { useState } from 'react';
import logo from '../images/headerlogo.png';
import cartIcon from '../icons/cart.png'
import profileIcon from '../icons/profile.png'
import { Link } from "react-router-dom";
import '../styles-header.css'

function Header({ onSearch, totalItemsInCart }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const scrollToContacts = () => {
    const contactsElement = document.getElementById('contacts');
    if (contactsElement) {
      const startPos = window.pageYOffset;
      const targetPos = contactsElement.offsetTop;
      const distance = targetPos - startPos;
      const duration = 500; // Scroll duration in milliseconds
      const startTime = performance.now();
  
      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is between 0 and 1
        window.scrollTo(0, startPos + distance * progress);
  
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
  
      requestAnimationFrame(animateScroll);
    }
  };

  console.log('Number of items in the cart:', totalItemsInCart);

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
          <Link to="/gradedcard" className="Link">
            <div className="menu-item">Graded card</div>
          </Link>
        <div className="menu-item">Booster boxes</div>
        <div className="menu-item">Mystery packs</div>
        <a href="#contacts" className="menu-item" onClick={scrollToContacts}>Contacts</a>
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
          {totalItemsInCart > 0 && <span className="cart-indicator">{totalItemsInCart}</span>}
        </Link>
        <img src={profileIcon} alt="Profile" className="icon" />
      </div>
    </div>
  );
}

export default Header;
