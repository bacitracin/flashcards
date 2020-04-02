import React from 'react';

const FlipIcon = ({
  color,
  height,
  iconShadow,
  width,
}) => {
  return (
    <svg
      aria-hidden={true}
      className={`flip__icon ${iconShadow ? 'flip__icon--shadow' : ''}`}
      height={height || 17}
      role="img"
      title="Flip card icon"
      width={width || 23}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 19.347 8.275 l 1.88 1.714 a 0.727 0.727 0 0 0 0.98 -1.074 l -3.225 -2.941 a 0.727 0.727 0 0 0 -1.027 0.047 l -2.94 3.224 a 0.727 0.727 0 0 0 1.075 0.98 l 1.802 -1.976 a 6.545 6.545 0 0 1 -11.56 4.288 a 0.727 0.727 0 1 0 -1.114 0.935 a 8 8 0 0 0 14.129 -5.197 Z m -16.039 0.162 l -1.79 -1.633 a 0.727 0.727 0 1 0 -0.98 1.074 l 3.223 2.94 c 0.297 0.272 0.757 0.25 1.028 -0.046 l 2.94 -3.224 a 0.727 0.727 0 0 0 -1.075 -0.98 L 4.768 8.636 a 6.545 6.545 0 0 1 11.555 -4.482 a 0.727 0.727 0 1 0 1.114 -0.936 A 8 8 0 0 0 3.308 8.437 Z"
        fill={color}
      />
    </svg>
  );
}

export default FlipIcon;