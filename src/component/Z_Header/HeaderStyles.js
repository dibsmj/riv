import { css } from "@emotion/react";

const HeaderStyles = css`
  .borderbutton::after {
    content: "";
    height: 3px;
    position: absolute;
    left: -7px;
    right: -7px;
    bottom: -1px;
    border-top: none;
    background: -webkit-linear-gradient(
      to right,
      #1babe2 0%,
      #1babe2 25%,
      #e8c21d 25%,
      #e8c21d 50%,
      #20af98 50%,
      #20af98 75%,
      #db78a1 75%,
      #db78a1 100%
    );
    background: linear-gradient(
      to right,
      #1babe2 0%,
      #1babe2 25%,
      #e8c21d 25%,
      #e8c21d 50%,
      #20af98 50%,
      #20af98 75%,
      #db78a1 75%,
      #db78a1 100%
    );
  }
  .loginbtn {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    color: #4a3587;
    border: none;
    background: #fff;
  }
  .signinicon {
    background: #4a3587;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 44px;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    color: #ffffff;
    border: none;
  }
  .activemenu {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    text-transform: capitalize;
    color: #856acf;
  }
  .menuitemtext {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    color: #3f3f3f;
  }
  .main-menu li:hover .submenu {
    display: block;
  }
  .submenu {
    display: none;
    background-color: #fff;
    list-style-type: none;
    padding: 10px;
    margin: 0;
  }

  .submenu li {
    padding: 10px 15px;
  }
  .active {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
    text-transform: capitalize;
    color: #856acf;
    border-bottom: 2px solid #856acf;
  }
`;

export default HeaderStyles;
