import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/header'

function CardDetail({ cardsData }) {
  const { id } = useParams();
  const card = cardsData.find((card) => card.id === parseInt(id));

  if (!card) {
    return <div>Card not found</div>;
  }

  const handleAddToCart = () => {
    // Implement the logic to add the selected card to the cart
  };

  const handleBuyNow = () => {
    // Implement the logic for Buy Now functionality
  };

  return (
    <div className="card-detail">
      <Header/>
      <div className="card-detail-container">
      <div className="card-detail-left-container">
        <img src={require(`../images/${card.image}`)} alt={card.name} className="card-detail-image" />
      </div>
      <div className="card-detail-right-container">
        <h2>{card.name}</h2>
        <p>{card.description}</p>
        <p>Stock: {card.stock}</p>
        <p>Price: ${card.price.toFixed(2)}</p>
        <div className="buttons-container">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CardDetail;
