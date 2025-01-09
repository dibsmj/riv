import { css } from '@emotion/react';

export const menStyles = () => css`
  .headerbackground {
    width: 100%;
    margin-button: 40px;
    overflow: hidden;
    flex-shrink: 0;
    background-size: cover;
  }
  .button-container {
    justify-content: start;
    gap: 10px;
    margin-top: 10px;
  }

  .button-first {
    color: #ffffff;
    background-color: #4a3587;
    width: auto;
    height: auto;
    top: 513px;
    left: 64px;
    width: auto;
    padding: 16px 32px;
    gap: 10px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  .button-header {
    color: #ffffff;
    background-color: #20af98;
    height: auto;
    width: auto;
    top: 513px;
    left: 235px;
    padding: 14px 32px;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #20af98;
    font-size: 16px;
    font-weight: bold;
  }

  .button-second {
    color: #20af98;
    background-color: #ffffff;
    height: auto;
    width: auto;
    top: 513px;
    left: 235px;
    padding: 13px 32px;
    gap: 10px;
    font-weight: bold;
    border-radius: 10px;
    border: 3px solid #20af98;
    font-size: 16px;
  }

  .title {
    font-family: Chillax Semibold;
  }

  .desc {
    font-family: Arial;
  }
  /* styles.css or your relevant stylesheet */
  .button-with-border {
    position: absolute;
    bottom: 0.5rem; /* equivalent to bottom-2 in Tailwind */
    left: 0.5rem; /* equivalent to left-2 in Tailwind */
    background-color: transparent;
    color: black;
    padding: 0.25rem 0.75rem; /* equivalent to py-1 px-3 in Tailwind */
    border: 2px solid var(--primaryWhite); /* use the appropriate CSS variable or color code */
    color: var(
      --primaryWhite
    ); /* use the appropriate CSS variable or color code */
    margin-bottom: 1rem; /* equivalent to mb-4 in Tailwind */
  }
`;
