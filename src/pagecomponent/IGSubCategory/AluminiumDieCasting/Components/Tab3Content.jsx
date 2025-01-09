/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import React, { useState } from "react";
import ImageLazyLoad from "@/component/ImageLazyLoad";
import TabThreeCardOne from "@/assets/CategoryPage/IG/aluminium/cardOneTab.webp";
import TabThreeCardTwo from "@/assets/CategoryPage/IG/aluminium/cardTwoTab.webp";
import TabThreeCardThree from "@/assets/CategoryPage/IG/aluminium/cardThreeTab.webp";

const Card = ({ title, description, imageSrc, alt }) => (
  <div className="max-w-sm p-4 bg-white shadow-lg rounded-lg flex flex-col">
    <div className="text-left flex-grow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600 h-20">{description}</p>
    </div>
    <div className="mt-4">
      <ImageLazyLoad
        imageSrc={imageSrc.src}
        alt={alt}
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Tab3Content = () => {
  const cardData = [
    {
      title: "Logistics Partners with Delivery Tracking",
      description:
        "Enjoy peace of mind with reliable delivery tracking through our trusted logistics.",
      imageSrc: TabThreeCardOne,
      alt: "Logistics Partners with Delivery Tracking",
    },
    {
      title: "Complete Visibility and Transparency",
      description:
        "Discover full transparency using an online RFx process, multiple supplier quotes, bid management, contract signing, and collaboration tools.",
      imageSrc: TabThreeCardTwo,
      alt: "Complete Visibility and Transparency",
    },
    {
      title: "Time and Action Management",
      description:
        "Stay on track with real-time updates and ensure your projects meet deadlines.",
      imageSrc: TabThreeCardThree,
      alt: "Time and Action Management",
    },
  ];
  return (
    <div className="px-5">
      <div className="tabOneTitle">Robust supply chain management</div>
      <div className="tabTwoDescription">
        From last-mile delivery to customs clearance, we ensure that items
        arrive at their destination quickly and securely
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {cardData.map((card, index) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc.src}
            alt={card.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Tab3Content;
