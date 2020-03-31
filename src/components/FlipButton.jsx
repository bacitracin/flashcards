import React, { Component } from 'react';
import FlashcardContent from './FlashcardContent';
import FlipIcon from '../assets/FlipIcon';
import '../stylesheets/index.css';

const FlipButton = ({
  cardSide,
  contentType,
  isFirst,
}) => {
  // should also include prop first time
  const showClickText = cardSide === "front" && isFirst;
  const textVisible = showClickText ? "show-text" : "hide-text";

  const iconColor = !showClickText && contentType === "image" ? "rgb(255, 255, 255)" : "rgb(49,53, 55)";
  const iconShadow = !showClickText && contentType === "image";
  return (
    <div className={`flip-button flip-button--${textVisible}`} >
      <div className={`flip-text--${textVisible}`}>
        Click to flip
      </div>
      <FlipIcon
        color={iconColor}
        contentType={contentType}
        iconShadow={iconShadow}
        height={17}
        width={23}
      />
    </div >
  );
}

export default FlipButton;