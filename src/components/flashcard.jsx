import React from 'react';
import FlashcardContent from './FlashcardContent.jsx';
import '../stylesheets/index.css';
import FlipIcon from '../assets/FlipIcon.jsx';

const Flashcard = ({
  content,
  contentType,
}) => {
  return (
    <section className="flashcard">
      <div className={"flashcard__accent-border"}>
        <FlashcardContent
          content={content}
          contentType={contentType}
        />
        <button className="flashcard__flip">
          <FlipIcon color="rgb(35, 180, 161)" />
        </button>
      </div>
    </section>
  );
}

export default Flashcard;