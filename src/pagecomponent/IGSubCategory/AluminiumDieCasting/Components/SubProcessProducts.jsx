/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SubProcessProductsStyles from './SubProcessProductsStyles';

const processes = [
  {
    name: 'Sandblasted',
    description:
      'Adds a uniform matte texture and removes surface imperfections.',
  },
  {
    name: 'Deburred',
    description: 'Smooths out rough edges for a clean finish',
  },
  {
    name: 'Anodised',
    description:
      'Corrosion resistant and adds a decorative touch with this durable finish.',
  },
  {
    name: 'Powder Coated',
    description:
      'A robust, attractive finish that protects against wear and tear.',
  },
  {
    name: 'Machined',
    description:
      'Ensure precision and functionality with additional machining services.',
  },
  {
    name: 'Electro Plated',
    description:
      'Add a layer of metal for improved appearance and corrosion protection.',
  },
  {
    name: 'Painted',
    description:
      'Customize your products with a variety of colors and finishes.',
  },
  {
    name: 'Printed',
    description:
      'Printed: Apply detailed logos, labels, and designs directly onto your products.',
  },
];
const ServiceCard = ({
  title,
  description,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className="relative p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="partnamesub">{title}</div>
    {isHovered ? (
      <div className="absolute rounded-lg top-0 left-0 w-full h-full bg-[#4A3587] text-center p-2 flex flex-col justify-center items-center align-middle">
        <div className="productTitle">{title}</div>
        <div className="productdescription">{description}</div>
      </div>
    ) : (
      <div
        className={`absolute bottom-1 xs:bottom-0 sm:bottom-0 ssm:bottom-0 md:bottom-[.1rem] lg:bottom-[.1rem] left-0 h-12 w-full categoryfooter m-auto`}
      />
    )}
  </div>
);
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isHovered: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

const SubProcessProducts = ({ title }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div css={SubProcessProductsStyles} className="mb-10">
      <div className="materialhandled">
        <h2 className="text-3xl font-bold text-center text-[#09384D]">
          {title}
        </h2>
        <h3 className="font-['Urbanist'] text-[#859CA5] text-xl text-center">
          Our manufacturing partners offer a comprehensive selection of finishes
          to elevate the quality and appearance of your die casted products.
          Choose from the following options:
        </h3>
        <div className="top-4 mx-auto w-[80%] flex flex-wrap justify-center text-center items-center gap-5">
          {processes.map((process, index) => (
            <ServiceCard
              key={process.name}
              title={process.name}
              description={process.description}
              isHovered={hoveredItem === index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

SubProcessProducts.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubProcessProducts;
