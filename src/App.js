import React from 'react';
import Header from './header';
import Card from './card';
import Autobiography from './autobioheader';
import './styles.css'; 
import cardsData from './cardsData.json'

function App() {

  const handleAddToCart = () => {
    console.log('Added to cart!');
  };

  return (
    <div className="App">
      <Header />
      <Autobiography/>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            description={card.description}
            stock={card.stock}
            price={card.price}
            image={card.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
