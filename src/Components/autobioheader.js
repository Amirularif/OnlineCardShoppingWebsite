import React from 'react';
import '../styles.css'; 
import bioimg from '../images/try1.png'

function Autobiography() {
  const welcomeText = "Welcome";  
  const descriptionText = "Thank you for visiting our store. We are currently making some improvements to our website! We sell Pokemon cards including graded, singles and even Booster boxes";
  const codeText = "USE CODE : A55FGTTK7";

  return (
    <div className="autobiography-section">
      <div className="autobiography-text">
        <div className="autobio-header">
          {welcomeText}
        </div>
        <div className="autobio-description">
          {descriptionText}
        </div>
        <div className="autobio-code">
          {codeText}
        </div>
        
      </div>
      <div className="autobiography-image">
        <img src={bioimg} alt='biographyimage' />
      </div>
    </div>
  );
}

export default Autobiography;