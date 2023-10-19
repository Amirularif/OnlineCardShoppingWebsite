import React from 'react';
import Header from './header';
import Card from './card';
import './styles.css'; 
import charizardvmax from './images/charizardvmax.png'
import zapdos from './images/galarianbird.png'
import mew from './images/mew.png'
import pikachu from './images/pikachu.png'
import arceusv from './images/arceusv.png'
import umbreonvmax from './images/umbreonvmax.png'

const cardsData = [
  // Data for 5 cards
  { name: 'Charizard VMAX', description: 'Sword and Shield', stock: 10, price: 5.99, image: charizardvmax},
  { name: 'Zapdos AR', description: 'Sword and Shield', stock: 8, price: 7.99, image: zapdos},
  { name: 'Mew', description: 'Sword and Shield', stock: 10, price: 5.99, image: mew},
  { name: 'Pikachu', description: 'Sword and Shield', stock: 8, price: 7.99, image: pikachu},
  { name: 'Arceus V', description: 'Sword and Shield', stock: 10, price: 5.99, image: arceusv},
  { name: 'Umbreon VMAX', description: 'Sword and Shield', stock: 8, price: 7.99, image: umbreonvmax},
  
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
            image={card.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
