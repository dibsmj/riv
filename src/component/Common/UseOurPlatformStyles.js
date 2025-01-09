import { css } from '@emotion/react';

const UseOurPlatformStyles = css`
  .platformlayout {
    display: flex;
    width: 210px;
    height: 210px;
    flex-direction: column;
    align-items: center;
    gap: 33.972px;
    background-color: grey;
  }
  .featurecicle {
    background-size: contain;
    background-repeat: no-repeat;
  }
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

export default UseOurPlatformStyles;
