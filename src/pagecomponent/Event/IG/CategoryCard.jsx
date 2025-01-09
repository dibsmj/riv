import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const CategoryCard = ({ image, name, className, link }) => {
  const z = 0;
  return (
    <a href={link} className=" no-underline border-none">
      <div className="relative">
        <Image alt={name} className={`rounded-lg w-full h-full`} src={image} />
        <div className={className}>
          <h3 className="categoryfootertext justify-center items-center align-middle text-center mt-[10px] font-extrabold">
            {name}
          </h3>
        </div>
      </div>
    </a>
  );
};

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CategoryCard;
