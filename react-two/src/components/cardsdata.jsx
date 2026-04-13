import React, { useState } from 'react';

const cardsData = [
  { id: 1, title: 'Card 1', description: 'This is Card 1.' },
  { id: 2, title: 'Card 2', description: 'This is  Card 2.' },
  { id: 3, title: 'Card 3', description: 'This is Card 3.' },
  { id: 4, title: 'Card 4', description: 'This is Card 4.' },
  { id: 5, title: 'Card 5', description: 'This is Card 5.' },
  { id: 6, title: 'Card 6', description: 'This  Card 6.' },
  { id: 7, title: 'Card 7', description: 'This is Card 7.' },
  { id: 8, title: 'Card 8', description: 'This is  Card 8.' },
];

function CardList() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCards = isExpanded ? cardsData : cardsData.slice(0, 4);

  return (
    <div>
      <div>
        {visibleCards.map(card => (
          <div
            key={card.id}
            style={{
              backgroundColor: 'blue',
              margin: '10px',
              padding: '10px',
              color: 'white',
              borderRadius: '10px',
              items:'center'
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      {/* 2. Only show buttons if there are more than 4 cards total */}
      {cardsData.length > 4 && (
        <div className="buttons">
          {!isExpanded ? (
            <button onClick={() => setIsExpanded(true)}>Show More</button>
          ) : (
            <button onClick={() => setIsExpanded(false)}>Show Less</button>
          )}
        </div>
      )}
    </div>
  );
}

export default CardList;