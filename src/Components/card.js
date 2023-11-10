import React, { useState } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

function Card({ id,title, name, description, stock, price, onAddToCart, image, code, set, rarity, condition }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleAddToCart = () => {
    console.log('Adding item to cart:', { id,title, name, description, price, image, code, set, rarity });
    onAddToCart({ id,title, name, description,stock, price, image, code, set, rarity, condition });
    
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="card"> 
      <Link to={`/card/${id}`}>
        <img src={require(`../images/singles/${image}`)} alt={name} className="card-image"/>
      </Link>
      <div className="card-details">
        <div className="name-container">
          <p className="name">{title} {name} {rarity} {code} {set}</p>
        </div>
        <div className="price-description-stock-container">
          <div className="description-stock-container">
            <p className="description">{description}</p>
            <p className="stock">Stock: {stock}</p>
          </div>
          <div className="price-container">
            <p className="price">${price}</p>
          </div>
        </div>
        <button className="addtocartbtn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {showSuccessMessage && (
          <div className="success-message">
            Successfully added to cart!
          </div>)}
      </div>
    </div> 
  );
}

export default Card;
