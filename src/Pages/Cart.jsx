import React, {useState} from 'react';
import TotalPrice from '../Components/totalprice';
import Header from '../Components/header';
import '../styles.css'; 

function Cart({ cartItems, onRemoveFromCart }) {

  const [multipliers, setMultipliers] = useState({});
  const ShoppingCartText = "Shopping Cart";

  if (!cartItems) {
    return <div className="cart-container">Cart is empty</div>;
  }

  const handleRemoveClick = (item) => {
    onRemoveFromCart(item);
  };

  const handleMultiplierChange = (itemId, value) => {
    setMultipliers((prevMultipliers) => ({
      ...prevMultipliers,
      [itemId]: value,
    }));
  };

  const calculatePrice = (item) => {
    const multiplier = multipliers[item.id] || 1;
    return (item.price * multiplier).toFixed(2);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const updatedPrice = calculatePrice(item);
      return total + parseFloat(updatedPrice);
    }, 0).toFixed(2);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="App">
      <Header/>
      <div className="cart-container">
        <div className="cart-container-header">
          {ShoppingCartText}
        </div>
        <div className="cart-items-container">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-left-container">
                <img src={require(`../images/${item.image}`)} alt={item.name} className="cart-item-image" />
              </div>
              <div className="cart-item-middleleft-container">
                <div className="cart-items-name-description">
                  <p className="name">Pokemon Card {item.stock} {item.name}</p>
                  <p className="description">{item.description}</p>
                </div>
              </div>
              <div className="cart-item-middleright-container">
              <div className="cart-item-dropdown">
                <select
                  value={multipliers[item.id]}
                  onChange={(e) => handleMultiplierChange(item.id, parseInt(e.target.value))}
                  >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  ))}
                </select>
                </div>
              </div>
              <div className="cart-items-right-container">
                <button className="cart-item-remove-button" onClick={() => handleRemoveClick(item)}>X</button>
                <div className="cart-item-price">${calculatePrice(item)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total-price-container">
          <div className="total-price">
            <TotalPrice totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Cart;
