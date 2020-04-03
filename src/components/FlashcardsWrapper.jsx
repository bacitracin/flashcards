import React from 'react';
import Flashcard from './Flashcard';
import '../stylesheets/index.css';

const FlashcardsWrapper = ({ flashcards }) => {
  return flashcards.length ?
    (
      flashcards.map(({
        contentBack,
        contentBackType,
        contentFront,
        contentFrontType,
        id
      }, index) => (
          <Flashcard
            contentFront={contentFront}
            contentFrontType={contentFrontType}
            contentBack={contentBack}
            contentBackType={contentBackType}
            key={id}
            isFirstCard={index === 0}
          />)
      )
    ) : null
}

export default FlashcardsWrapper;
