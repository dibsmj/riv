import { css } from '@emotion/react';

// colors
export const colors = {
  bluesHeading: '#005CA6',
  primaryBlue: '#4EACE9',
  primaryBlack: '#404040',
  alternateBlack: '#353535',
  secondaryBlack: '#575959',
  primaryBlueDark: '#255BA1',
  secondaryDarkBlue: '#24518A',
  primaryBlueLight: '#E2F0FE',
  secondaryMediumOrange: '#DE702C',
  secondaryDarkOrange: '#CB4F23',
  secondaryLightOrange: '#FBEBD7',

  neutral100: '#E8E8E7',
  neutral200: '#C6C6C6',
  neutral300: '#676767',
  neutral400: '#343839',
  neutral500: '#031016',
  neutral600: '#CEDFF2',
  neutralGrey: '#C2C2C2',
  neutralDarkDarkest: '#1F2024',
  statusGreen: '#59BE79',
  statusRed: '#C02926',
  grayLight: '#8E8E8E',
  gray: '#5C5C5C',
  grayDark: '#1E1E1E',
  gray400: '#B6B6B6',
  successGreen: '#2BB24C',
  primaryWhite: '#FFFFFF',
  primaryWhiteLight: '#F6F6F6',
  // new design colors
  backgroundGradient: 'linear-gradient(0deg, #4A3587 0%, #4A3587 115.07%)',
  shadow: 'rgba(191, 191, 191, 0.50)',
  gradientBlue: '#2166bf',
  themeBlue: '#24518A',
  messageBlue: '#00B0F0',
  progressBarGrey: '#E1E1E1',
  progressBarGreen: '#00A524',
  attachmentBar: '#C5d0DE',
  backgroundBlue: '#0C2F5C',
  backgroundNavy: '#061932',
  primaryBlueTint: '#DFF0FF',
  darkBlack1: '#001117',
  darkBlack2: '#333839',
  mediumGray: '#747474',
  tag: '#017AC7',
  linkBlue: '#1976d2',
};

// buttons
export const button = {
  primary: colors.primaryBlue,
  disabled: colors.neutral200,
  hover: colors.primaryBlueDark,
};

export const primaryButton = {
  position: 'relative',
  cursor: 'pointer',
  fontFamily: 'Arial',
  padding: '1rem',
  background: '#4a3587',
  color: 'white',
  border: '1px',
  borderRadius: '2rem',
  fontWeight: '600',
};

export const secondaryButton = {
  position: 'relative',
  cursor: 'pointer',
  fontFamily: 'Arial',
  padding: '1rem',
  background: '#fff',
  color: '#4A3587',
  border: '1px solid #4A3587',
  borderRadius: '2rem',
  fontWeight: '600',
};

export const primaryButtonDisabled = {
  position: 'relative',
  fontFamily: 'Arial',
  padding: '1rem',
  background: '#B6B6B6',
  color: 'wh',
  border: '1px',
  borderRadius: '2rem',
  fontWeight: '600',
};

export const primaryButtonFlashing = {
  position: 'relative',
  cursor: 'pointer',
  fontFamily: 'Arial',
  padding: '1rem',
  background: '#4a3587',
  color: 'white',
  border: '1px',
  borderRadius: '2rem',
  fontWeight: '600',
};

export const calenderColors = {
  // complete: '#D7FFE3',
  complete: '#59BE79',
  progress: '#255BA1',
  notStarted: '#FFE897',
  delayed: '#CB4F23',
  tnaNotStarted: '#4EACE9',
  underRevision: '#F57C1D',
};

export const progressBarColors = {
  red: '#D83232',
  yellow: '#FFC600',
  green: '#2BB24C',
};

export const attachmentBackGround = {
  viewed: '#D2DDEC',
  default: '#FFFFFF',
};
export const typography = {
  margint05: () => css`
    margin-top: 0.5rem;
  `,
  margint15: () => css`
    margin-top: 1.5rem;
  `,
  margint2: () => css`
    margin-top: 2rem;
  `,
  margint4: () => css`
    margin-top: 4rem;
  `,
  marginb15: () => css`
    margin-bottom: 1.5rem;
  `,
  marginb3: () => css`
    margin-bottom: 3rem;
  `,
  displayTwo: (color) => css`
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.625rem;
    color: ${color || '#000'};
  `,
  heading30700: (color) => css`
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.875rem;
    color: ${color};
  `,
  heading32800: (color) => css`
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.875rem;
    color: ${color};
  `,
  heading36600: (color) => css`
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 3.625rem;
    color: ${color || '#000'};
  `,
  heading36700: (color) => css`
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 3.625rem;
    color: ${color || '#000'};
  `,
  heading32700: (color) => css`
    font-weight: 700;
    font-size: 2rem;
    line-height: 3.625rem;
    color: ${color || '#000'};
  `,
  heading32500: (color) => css`
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.375rem;
    color: ${color || '#000'};
  `,
  body12700: (color) => css`
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: ${color || '#000'};
  `,
  body12500: (color) => css`
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: ${color || '#000'};
  `,
  body11500: (color) => css`
    font-weight: 500;
    font-size: 0.688rem;
    line-height: 0.875rem;
    color: ${color || '#000'};
  `,
  body14700: (color) => css`
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  body14600: (color) => css`
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  body14500: (color) => css`
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  body14400: (color) => css`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  body16400: (color) => css`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  body16500: (color) => css`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
  body16600: (color) => css`
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  body16700: (color) => css`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  body16800: (color) => css`
    font-weight: 800;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  body18500: (color) => css`
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  body18600: (color) => css`
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  body18700: (color) => css`
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  body18800: (color) => css`
    font-weight: 800;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  body20400: (color) => css`
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
  body20500: (color) => css`
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
  body20600: (color) => css`
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
  body20700: (color) => css`
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
  body20800: (color) => css`
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
  body22700: (color) => css`
    font-weight: 700;
    font-size: 1.375rem;
    color: ${color || '#000'};
  `,
  body24600: (color) => css`
    font-weight: 600;
    font-size: 1.5rem;
    color: ${color || '#000'};
  `,
  body40700: (color) => css`
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
  subHead24600: (color) => css`
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    color: ${color || '#000'};
  `,
  subHead24700: (color) => css`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    color: ${color || '#000'};
  `,
  subHead24800: (color) => css`
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    color: ${color || '#000'};
  `,
  subHead28700: (color) => css`
    font-family: 'Chillax Semibold';
    font-size: 1.75rem;
    font-weight: 700;
    color: ${color || '#000'};
  `,
  subHead28800: (color) => css`
    font-size: 1.75rem;
    font-weight: 800;
    color: ${color || '#000'};
  `,
  subHead28400: (color) => css`
    font-size: 1.5rem;
    font-weight: 400;
    color: ${color || '#000'};
  `,
  body48600: (color) => css`
    font-weight: 600;
    font-size: 3rem;
    color: ${color || '#000'};
  `,
  rivexaHeading14600: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  rivexaHeading18700: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaHeading32600: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 600;
    font-size: 2rem;
    color: ${color || '#000'};
  `,
  rivexaHeading32800: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 800;
    font-size: 2rem;
    color: ${color || '#000'};
  `,
  rivexaHeading18600: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,

  rivexaHeading20600: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaHeading20700: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaHeading24700: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 700;
    font-size: 1.5rem;
    color: ${color || '#000'};
  `,
  rivexaHeading30700: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.875rem;
    color: ${color};
  `,
  rivexaBody12500: (color) => css`
    font-family: Arial;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: ${color || '#000'};
  `,
  rivexaBody12700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: ${color || '#000'};
  `,
  rivexaBody14400: (color) => css`
    font-family: Arial;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  rivexaBody14500: (color) => css`
    font-family: Arial;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  rivexaBody14600: (color) => css`
    font-family: Arial;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  rivexaBody16400: (color) => css`
    font-family: Arial;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaBody16500: (color) => css`
    font-family: Arial;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaBody16600: (color) => css`
    font-family: Arial;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaBody16700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaBody16800: (color) => css`
    font-family: Arial;
    font-weight: 800;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaBody18500: (color) => css`
    font-family: Arial;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaBody18700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaBody20500: (color) => css`
    font-family: Arial;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaBody20700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaBody22700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaBody24700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${color || '#000'};
  `,
  rivexaSubHead22800: (color) => css`
    font-weight: 800;
    font-family: 'Chillax Semibold';
    font-size: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaSubHead10400: (color) => css`
    font-weight: 400;
    font-family: 'Chillax Semibold';
    font-size: 0.6rem;
    color: ${color || '#000'};
  `,
  rivexaSubHead14700: (color) => css`
    font-weight: 700;
    font-family: 'Chillax Semibold';
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  rivexaContent16500: (color) => css`
    font-weight: 500;
    font-size: 1rem;
    font-family: Arial;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaHeading14500: (color) => css`
    font-weight: 500;
    font-size: 0.875rem;
    font-family: 'Chillax Semibold';
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaContent14500: (color) => css`
    font-weight: 500;
    font-size: 0.875rem;
    font-family: Arial;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaSubHead24600: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    color: ${color || '#000'};
  `,
  rivexaContent18700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaContent14700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  rivexaHeading16700: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaContent20700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
  rivexaContent20400: (color) => css`
    font-family: Arial;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
  rivexaSubHead18600: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaContent20600: (color) => css`
    font-family: Arial;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
  rivexaContent16400: (color) => css`
    font-family: Arial;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaContent22700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaContent14600: (color) => css`
    font-family: Arial;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  rivexaContent16600: (color) => css`
    font-family: Arial;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaHeading24800: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    color: ${color || '#000'};
  `,
  rivexaContent16700: (color) => css`
    font-family: Arial;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${color || '#000'};
  `,
  rivexaContent18500: (color) => css`
    font-family: Arial;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${color || '#000'};
  `,
  rivexaContent14400: (color) => css`
    font-family: Arial;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${color || '#000'};
  `,
  rivexaSubHeading20800: (color) => css`
    font-family: 'Chillax Semibold';
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${color || '#000'};
  `,
};
