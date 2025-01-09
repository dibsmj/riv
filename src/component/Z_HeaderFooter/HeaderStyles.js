import { css } from '@emotion/react';

const HeaderStyles = css`
  .header-section {
    background: #fff;
  }
  .mentitemtext {
    font-family: 'Chillax Semibold';
    color: #21272a;
    font-size: 16px;
    font-style: normal;
    line-height: 100%;
  }
  .headerloginbtn {
    padding: 9px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 21px;
    border: 1px solid #605dec;
    color: #605dec;
    text-align: center;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .headerdropdown {
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .headerregistration {
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 21px;
    background: #4a3587;
    border: none;
    color: #fff;
    text-align: center;
    font-family: 'Chillax Semibold';
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .MuiAccordion-root {
    position: relative;
    left: -12px;
  }
  .MuiAccordionSummary-button {
    background-color: white;
  }
  .MuiAccordionSummary-button:hover {
    background-color: white;
  }
  .MuiAccordionDetails-root {
    position: relative;
    left: 6px;
  }
  .usermenuicon {
    background: transparent;
  }
  .menu-items-transition {
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
  }

  .menu-items-hidden {
    opacity: 0;
    transform: scale(0.95);
  }

  .menu-items-visible {
    opacity: 1;
    transform: scale(1);
  }
`;

export default HeaderStyles;
