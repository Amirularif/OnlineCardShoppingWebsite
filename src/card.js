import React from 'react';

function Card({ name, description, stock, price, onAddToCart, image }) {
  return (
    <div className="card">
      <img src={require(`./images/${image}`).default} alt={name} className="card-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Stock: {stock}</p>
      <p>Price: ${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Card;