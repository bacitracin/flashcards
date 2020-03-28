import React from 'react';
import Flashcard from './FlashCard';
import { CONTENT_TYPE } from '../constants/constants';
import '../stylesheets/index.css';

const FlashcardWrapper = (flashcards) => {
  return {
    flashcards.map((flashcard) => {
      return (
        <Flashcard
          content={flashcard.content}
          contentType={flashcard.contentType}
          isFullCard={flashcard.isFullCard}
        />
      );
    })
  }

}

export default FlashcardWrapper;