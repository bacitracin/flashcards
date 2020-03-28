import React from 'react';
import FlashcardContent from './FlashcardContent.jsx';
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