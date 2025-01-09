/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import SubCategoryStyles from "./SubCategoryStyles";

const MaterialsHandled = ({ title, getData }) => {
  const heights = {
    default: "820px",
    mobile: "820px",
    tablet: "930px",
    desktop: "820px",
  };
  return (
    <div css={() => SubCategoryStyles({ heights })}>
      <div className="materialhandled py-14">
        <h2 className="text-3xl font-bold justify-center items-center text-center align-middle text-[#fff]">
          {title}
        </h2>
        <div className=" relative top-4 m-auto w-[80%] flex flex-row flex-wrap justify-center text-center items-center align-middle gap-5">
          {getData &&
            getData.map((material) => (
              <div className="partnamesub" key={material.id}>
                {material.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

MaterialsHandled.propTypes = {
  title: PropTypes.string.isRequired,
  getData: PropTypes.array.isRequired,
};

export default MaterialsHandled;
