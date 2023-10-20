import React from 'react';
import './styles.css'; 
import bioimg from './images/biographyimage.png'

function Autobiography() {
  const autobiographyText = "Thank you for visiting our store. This is just for fun . Lorem ipsum dolor sit amet. Thank you for visiting our store. This is just for fun . Lorem ipsum dolor sit amet.";  

  return (
    <div className="autobiography-section">
      <div className="autobiography-text">
        {autobiographyText}
      </div>
      <div className="autobiography-image">
        <img src={bioimg} alt='biographyimage' />
      </div>
    </div>
  );
}

export default Autobiography;