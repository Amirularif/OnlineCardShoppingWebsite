import React from 'react';
import cartIcon from '../icons/cart.png';
import '../styles-footer.css'

function Footer() {
  const ChatText = "Available Monday - Friday (8:00am - 5:00pm PST) Quickest way to get your questions answered";
  const locationText = "Email us at jamestore@gmail.com. We’ll get to you as soon as possible";
  const emailusText = "James Store Marketplace 7560 SW Durham Rd Tigard, OR 97224";
  const moreText = "PRIVACY POLICY \n STORE POLICY \n RETURN POLICY \n ABOUT";

  return (
    <div className="footer-container">
      <div className="footer-title-container">
        <p className="footer-title">Evolve the way you collect</p>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <p className="footer-column-title">CHAT</p>
          <div className="footer-column-description-container">
            <p className="footer-column-description">{ChatText}</p>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-column-title">LOCATION</p>
          <div className="footer-column-description-container">
            <p className="footer-column-description">{locationText}</p>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-column-title">EMAIL US</p>
          <div className="footer-column-description-container">
            <p className="footer-column-description">{emailusText}</p>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-column-title">MORE</p>
          <div className="footer-column-description-container">
            <p className="footer-column-description">{moreText}</p>
          </div>
        </div>
      </div>
      <div className="social-icons-container">
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
