import React from 'react';
import '../styles.css'; 

function Cart({ cartItems }) {
  if (!cartItems) {
    return <div className="cart-container">Cart is empty</div>;
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="cart-item-price">${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
