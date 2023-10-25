import React from 'react';
import './styles.css'; 

function Card({ name, description, stock, price, onAddToCart, image }) {
  return (
    <div className="card">
      <img src={require(`${image}`)} alt={name} className="card-image" />
      <div className="card-details">
        <div className="name-container">
          <p className="name">{name}</p>
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
        <button className="addtocartbtn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
