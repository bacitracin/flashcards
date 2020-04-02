import React from 'react';
import Flashcard from './Flashcard';
import '../stylesheets/index.css';

const FlashcardsWrapper = ({ flashcards }) => {
  return flashcards.length ?
    (
      flashcards.map((card, index) => (
        <Flashcard
          contentFront={card.contentFront}
          contentFrontType={card.contentFrontType}
          contentBack={card.contentBack}
          contentBackType={card.contentBackType}
          key={card.id}
          isFirst={index === 0}
        />)
      )
    ) : null
}

export default FlashcardsWrapper;
