/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import RoundButton from "@/component/RoundButton";
import ImageLazyLoad from "@/component/ImageLazyLoad";

import CerOne from "@/assets/CategoryPage/IG/aluminium/cerOne.webp";
import CerTwo from "@/assets/CategoryPage/IG/aluminium/cerTwo.webp";
import CerThree from "@/assets/CategoryPage/IG/aluminium/cerThree.webp";
import SellerCardOne from "@/assets/CategoryPage/IG/aluminium/sellerCardOne.webp";
import SellerCardTwo from "@/assets/CategoryPage/IG/aluminium/sellerCardTwo.webp";
import SellerCardThree from "@/assets/CategoryPage/IG/aluminium/sellerCardThree.webp";
import SellerCardFour from "@/assets/CategoryPage/IG/aluminium/sellerCardFour.webp";
import LogosList from "@/component/TrustedBySection/LogosList";

const Tab1Content = () => {
  const [isEnquiryOpen, SetIsEnquiryOpen] = useState(true);
  const certifications = [
    {
      imageSrc: CerOne,
      altText: "CerOne",
      certification: "IATF certification",
    },
    {
      imageSrc: CerTwo,
      altText: "CerTwo",
      certification: "ISO 14001 certification",
    },
    {
      imageSrc: CerThree,
      altText: "CerThree",
      certification: "ISO 9001:2015 certification",
    },
  ];

  const logosOneList = [
    { src: SellerCardOne, alt: "Logo1" },
    { src: SellerCardTwo, alt: "Logo2" },
    { src: SellerCardThree, alt: "Logo3" },
    { src: SellerCardFour, alt: "Logo4" },
  ];

  return (
    <div className="px-2">
      <div className="tabOneTitle">Our category expertise </div>
      <div className="tabTwoDescription">
        Work with 30+ verified suppliers from across India curated specially to
        address your custom manufacturing needs
      </div>
      <div className=" flex flex-row xs:flex-col sm:flex-col ssm:flex-col md:flex-row lg:flex-row">
        <div className="w-[70%] xs:w-full sm:w-full ssm:w-full md:w-[70%] lg:w-[70%] overflow-x-auto">
          <LogosList logos={logosOneList} />
        </div>
        <div className=" w-[30%] xs:w-full sm:w-full ssm:w-full md:w-[30%] lg:w-[30%] grid grid-cols-1 space-y-5 p-4 m-auto justify-center items-center align-middle">
          {certifications.map((cert, index) => (
            <div className="cardOneCertificate flex gap-3 shadow-lg rounded-lg h-[7rem] p-3 items-center">
              <div className="flex-shrink-0">
                <ImageLazyLoad
                  imageSrc={cert.imageSrc.src}
                  alt={cert.altText}
                  className="max-w-full max-h-full"
                />
              </div>
              <div className="flex-1">
                <p className="font-bold font-['Urbanist'] text-left">
                  {cert.certification}
                </p>
              </div>
            </div>
          ))}
          <div className="m-auto">
            <RoundButton
              buttonID={`start_your_journey`}
              title={"Submit Enquiry"}
              isEnquiryOpen={isEnquiryOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1Content;
