import { css } from "@emotion/react";
import USFlag from "@/assets/ContactUs/us-f.png";
import Flag1 from "@/assets/ContactUs/f1.png";
import Flag2 from "@/assets/ContactUs/f2.png";
import Flag3 from "@/assets/ContactUs/f3.png";
import Flag4 from "@/assets/ContactUs/f4.png";
import Flag5 from "@/assets/ContactUs/f5.png";
import Flag6 from "@/assets/ContactUs/f6.png";
import IndiaFlag from "@/assets/ContactUs/india-f.png";
import UKFlag from "@/assets/ContactUs/england-f.png";
import Flag7 from "@/assets/ContactUs/f8.png";
import aus from "@/assets/ContactUs/aus.png";

import LaurentGabay from "@/assets/ContactUs/LaurentGabay.png";
import JohnAvinashSrigiri from "@/assets/ContactUs/JohnAvinashSrigiri.png";
import TarangShah from "@/assets/ContactUs/TarangShah.png";
import RahulRaju from "@/assets/ContactUs/RahulRaju.png";
import AkhilSKumar from "@/assets/ContactUs/AkhilSKumar.png";
import PranshuSinha from "@/assets/ContactUs/PranshuSinha.png";

const nameStylesCard1 = css`
  margin-top: 0.2px;
`;

const nameStylesCard2 = css`
  margin-top: 0.2px;
`;
const nameStylesCard3 = css`
  margin-top: 0.2px;
`;

const connectStyles = css`
  a {
    margin-top: -21px;
    margin-bottom: 15px;
  }
`;
const contacts = [
  {
    name: "Laurent Gabay",
    email: "laurent.gabay@rivexa.com",
    linkedinUrl: "https://www.linkedin.com/in/laurent-gabay-b9431b294/",
    cardImage: LaurentGabay,
    country: "United States of America",
    nameStyles: nameStylesCard1,
    countryFlags: [{ img: USFlag }],
    categories: ["Fashion and Home Textiles"],
  },
  {
    name: "John Avinash Srigiri",
    email: "john.srigiri@rivexa.com",
    linkedinUrl: "https://www.linkedin.com/in/john-avinash-srigiri/",
    cardImage: JohnAvinashSrigiri,
    country: "Gulf Cooperation Council",
    nameStyles: nameStylesCard2,
    countryFlags: [
      { img: Flag1 },
      { img: Flag2 },
      { img: Flag3 },
      { img: Flag4 },
      { img: Flag5 },
      { img: Flag6 },
    ],
    categories: ["Fashion and Home Textiles"],
  },
  {
    name: "Tarang Shah",
    email: "tarang.shah@rivexa.com",
    linkedinUrl: "https://www.linkedin.com/in/tarang-s-396697121/",
    cardImage: TarangShah,
    country: "India, UK ,EU and Australia ",
    nameStyles: nameStylesCard3,
    countryFlags: [{ img: IndiaFlag }, { img: UKFlag }, { img: Flag7 } ,{ img: aus }],
    categories: ["Fashion and Home Textiles"],
  },
  {
    name: "Rahul Raju",
    email: "rahul.raju@rivexa.com",
    linkedinUrl: "https://www.linkedin.com/in/rahulr36",
    cardImage: RahulRaju,
    country: "Gulf Cooperation Council",
    nameStyles: nameStylesCard3,
    countryFlags: [
      { img: Flag1 },
      { img: Flag2 },
      { img: Flag3 },
      { img: Flag4 },
      { img: Flag5 },
      { img: Flag6 },
    ],
    categories: ["Industrial Goods"],
  },
  {
    name: "Akhil S Kumar",
    email: "akhil.kumar@rivexa.com",
    linkedinUrl: "https://www.linkedin.com/in/akhil-s-kumar/",
    cardImage: AkhilSKumar,
    country: "India, UK, USA and EU",
    nameStyles: nameStylesCard3,
    countryFlags: [
      { img: IndiaFlag },
      { img: UKFlag },
      { img: Flag7 },
      { img: USFlag },
    ],
    categories: ["Industrial Goods"],
  },

  {
    name: "Pranshu Sinha",
    email: "Pranshu.sinha@mjunction.in",
    linkedinUrl: "https://www.linkedin.com/in/pranshusinha2221",
    cardImage: PranshuSinha,
    country: "",
    nameStyles: nameStylesCard3,
    countryFlags: [],
    categories: ["Value Added Services"],
  },
];

export default contacts;
