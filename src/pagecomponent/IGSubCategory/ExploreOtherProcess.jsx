/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import SubCategoryStyles from "./SubCategoryStyles";

export default function ExploreOtherProcess({ imageUrl, title, link }) {
  const heights = {
    default: "820px",
    mobile: "820px",
    tablet: "930px",
    desktop: "820px",
  };
  return (
    <a
      href={link}
      className="m-auto border-none no-underline"
      css={() => SubCategoryStyles({ heights })}
    >
      <div className="process-layout relative">
        <div className="absolute bottom-4 text-[#fff] left-12 text-center">
          <h3 className=" m-[initial]">{title}</h3>
        </div>
        <div className="process-layout-image m-auto justify-center items-center text-center align-middle">
          <Image alt={title} className={`w-[95%] h-full`} src={imageUrl} />
        </div>
      </div>
    </a>
  );
}

ExploreOtherProcess.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
