import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/header';
import Card from '../Components/card';
import Footer from '../Components/footer';

function CardDetail({ cardsData }) {
  const { id } = useParams();
  const card = cardsData.find((card) => card.id === parseInt(id));
  const clickedCardDescription = card.description;

  if (!card) {
    return <div>Card not found</div>;
  }

  const handleAddToCart = () => {
    // Future implement
  };

  const handleBuyNow = () => {
    // Future implement
  };

  const similarCards = cardsData.filter((card) => card.description === clickedCardDescription && card.id !== parseInt(id));
  console.log('Similar Cards:', similarCards);

  let displayCards;

  if (similarCards.length >= 3) {
    displayCards = similarCards.slice(0, 3);
  } else if (similarCards.length > 0) {
    if (similarCards.length === 1) {
      const sameCard = cardsData.filter(
        (card) =>
          card.description === clickedCardDescription &&
          card.id !== parseInt(id)
      );
      const tworandomCard = cardsData
        .filter(
          (card) =>
          card.id !== parseInt(id)
          ).slice(0, 2);
      displayCards = sameCard.concat(tworandomCard);
    } else {
      const sameCard = cardsData.filter(
        (card) =>
          card.description === clickedCardDescription &&
          card.id !== parseInt(id)
      );
      const onerandomCard = cardsData
        .filter((card) => card.id !== parseInt(id))
        .slice(0, 1);
      displayCards = sameCard.concat(onerandomCard);
    }
  } else {
    displayCards = cardsData
      .filter((card) => card.id !== parseInt(id)) 
      .slice(0, 3);
  }

  return (
    <div className="card-detail">
      <Header/>
      <div className="card-detail-container">
        <div className="card-detail-left-container">
          <img src={require(`../images/singles/${card.image}`)} alt={card.name} className="card-detail-image" />
        </div>
        <div className="card-detail-right-container">
          <p className="card-detail-name">{card.title} {card.name} {card.rarity} {card.code} {card.set}</p>
          <p>{card.description}</p>
          <p>Stock: {card.stock}</p>
          <p>Price: ${card.price.toFixed(2)}</p>
          <div className="buttons-container">
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="recommend-card-container">
        <div className="recommend-card-title-container">
          <p className="recommend-card-title">
            You might also like
          </p>
        </div>
        <div className="recommend-card-content-container">
        {displayCards.map((card) => (
          <Card
            key={card.id}
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
        ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CardDetail;
