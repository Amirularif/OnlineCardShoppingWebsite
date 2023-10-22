import React,{useState} from 'react';
import Header from './header';
import Card from './card';
import Autobiography from './autobioheader';
import './styles.css'; 
import cardsData from './cardsData.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCard, setFilteredCard] = useState(null);

  const handleSearch = (term) => {
    const foundCard = cardsData.find(
      (card) => card.name.toLowerCase() === term.toLowerCase()
    );
    setFilteredCard(foundCard);
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
        {filteredCard ? (
          <Card
            key={filteredCard.name}
            name={filteredCard.name}
            description={filteredCard.description}
            stock={filteredCard.stock}
            price={filteredCard.price}
            image={filteredCard.image}
            onAddToCart={handleAddToCart}
          />
        ) : searchTerm ? (
          <div className="no-result">No result</div>
        ) : (
          cardsData.map((card) => (
            <Card
              key={card.name}
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
