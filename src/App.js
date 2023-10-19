import React from 'react';
import Header from './header';
import Card from './card';
import './styles.css'; 

const cardsData = [
  // Data for 5 cards
  { name: 'Charizard VMAX', description: 'Sword and Shield', stock: 10, price: 5.99, image: './images/charizardvmax.png'},
  { name: 'Zapdos AR', description: 'Sword and Shield', stock: 8, price: 7.99, image: './images/galarianbird.png'},
  { name: 'Mew', description: 'Sword and Shield', stock: 10, price: 5.99, image: './images/mew.png'},
  { name: 'Pikachu', description: 'Sword and Shield', stock: 8, price: 7.99, image: './images/pikachu.png'},
  { name: 'Arceus V', description: 'Sword and Shield', stock: 10, price: 5.99, image: './images/arceusv.png'},
  { name: 'Umbreon VMAX', description: 'Sword and Shield', stock: 8, price: 7.99, image: './images/umbreonvmax.png'},
  
];

function App() {
  const handleAddToCart = () => {
    // Handle adding to cart logic here
    console.log('Added to cart!');
  };

  return (
    <div className="App">
      <Header />
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            description={card.description}
            stock={card.stock}
            price={card.price}
            onAddToCart={handleAddToCart}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
