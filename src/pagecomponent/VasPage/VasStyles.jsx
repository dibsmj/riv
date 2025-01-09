import { css } from "@emotion/react";
import bg from "@/assets/vas/vas-bg.webp";

const heights = {
  default: "560px",
  mobile: "auto",
  tablet: "1130px",
  desktop: "560px",
};

const VasStyles = () => css`
  .headerbackground {
    position: relative;
    width: 100%;
    margin-bottom: 40px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .headerbackground::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${bg.src}) no-repeat center center;
    background-size: cover;
    opacity: 0.4;
    z-index: -1;
  }

  @media (max-width: 640px) {
    .headerbackground {
      height: ${heights.mobile};
      padding-bottom: 20px;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .headerbackground {
      height: ${heights.tablet};
    }
  }

  @media (min-width: 1025px) {
    .headerbackground {
      height: ${heights.desktop};
    }
  }

  .value-added-service-heading {
    font-family: "Chillax Semibold";
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 70px;
    color: #000000;
  }

  .value-added-service-description {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  .card-title {
    font-family: "Arial";
  }

  .card-button {
    border: 1px solid #20af98;
    border-radius: 17px;
    background: #ffffff;
    color: #20af98;
    font-family: "Chillax semibold";
  }
  .serviceheader {
    font-family: "Chillax semibold";
  }

  .service-description {
    font-family: "Arial";
  }
  @media (max-width: 640px) {
    .value-added-service-description {
      width: 100%;
    }
    .card-container {
      height: 200px; /* Set a fixed height for card containers on small screens */
    }
    .card-icon {
      height: 60%;
    }
    .urbanist {
      font-family: "Urbanist", sans-serif;
    }
    .form-button {
      border: 1px solid #20af98;
      border-radius: 10px;
      background: #ffffff;
      color: #20af98;
    }
    .hidden {
      display: none;
    }
  }
`;

export default VasStyles;
