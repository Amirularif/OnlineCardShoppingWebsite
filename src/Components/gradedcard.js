import React from 'react';
import '../styles.css';
import '../styles-graded-card.css'
import { Link } from 'react-router-dom';

function GradedCard({ id,title, name, description, stock, price, onAddToCart, image, code, set, rarity, condition }) {
  const handleAddToCart = () => {
    console.log('Adding item to cart:', { id,title, name, description, price, image, code, set, rarity });
    onAddToCart({ id,title, name, description,stock, price, image, code, set, rarity, condition });
  };

  return (
    <div className="graded-card"> 
      <Link to={`/card/${id}`}>
        <img src={require(`../images/graded/${image}`)} alt={name} className="graded-card-image"/>
      </Link>
      <div className="graded-card-details">
        <div className="graded-name-container">
          <p className="graded-name">{title} {name} {rarity} {code} {set}</p>
        </div>
        <div className="graded-price-description-stock-container">
          <div className="graded-description-stock-container">
            <p className="graded-description">{description}</p>
            <p className="graded-stock">Stock: {stock}</p>
          </div>
          <div className="graded-price-container">
            <p className="graded-price">${price}</p>
          </div>
        </div>
        <button className="graded-addtocartbtn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div> 
  );
}

export default GradedCard;
