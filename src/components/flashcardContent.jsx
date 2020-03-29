import React from 'react';
import { CONTENT_TYPE } from '../constants/constants';
import '../stylesheets/index.css';
import FlipIcon from '../assets/FlipIcon';

const FlashcardContent = ({
  content,
  contentType,
}) => {
  return (
    <div className="card__content">
      {contentType === CONTENT_TYPE.TEXT && <p>{content}</p>}
      <FlipIcon color="rgb(35, 180, 161)" />
    </div >
  );
}

export default FlashcardContent;
