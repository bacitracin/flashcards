import React from 'react';
import { CONTENT_TYPE } from '../constants/constants';
import '../stylesheets/index.css';

const FlashcardContent = ({
  content,
  contentType,
  isFullCard,
}) => {
  return (
    <div
      className={isFullCard ? "flashcard__content--full" : "flashcard__content--centered"}
    >
      {contentType === CONTENT_TYPE.TEXT && content}
    </div >
  );
}

export default FlashcardContent;
