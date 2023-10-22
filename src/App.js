import React,{useState} from 'react';
import Header from './header';
import Card from './card';
import Autobiography from './autobioheader';
import './styles.css'; 
import cardsData from './cardsData.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCard, setFilteredCard] = useState([]);

  const handleSearch = (term) => {
    const foundCards = cardsData.filter(
      (card) => card.name.toLowerCase().startsWith(term.toLowerCase())
    );
    setFilteredCard(foundCards);
    setSearchTerm(term);
  };

  const handleAddToCart = () => {
    console.log('Added to cart!');
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Autobiography />
      <div className="card-container">
        {filteredCard.length > 0 ? (
          filteredCard.map((card, index) => (
            <Card
              key={index} // Use a unique ID if available, like card.id
              name={card.name}
              description={card.description}
              stock={card.stock}
              price={card.price}
              image={card.image}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : searchTerm ? (
          <div className="no-result">No result</div>
        ) : (
          cardsData.map((card, index) => (
            <Card
              key={index} // Use a unique ID if available, like card.id
              name={card.name}
              description={card.description}
              stock={card.stock}
              price={card.price}
              image={card.image}
              onAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
