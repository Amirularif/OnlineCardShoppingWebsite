import React,{useState,useEffect} from 'react';
import Header from './header';
import Card from './card';
import Autobiography from './autobioheader';
import Filter from './filter';
import './styles.css'; 
import cardsData from './cardsData.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCard, setFilteredCard] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    sortByGeneration: false,
    sortByStockStatus: false,
    sortByCondition: false,
  });

  const handleSearch = (term) => {
    const foundCards = cardsData.filter(
      (card) => card.name.toLowerCase().startsWith(term.toLowerCase())
    );
    setFilteredCard(foundCards);
    setSearchTerm(term);
  };

  const handleFilterChange = (filterName) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [filterName]: !prevOptions[filterName],
    }));

    // Perform filtering based on selected checkboxes
    const filteredCards = cardsData.filter((card) => {
      if (filterName === 'sortByGeneration' && filterOptions.sortByGeneration) {
        return card.description.includes('Sword and Shield'); 
      }
      // Add more conditions for other filters if needed
      return true; // Default, don't filter
    });

    setFilteredCard(filteredCards);
    
  };

  const handleAddToCart = () => {
    console.log('Added to cart!');
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Autobiography />
      <div className="content-container">
        <div className="filter-container">
          <Filter filterOptions={filterOptions} onFilterChange={handleFilterChange}/>
        </div>
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
    </div>
  );
}

export default App;
