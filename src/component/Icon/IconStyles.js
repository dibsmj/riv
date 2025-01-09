import { css } from '@emotion/react';

const IconStyle = (isSelected, isSuccess, isDefault, isWhite, isClicked) => css`
  /* filter: invert(14%) sepia(7%) saturate(565%) hue-rotate(145deg)
    brightness(100%) contrast(80%); */
  ${isSelected &&
  'filter: invert(27%) sepia(75%) saturate(640%) hue-rotate(178deg) brightness(98%) contrast(91%);'}
  ${isSuccess &&
  'filter: invert(59%) sepia(6%) saturate(3023%) hue-rotate(87deg) brightness(107%) contrast(99%);'}
  ${isDefault &&
  'filter: invert(43%) sepia(3%) saturate(21%) hue-rotate(329deg) brightness(89%) contrast(85%);'}
  ${isWhite && 'filter: brightness(0) invert(1);'}
  ${isClicked &&
  'filter: invert(24%) sepia(12%) saturate(4359%) hue-rotate(221deg) brightness(94%) contrast(97%);'}
`;

export default IconStyle;
