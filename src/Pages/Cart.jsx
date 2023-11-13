import React, {useState} from 'react';
import TotalPrice from '../Components/totalprice';
import Header from '../Components/header';
import Footer from '../Components/footer';
import '../styles-cart.css';
import '../styles-header.css'; 

function Cart({ cartItems, onRemoveFromCart }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [multipliers, setMultipliers] = useState({});
  const ShoppingCartText = "Shopping Cart";

  if (!cartItems) {
    return <div className="cart-container">Cart is empty</div>;
  }

  const handleRemoveClick = (item) => {
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

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
                <img src={require(`../images/singles/${item.image}`)} alt={item.name} className="cart-item-image" />
              </div>
              <div className="cart-item-middleleft-container">
                <div className="cart-items-name-description">
                  <p className="name">{item.title} {item.name} {item.rarity} {item.code} {item.set}</p>
                  <p className="description">{item.description}</p>
                </div>
              </div>
              <div className="cart-item-middleright-container">
              <div className="cart-item-dropdown-container">
                <select
                  value={multipliers[item.id]}
                  onChange={(e) => handleMultiplierChange(item.id, parseInt(e.target.value))}
                  className="cart-item-dropdown"
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
                <button className="cart-item-remove-button" onClick={() => handleRemoveClick(item)}>
                  X
                </button>
                {showSuccessMessage && (
                  <div className="success-message">
                    Removed from cart!
                  </div>)}
                <div className="cart-item-price">${calculatePrice(item)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total-price-container">
          <div className="total-price">
            <TotalPrice totalPrice = {totalPrice} />
          </div>
          <button className="cart-total-checkout-btn">Checkout</button>
        </div>
      </div>
      <Footer />
    </div> 
  );
}

export default Cart;
