import { css } from '@emotion/react';

const FooterStyles = css`
  .footerbody {
    background: #f7f8f9;
  }
  .footerlink {
    color: #556987;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }
  .copyright {
    color: #8896ab;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .back-to-top {
    position: fixed;
    bottom: 2.3rem;
    right: 20px;
    /* background-color: #007bff; */
    color: #4a3587;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bolder;
    transition: background-color 0.3s, transform 0.3s;
    z-index: 9999;
  }
`;

export default FooterStyles;
