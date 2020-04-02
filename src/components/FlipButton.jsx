import React from 'react';
import FlipIcon from './FlipIcon';
import '../stylesheets/index.css';

const FlipButton = ({
  contentType,
  showFlipText,
}) => {
  const textVisible = showFlipText ? "show-text" : "hide-text";
  const showLightIcon = !showFlipText && contentType === "image";
  const iconColor = showLightIcon ? "#fff" : "#707070";

  return (
    <div className={`flip__button flip__button--${textVisible}`} >
      <div className={`flip__text--${textVisible}`}>
        Click to flip
      </div>
      <FlipIcon
        color={iconColor}
        contentType={contentType}
        iconShadow={showLightIcon}
        height={17}
        width={23}
      />
    </div >
  );
}

export default FlipButton;