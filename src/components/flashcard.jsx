import React from 'react';
import FlipIcon from '../assets/flipIcon.jsx';
import '../stylesheets/index.css';

const flashcard = ({
  text,
}) => {
  return (
    <div class="flashcard">
      <p className="flashcard__content">
        {text}
      </p>
      <FlipIcon color="red" />
    </div>
  );
}

export default flashcard;