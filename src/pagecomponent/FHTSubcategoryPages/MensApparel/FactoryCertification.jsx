import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const CertificationGrid = ({ logos }) => (
  <div className="py-8">
    <h2 className="text-center text-2xl md:text-4xl font-semibold title m-5">
      Our suppliers are certified as fully compliant with
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 px-4 sm:px-10">
      {logos.map((logo, index) => (
        <div
          key={logo.id}
          className={`flex justify-center items-center p-2 sm:p-4 ${
            index >= 5 ? "sm:-mt-24" : ""
          }`}
        >
          <Image
            src={logo.src}
            alt={`Logo ${logo.id}`}
            className="h-28 w-auto sm:h-20 lg:h-52 xl:h-40"
          />
        </div>
      ))}
    </div>
  </div>
);

CertificationGrid.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CertificationGrid;
