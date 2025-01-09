import { css } from '@emotion/react';

export const FHTSubcategoryLandingPageStyle = () => css`
  .requestdemo {
    background: #fff;
    padding: 18px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    border: 1px solid #20af98;
    color: #20af98;
    text-align: center;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
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
    padding: 14px 32px;
    gap: 10px;
    border: none;
    border-radius: 10px;
  }

  .button-second {
    color: #20af98;
    background-color: #ffffff;
    height: auto;
    width: auto;
    top: 513px;
    left: 235px;
    padding: 14px 32px;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #20af98;
  }

  .fhtcategory-title {
    font-family: Chillax;
    font-size: 46px;
    font-weight: 700;
    line-height: 55.75px;
    text-align: left;
  }

  .fhtcategory-title-desc {
    color: #4c4a4a;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    letter-spacing: -0.32px;
  }

  .template-box {
    border-radius: 32px;
    background: #fff;
    box-shadow: 0px 17px 62px 0px rgba(2, 6, 12, 0.07);
  }

  .forward-backward {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22.833px;
    height: 22.833px;
    border-radius: 50%;
    box-shadow: -3.806px 3.806px 19.028px 0px rgba(32, 180, 134, 0.12);
  }

  .explore-industry-title {
    color: #2b2b3d;
    text-align: center;
    font-family: Arial;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 64.5px;
  }

  .explore-industry-desc {
    color: #556987;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
  }

  .fht-tab {
    width: auto;
    height: auto;
    // border: 1px solid black;
    border-radius: 32px;
    background: #fff;
    box-shadow: 0px 17px 62px 0px rgba(2, 6, 12, 0.07);
  }

  .fht-tab-name {
    color: var(--Neutral-10, #486284);
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Arial;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 48.125px;
    letter-spacing: 0.317px;
  }

  .fht-tab-desc {
    color: var(--Neutral-7, #8ca2c0);
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Arial;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.263px;
    letter-spacing: 0.317px;
  }

  .appointments {
    background-color: #ecefee;
  }

  .appointments-content-title {
    color: #0f1534;
    font-family: Arial;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.8%;
    letter-spacing: -0.76px;
  }
  .appointments-content-desc {
    color: #556987;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.023%;
  }
  .appointments-content-btn {
    color: white;
    display: flex;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    background: var(--Button-Primary-BG_Default, #4a3587);
  }
  .closebg {
    background: transparent;
  }
  .react-multi-carousel-track {
    background: rgba(75, 75, 75, 0.08);
  }
  .explore-industry-card-main {
    box-shadow: 0px 5px 15px 35px rgba(75, 75, 75, 0.08);
  }
  .react-multiple-carousel__arrow--left {
    background: #4a3587;
  }
  .react-multiple-carousel__arrow--left:hover {
    background: #4a3587;
  }
  .react-multiple-carousel__arrow--right {
    background: #4a3587;
    z-index: 1;
  }
  .react-multiple-carousel__arrow--right:hover {
    background: #4a3587;
  }
`;

export const exploreIndustry = () => css`
  .explore-industry-card {
    padding: 15.2px;
    border-radius: 22.833px;
    background: var(--Gray-White, #fff);
    // box-shadow: 0px 20px 30px 50px rgba(75, 75, 75, 0.08);
  }
`;

export const valueAddedServices = () => css`
  .services-content-title {
    color: #2b2b3d;
    font-family: Arial;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 64.5px;
  }

  .services-content-desc {
    color: #556987;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
  }
  .categoryfooter {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
  }
  .categoryfootertext {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 110%;
    color: #ffffff;
  }
  .value-services-btn {
    color: #ffffff;
    display: flex;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    background: var(--Button-Primary-BG_Default, #4a3587);
  }
  .hoverdtexttitle {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
  }
  .hovertextdescription {
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-edge: cap;
    text-align: center;
    color: #ffffff;
  }
`;

export const useOurPlatForm = () => css`
  .platformtitle {
    color: #4a3587;
    text-align: center;
    font-family: Arial;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .platformdescription {
    color: #5f5f5f;
    text-align: center;
    font-family: Arial;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 29.119px;
  }
`;
