import React from 'react';
import { CONTENT_TYPE } from '../constants/constants';
import '../stylesheets/index.css';

const FlashcardContent = ({
  content,
  contentType,
}) => {
  return (
    <div className="flashcard__content">
      {contentType === CONTENT_TYPE.TEXT && <p>{content}</p>}
    </div >
  );
}

export default FlashcardContent;