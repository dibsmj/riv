import { css } from "@emotion/react";

const heights = {
  default: "560px",
  mobile: "auto",
  tablet: "1130px",
  desktop: "560px",
};

const ContactUsStyles = () => css`
  /* ContactUsStyles.css */
  .contact-container {
    @apply w-full m-auto overflow-hidden;
  }

  .contact-header {
    @apply w-full m-auto justify-center items-center text-center align-middle mt-20;
  }

  .contact-image {
    @apply w-full h-auto;
  }

  .contact-grid {
    @apply flex justify-center mt-10;
  }

  .contact-card {
    @apply relative text-center p-4;
  }

  .contact-card img {
    @apply rounded w-full h-auto;
  }

  .contact-card .overlay {
    @apply absolute inset-0 flex flex-col justify-center items-center;
  }

  .contact-card h3 {
    @apply mt-4 font-semibold text-white;
  }

  .contact-card p,
  .contact-card a {
    @apply text-white;
  }

  .contact-card a {
    @apply text-blue-600;
  }
  .subCategory {
    color: #5d459c;
    font-family: "Arial";
  }
  .fontDesc {
    font-family: "Arial";
  }
  .headerFontTitle {
    font-family: "Chillax Semibold";
    color: #5f5d64;
  }
  .title {
    font-family: "Chillax Semibold";
  }

  .belowHeader {
    font-family: "Arial";
    color: #7a7687;
    weight: 500;
    size: 18px;
    line-height: 21.6px;
  }
  .h3label {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
  }
  .maincarddiv {
    box-sizing: border-box;
    width: 223px;
    height: 300px;
    left: 588px;
    top: 738px;
    background: #ffffff;
    border: 2px solid #d9d9d9;
    border-radius: 20px;
  }
  .activemaincard {
    box-sizing: border-box;
    width: 223px;
    height: 300px;
    left: 588px;
    top: 738px;
    background: #ffffff;
    border: 2px solid #856acf;
    box-shadow: 6px 6px 9.8px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    /* Adjust the max-width as needed */
    .maincarddiv,
    .activemaincard {
      width: 100%; /* Set the smaller width for mobile */
      height: 164px; /* Set the smaller height for mobile */
    }
  }

  .inactivename {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color: #8d8d8d;
  }
  .activename {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color: #4a3587;
  }
  .profileemail {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #8d8d8d;
    mix-blend-mode: normal;
  }
  .profilecountry {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: #8d8d8d;
    mix-blend-mode: normal;
  }
`;

export default ContactUsStyles;
