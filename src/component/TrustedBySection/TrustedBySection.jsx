/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import LogosList from "./LogosList";
import TrustedBySectionStyles from "./TrustedBySectionStyles";

import Logo1 from "../../assets/FirstPage/logolist/1.webp";
import Logo2 from "../../assets/FirstPage/logolist/2.webp";
import Logo3 from "../../assets/FirstPage/logolist/3.webp";
import Logo4 from "../../assets/FirstPage/logolist/4.webp";
import Logo5 from "../../assets/FirstPage/logolist/5.webp";
import Logo6 from "../../assets/FirstPage/logolist/6.webp";
import Logo7 from "../../assets/FirstPage/logolist/7.webp";
import Logo8 from "../../assets/FirstPage/logolist/8.webp";
import Logo9 from "../../assets/FirstPage/logolist/9.webp";
import Logo10 from "../../assets/FirstPage/logolist/10.webp";
import Logo11 from "../../assets/FirstPage/logolist/11.webp";
import Logo12 from "../../assets/FirstPage/logolist/12.webp";

import Logo13 from "../../assets/FirstPage/logolist/13.webp";
import Logo14 from "../../assets/FirstPage/logolist/14.webp";
import Logo15 from "../../assets/FirstPage/logolist/15.webp";
import Logo16 from "../../assets/FirstPage/logolist/16.webp";
import Logo17 from "../../assets/FirstPage/logolist/17.webp";
import Logo18 from "../../assets/FirstPage/logolist/18.webp";
import Logo19 from "../../assets/FirstPage/logolist/19.webp";
import Logo20 from "../../assets/FirstPage/logolist/20.webp";
import Logo21 from "../../assets/FirstPage/logolist/21.webp";
import Logo22 from "../../assets/FirstPage/logolist/22.webp";
import Logo23 from "../../assets/FirstPage/logolist/23.webp";
import Logo24 from "../../assets/FirstPage/logolist/24.webp";

const logosOneList = [
  { src: Logo1, alt: "Logo1" },
  { src: Logo2, alt: "Logo2" },
  { src: Logo3, alt: "Logo3" },
  { src: Logo4, alt: "Logo4" },
  { src: Logo5, alt: "Logo5" },
  { src: Logo6, alt: "Logo6" },
  { src: Logo7, alt: "Logo7" },
  { src: Logo8, alt: "Logo8" },
  { src: Logo9, alt: "Logo9" },
  { src: Logo10, alt: "Logo10" },
  { src: Logo11, alt: "Logo11" },
  { src: Logo12, alt: "Logo12" },
];

const logosTwoList = [
  { src: Logo13, alt: "Logo13" },
  { src: Logo14, alt: "Logo14" },
  { src: Logo15, alt: "Logo15" },
  { src: Logo16, alt: "Logo16" },
  { src: Logo17, alt: "Logo17" },
  { src: Logo18, alt: "Logo18" },
  { src: Logo19, alt: "Logo19" },
  { src: Logo20, alt: "Logo20" },
  { src: Logo21, alt: "Logo21" },
  { src: Logo22, alt: "Logo22" },
  { src: Logo23, alt: "Logo23" },
  { src: Logo24, alt: "Logo24" },
];

const TrustedBySection = ({
  logosOne = logosOneList,
  logosTwo = logosTwoList,
  title = "mjunction is trusted by",
}) => (
  <div
    css={TrustedBySectionStyles}
    className="w-full shadow-sm border-2 border-solid rounded-lg border-[#c1c1c1] grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ssm:flex md:flex lg:flex"
  >
    <h2 className="w-1/5 xs:w-auto sm:w-auto ssm:w-1/5 md:w-1/5 lg:w-1/5 trustedby flex border-r-2 border-l-0 border-t-0 border-b-0 xs:border-r-0 xs:border-l-0 xs:border-t-0 xs:border-b-2 sm:border-r-0 sm:border-l-0 sm:border-t-0 sm:border-b-2 ssm:border-r-2 ssm:border-l-0 ssm:border-t-0 ssm:border-b-0 md:border-r-2 md:border-l-0 md:border-t-0 md:border-b-0 lg:border-r-2 lg:border-l-0 lg:border-t-0 lg:border-b-0 justify-center items-center align-middle p-[4rem] border-solid border-[#c1c1c1]">
      {title}
    </h2>
    <div className="w-4/5 xs:w-full sm:w-full ssm:w-4/5 md:w-4/5 lg:w-4/5 grid grid-rows-2 overflow-hidden">
      <LogosList logos={logosOne} />
      <LogosList logos={logosTwo} />
    </div>
  </div>
);

TrustedBySection.propTypes = {
  logosOne: PropTypes.array,
  logosTwo: PropTypes.array,
  title: PropTypes.string,
};

export default TrustedBySection;
