import React from 'react';
import cartIcon from '../icons/cart.png';
import '../styles-footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-title-container">
        <p className="footer-title">Evolve the way you collect</p>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <p className="footer-column-title">Chat</p>
        </div>
        <div className="footer-column">
          <p className="footer-column-title">Location</p>
        </div>
        <div className="footer-column">
          <p className="footer-column-title">Email Us</p>
        </div>
        <div className="footer-column">
          <p className="footer-column-title">More</p>
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
