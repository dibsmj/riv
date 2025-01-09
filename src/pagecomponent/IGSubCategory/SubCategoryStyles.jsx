import { css } from '@emotion/react';

const SubCategoryStyles = ({ heights }) => css`
  .headerbackground {
    width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    background-color: #fff;
    background-size: cover;
  }
  .hr {
    border: none;
    border-top: 2px solid black;
    margin: 20px 0;
}
  .headerText {
    color: #2a3342;
    font-family: Chillax Semibold;
    font-style: normal;
    font-weight: 600px;
    line-height: 121.2%;
    text-transform: capitalize;
  }
  
  .headerpara {
    color: #556987;
    margin-top:10px;
    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.32px;
  }
  .button-container {
    justify-content: start;
    gap: 10px;
    margin-top:10px;
  }
  .custom-button-active {
    border-radius: 10px;
    font-family: Arial;
    background-color: #4a3587;
    color: #fff;
    padding: 16px 16px;
    border: solid ;
    border:none;
  }
  .custom-button {
    border-radius: 10px;
    background-color: white;
    color: #20af98;
    padding: 16px 16px;
    border: solid ;
    border-color:#20af98;
    font-family: Arial;
  }
  .image-container {
    width: 595px;
    height: 420px;
    flex-shrink: 0;
  }
  .small-grid {
    width: 100%;
    flex-shrink: 0; 
    border-top: 1px solid #EFF0F6;
    background: #F5F9FE;
  }
  
  @media (max-width: 1440px) {
    .small-grid {
      width: 100%; 
    }
  }
  
  /* Media query for even smaller viewport widths */
  @media (max-width: 768px) {
    .small-grid {
      width: 100%; 
      height: auto; 
    }
  }

  
  .layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10.132px;
    flex: 1 0 0;
    width: 100%; 
    height: auto; 
  }
  
  
  .big-text{
    color: var(--Neutral-10, #486284);
    text-align: center;
    font-family: Arial;
    font-size: 37.993px;
    font-style: normal;
    font-weight: 700;
    line-height: 48.125px; /* 126.667% */
    letter-spacing: 0.317px;
    margin:auto;
  }
  .small-text{
    color: var(--Neutral-7, #8CA2C0);
    text-align: center;
    font-family: Arial;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.263px; /* 155.87% */
    letter-spacing: 0.317px;
    // margin-top:2px;
  }
  
}


//workflow styles

.workflow-image{
    width: 100px;
    height: 100px;
    flex-shrink: 0;
}
.segment {
    display: flex;
    align-items: center;
    padding: 10px;
}

.workflow-image-title{
    color: #2A3342;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Arial;
    //font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
    letter-spacing: -0.48px;
    text-overflow: none;
    justify:centre;
  }

.vector-image{
    width: 270.593px;
    height: 60.264px;
    flex-shrink: 0;
  }

.workflow-image-description{
    color: #556987;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 175%; /* 24.5px */
    letter-spacing: -0.28px;
  }
// casting styles
  .casting-process-layout{
    padding: 100px 112px;
    align-items: center;
    gap: 64px;
    background: #2A3443;
  }
  .casting-process-layout-2{
    width: full;
    flex-direction: column;
    align-items: flex-end;
    background: #2A3443;
  }
  .casting-title{
    color: #fff;
    font-family: Arial;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .casting-description{
    color: #FFF;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  .casting-button{
    display: flex;
    padding: 10px 22px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #20AF98;
    color: #20af98;
    background: #2A3443;
  }
  .categoryfooter {
    border-radius: 0px 0px 15.994px 15.994px;
    background: rgba(238, 238, 238, 0.5);
  }
  .categoryfootertext {
    color: #000;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
  .grid-container {
    margin:auto;
  }
  //materialhandled
  .material-description{
    color: #556987;
    text-align: center;
    font-family: Arial;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.5px;  
  }
  //explore other process styles
  .process-layout{
    width: 170px;
    height: 160px;
    flex-shrink: 0;
    border-radius: 7.2px;
    border: 1.2px solid #7A7878;
    background:#7A7878;
    //background: linear-gradient(0deg, rgba(216, 209, 250, 0.34) 0%, rgba(216, 209, 250, 0.34) 100%),lightgray 21px 0px / 76.667% 82.143% no-repeat;
    }
    .anim-image{
        width: 138px;
        height: 138px;
    }
    .materialhandled {
      background: #2A3443;
    }
    .partnamesub {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 24px 32px;
      gap: 10px;
      background: #ffffff;
      border: 1px solid #D9DBE9;
      box-shadow: 0px 4px 48px -12px rgba(0, 0, 0, 0.12);
      border-radius: 24px;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
    .closebg {
      background: transparent;
    }
`;

export default SubCategoryStyles;
