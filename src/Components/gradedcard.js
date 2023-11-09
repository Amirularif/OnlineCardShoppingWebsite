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
        <img src={require(`../images/graded/${image}`)} alt={name} className="card-image"/>
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
      </div>
    </div> 
  );
}

export default GradedCard;
