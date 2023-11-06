import React from 'react';
import cartIcon from '../icons/cart.png'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-title">Evolve the way you collect</div>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Chat</h4>
        </div>
        <div className="footer-column">
          <h4>Location</h4>
        </div>
        <div className="footer-column">
          <h4>Email Us</h4>
        </div>
        <div className="footer-column">
          <h4>More</h4>
        </div>
      </div>
      <div className="social-icons">
        <img src={cartIcon} alt="Cart" className="icon" />
        <img src={cartIcon} alt="Cart" className="icon" />
        <img src={cartIcon} alt="Cart" className="icon" />
        <img src={cartIcon} alt="Cart" className="icon" />
        <img src={cartIcon} alt="Cart" className="icon" />
      </div>
    </div>
  );
}

export default Footer;
