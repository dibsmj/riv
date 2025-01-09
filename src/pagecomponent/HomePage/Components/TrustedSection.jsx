/** @jsxImportSource @emotion/react */
import { memo } from "react";
import LogosList from "@/component/TrustedBySection/LogosList";

import Logo1 from "@/assets/FirstPage/logolist/1.webp";
import Logo2 from "@/assets/FirstPage/logolist/2.webp";
import Logo3 from "@/assets/FirstPage/logolist/3.webp";
import Logo4 from "@/assets/FirstPage/logolist/4.webp";
import Logo5 from "@/assets/FirstPage/logolist/5.webp";
import Logo6 from "@/assets/FirstPage/logolist/6.webp";
import Logo7 from "@/assets/FirstPage/logolist/7.webp";
import Logo8 from "@/assets/FirstPage/logolist/8.webp";
import Logo9 from "@/assets/FirstPage/logolist/9.webp";
import Logo10 from "@/assets/FirstPage/logolist/10.webp";
import Logo11 from "@/assets/FirstPage/logolist/11.webp";
import Logo12 from "@/assets/FirstPage/logolist/12.webp";

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

const TrustedSection = memo(() => {
  return (
    <div>
      <h2 className="journeyheadertitle !my-0  text-[2.25rem] sm:text-[1.5rem] xs:text-[1.5rem] md:text-[2.25rem]">
        Trusted By
      </h2>
      <LogosList logos={logosOneList} />
    </div>
  );
});

export default TrustedSection;
