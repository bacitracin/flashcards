import React from 'react';
import { CONTENT_TYPE } from '../constants/constants';
import FlashcardContent from './FlashcardContent';
import FlipIcon from '../assets/FlipIcon.jsx';
import '../stylesheets/index.css';

const Flashcard = ({
  content,
  contentType,
  isFullCard,
}) => {
  return (
    <section className="flashcard">
      <FlashcardContent
        content={content}
        contentType={contentType}
        isFullCard={isFullCard}
      />
      <button className="flashcard__flip">
        <FlipIcon color="red" />
      </button>
    </section>
  );
}

export default Flashcard;