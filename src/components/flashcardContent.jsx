import React from 'react';
import { CONTENT_TYPE } from '../constants/constants';
import '../stylesheets/index.css';

const FlashcardContent = ({
  content,
  contentType,
}) => {
  const contentStyle = contentType === CONTENT_TYPE.IMAGE ? {
    backgroundImage: `url(${content})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  } : {};

  return (
    <div className={`card__content card__content--${contentType}`} style={contentStyle}>
      {contentType === CONTENT_TYPE.TEXT &&
        <div className="card__text">
          <p>{content}</p>
        </div>
      }
    </div >
  );
}

export default FlashcardContent;
