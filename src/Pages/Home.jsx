import React,{useState,useEffect} from 'react';
import Header from '../Components/header';
import Card from '../Components/card';
import Autobiography from '../Components/autobioheader';
import Filter from '../Components/filter';
import '../styles.css'; 
import cardsData from '../cardsData.json';

function Home(homeItems){
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCard, setFilteredCard] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    SwordandShield: false, XandY: false, BlackandWhite: false, ScarletandViolet: false,
    InStock: false, OutofStock: false,
    Condition10: false, Condition9: false, Condition8: false
  });

  const totalItemsInCart = homeItems.cartItems.length;

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

  const handleAddToCart = (card) => {
    homeItems.setCartItems([...homeItems.cartItems, card]);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} totalItemsInCart={totalItemsInCart} />
      <Autobiography />
      <div className="content-container">
        <div className="filter-container">
          <Filter filterOptions={filterOptions} onFilterChange={handleFilterChange}/>
        </div>
        <div className="card-container">
        {filteredCard.length > 0 ? (
          filteredCard.map((card) => (
            <Card
              id={card.id} 
              title={card.title}
              name={card.name}
              description={card.description}
              stock={card.stock}
              price={card.price}
              image={card.image}
              rarity={card.rarity}
              code={card.code}
              set={card.set}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : searchTerm ? (
          <div className="no-result">No result</div>
        ) : (
          cardsData.map((card) => (
            <Card
              id={card.id}
              title={card.title} 
              name={card.name}
              description={card.description}
              stock={card.stock}
              price={card.price}
              image={card.image}
              rarity={card.rarity}
              code={card.code}
              set={card.set}
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
