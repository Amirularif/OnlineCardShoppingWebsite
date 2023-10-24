import React from 'react';
import './styles.css'; 

function Card({ name, description, stock, price, onAddToCart, image }) {
  return (
    <div className="card">
      <img src={require(`${image}`)} alt={name} className="card-image" />
      <div className='card-details'>
        <h2>{name}</h2>
        <p className="price">${price}</p>
        <p className="description">{description}</p>
        <p className="stock">Stock: {stock}</p>
        <button className="addtocartbtn" onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
