import React from 'react';
import TotalPrice from '../Components/totalprice';
import Header from '../Components/header';
import '../styles.css'; 

function Cart({ cartItems, onRemoveFromCart }) {

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  if (!cartItems) {
    return <div className="cart-container">Cart is empty</div>;
  }

  const handleRemoveClick = (item) => {
    onRemoveFromCart(item);
  };

  return (
    <div className="App">
      <Header/>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <div className="cart-items-container">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-left-container">
                <img src={require(`../images/${item.image}`)} alt={item.name} className="cart-item-image" />
              </div>
              <div className="cart-item-middle-container">
                <div className="cart-items-name-description">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="cart-items-right-container">
                <div className="cart-item-price">${item.price}</div>
                <button onClick={() => handleRemoveClick(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <TotalPrice totalPrice={totalPrice} />
      </div>
    </div> 
  );
}

export default Cart;
