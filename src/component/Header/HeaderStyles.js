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
  .menuitemtext {
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    color: #3f3f3f;
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
  .firstmenu li {
    margin: 10px 0px !important;
  }
  #header {
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav_ico {
    display: block;
    width: 40px;
    cursor: pointer;
  }
  .main_nav {
    float: right;
  }
  .main_nav ul {
    margin: 0;
    padding: 0px;
    list-style: none;
  }
  .main_nav ul li {
    float: left;
    margin: 0 0 0 5px;
    position: relative;
  }
  .main_nav ul li a {
    display: block;
    text-decoration: none;
    padding: 5px 15px;
    transition: all 0.3s ease-out;
  }
  .main_nav ul li label {
    display: block;
    text-decoration: none;
    padding: 5px 15px;
    transition: all 0.3s ease-out;
  }
  .main_nav ul li:hover > a {
    color: #856acf;
  }
  .main_nav ul li i {
    position: absolute;
    right: 0;
    top: 10px;
    color: #fff;
  }
  .main_nav ul li:hover > i {
    color: #0a91da;
  }

  .main_nav ul ul {
    position: absolute;
    left: 0;
    top: calc(100% + 15px);
    white-space: nowrap;
    opacity: 0;
    transition: all 0.3s ease-out;
    pointer-events: none;
    background: #fff;
  }
  .main_nav ul ul li {
    float: none;
    margin: 0;
  }
  .main_nav ul ul li:hover {
    float: none;
    margin: 0;
    border-bottom: 1px solid #fff;
    font-family: "Chillax Variable";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
    text-transform: capitalize;
    color: #ffffff;
  }
  .main_nav > ul > li > ul:after {
    content: "";
    position: absolute;
    bottom: 100%;
    height: 16px;
    width: 100%;
    left: 0;
  }

  .main_nav ul ul ul {
    left: 100%;
    top: -20px;
  }
  .main_nav ul li:hover > ul {
    opacity: 1;
    pointer-events: auto;
  }
  .main_nav ul ul li a {
    background: #fff;
  }
  .main_nav ul li:hover ul li:hover > a {
    background: #fff;
  }
  .main_nav ul ul li i {
    transform: rotate(-90deg);
  }
  .main_nav ul ul li:hover i {
    color: #fff;
  }

  /*This Media Query use for iPad Portrait View*/
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .main_nav ul li {
      margin: 0;
      font-size: 16px;
    }
    .main_nav ul li a {
      padding: 5px 10px;
    }
    .main_nav ul li label {
      padding: 5px 10px;
    }
  }

  @media screen and (min-width: 991px) {
    .nav_ico,
    #menuTrigger {
      display: none;
    }
  }
  /*This Media Query use for Mobile View*/
  @media screen and (max-width: 990px) {
    .nav_ico {
      display: block;
      position: relative;
      z-index: 10;
      color: #fff;
      font-size: 36px;
    }
    .main_nav {
      position: fixed;
      left: 0;
      top: 68px;
      padding: 0;
      background: #fff;
      z-index: 5;
      height: calc(100vh - 74px);
      overflow: auto;
      width: calc(100% - 0px);
      transition: all 0.3s ease-out;
      transform: translateX(100%);
    }
    .main_nav ul li {
      float: none;
      margin: 10px 0px !important;
      padding: 0 !important;
      margin-bottom: 10px;
    }
    .main_nav ul li a {
      display: block;
      color: #000;
      padding: 10px;
    }
    .main_nav ul li label {
      display: block;
      color: #000;
      padding: 10px;
    }
    .main_nav > ul > li:hover > a {
      background: #fff;
    }
    .main_nav ul ul {
      position: static;
      pointer-events: auto;
      opacity: 1;
      height: 0;
      overflow: hidden;
    }
    .main_nav ul ul li a {
      padding-left: 30px;
    }
    .main_nav ul ul ul li a {
      padding-left: 60px;
    }
    .main_nav ul ul ul ul li a {
      padding-left: 90px;
    }
    .main_nav ul li:hover > ul {
      height: auto;
    }
    .main_nav ul li i {
      right: 10px !important;
    }
    .main_nav ul li:hover > i {
      color: #fff;
    }
    .main_nav ul ul li i {
      transform: rotate(0deg);
    }

    #menuTrigger {
      opacity: 0;
      position: fixed;
      width: 0;
      height: 0;
      margin: 0;
      color: white;
    }
    #menuTrigger:checked + .main_nav {
      transform: translateX(0%);
    }
  }
  .arrow {
    display: inline-block;
    margin-left: 8px;
    transform: rotate(0);
    transition: transform 0.3s ease;
  }

  .arrow.active {
    transform: rotate(180deg); /* Rotate arrow when menu is open */
  }
`;
export default HeaderStyles;
