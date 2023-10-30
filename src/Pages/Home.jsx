import React,{useState,useEffect} from 'react';
import Header from '../Components/header';
import Card from '../Components/card';
import Autobiography from '../Components/autobioheader';
import Filter from '../Components/filter';
import '../styles.css'; 
import cardsData from '../cardsData.json'

function Home(){
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCard, setFilteredCard] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    SwordandShield: false, XandY: false, BlackandWhite: false, ScarletandViolet: false,
    InStock: false, OutofStock: false,
    Condition10: false, Condition9: false, Condition8: false
  });

  useEffect(() => {
    const filteredCards = cardsData.filter((card) => {
      if (filterOptions.SwordandShield && card.description.includes('Sword and Shield')) {
        return true;
      }
      if (filterOptions.XandY && card.description.includes('X and Y')) {
        return true;
      }
      if (filterOptions.BlackandWhite && card.description.includes('Black and White')) {
        return true;
      }
      if (filterOptions.ScarletandViolet && card.description.includes('Scarlet and Violet')) {
        return true;
      }
      return false;
    });
    setFilteredCard(filteredCards);
  }, [filterOptions]);

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

export default Home;
