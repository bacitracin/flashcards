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

  const isText = contentType === CONTENT_TYPE.TEXT;
  const textStyle = isText && content && content.length > 50 ? 'long-text' : 'short-text';

  return (
    <div className={`card__content card__content--${contentType}`} style={contentStyle}>
      <div className="card__border">
        {isText &&
          <div className={`card__text card__text--${textStyle}`}>
            <p>{content}</p>
          </div>
        }
      </div>
    </div >
  );
}

export default FlashcardContent;
