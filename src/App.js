import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import CardDetail from './Pages/CardDetail';
import cardsData from './cardsData.json';
import GradedCards from './Pages/GradedCardPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleRemoveFromCart = (item) => {
    console.log('Removing item:', item);
    const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCart);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems}e  />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart}/>} />
        <Route path="/card/:id" element={<CardDetail cardsData={cardsData} />} />
        <Route path="/gradedcard" element={<GradedCards cartItems={cartItems} setCartItems={setCartItems}e  />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
