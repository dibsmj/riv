/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AluminiumAlloy from '@/assets/CategoryPage/IG/aluminium/AluminiumAlloy.webp';
import Crystallization from '@/assets/CategoryPage/IG/aluminium/Crystallization.webp';
import Dimensional from '@/assets/CategoryPage/IG/aluminium/Dimensional.webp';
import InternalQuality from '@/assets/CategoryPage/IG/aluminium/InternalQuality.webp';
import MechanicalProperties from '@/assets/CategoryPage/IG/aluminium/MechanicalProperties.webp';
import SurfaceCrack from '@/assets/CategoryPage/IG/aluminium/SurfaceCrack.webp';

const HoverdCardTabTwo = ({ title, description }) => (
  <div className="absolute top-0 left-0 w-full h-full bg-[#E2D8FF] rounded-lg flex flex-col justify-center items-center text-center">
    <div className="font-bold text-lg md:text-xl lg:text-2xl mb-2">{title}</div>
    <div className="text-sm md:text-base lg:text-lg">{description}</div>
  </div>
);

HoverdCardTabTwo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Tab2Content = () => {
  const cardData = [
    {
      title: 'Aluminium Alloy Composition Analysis',
      description:
        'Utilizing spectrographic analysis, density indexing, and rotary degassing to guarantee the strength, durability, and consistency of the materials used in your products.',
      image: AluminiumAlloy,
    },
    {
      title: 'Surface Crack Inspection',
      description:
        'Checking for cracks on casting surfaces with fluorescence analysis to guarantee a smooth and defect-free surface, enhancing both aesthetic and functional quality.',
      image: SurfaceCrack,
    },
    {
      title: 'Mechanical Properties Testing',
      description:
        'Detecting the mechanical properties of castings with a universal testing machine to confirm that the castings meet the required strength and durability specifications.',
      image: MechanicalProperties,
    },
    {
      title: 'Crystallization Analysis',
      description:
        'Analyzing the crystallization of castings with a metallographic analyzer to enhance the structural integrity and performance of the cast components.',
      image: Crystallization,
    },
    {
      title: 'Internal Quality Detection',
      description:
        'Detecting internal quality issues with X-ray flaw detectors to ensure the reliability and safety of the components by identifying hidden defects.',
      image: InternalQuality,
    },
    {
      title: 'Dimensional Accuracy Verification',
      description:
        'Checking the dimensions of castings with calipers, height rulers, and Coordinate Measuring Machines (CMM) to ensure precise and accurate dimensions, facilitating perfect fit and function in your applications.',
      image: Dimensional,
    },
  ];
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div className="px-5">
      <div className="tabOneTitle">Comprehensive quality assurance</div>
      <div className="tabTwoDescription">
        We ensure that our suppliers have the capability to deliver the highest
        quality standards through rigorous quality assurance and monitoring
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {cardData.map((card, index) => (
          <div
            key={card.title}
            className="relative cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-full h-0 pb-[100%] relative">
              <img
                src={card.image.src}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[black] opacity-40 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center p-5">
                <div className="font-bold text-3xl text-[#fff] text-left">
                  {card.title}
                </div>
              </div>
              {hoveredCard === index && (
                <HoverdCardTabTwo
                  title={card.title}
                  description={card.description}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab2Content;
