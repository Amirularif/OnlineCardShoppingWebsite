import React from 'react';
import '../styles.css'; 

function Card({ id, name, description, stock, price, onAddToCart, image }) {
  const handleAddToCart = () => {
    console.log('Adding item to cart:', { id,name, description, price, image });
    onAddToCart({ id,name, description, stock, price, image });
  };

  return (
    <div className="card"> 
    <img src={require(`../images/${image}`)} alt={name} className="card-image"/>
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
        <button className="addtocartbtn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
