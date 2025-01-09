/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import ImageLazyLoad from "@/component/ImageLazyLoad";
import SamllFeatureStyles from "./SamllFeatureStyles";

const SmallFeature = ({ title, image, description }) => (
  <div css={SamllFeatureStyles}>
    <div className=" text-left">
      <ImageLazyLoad
        alt={title}
        className={`p-3 bg-[#EDEBFB] rounded-2xl`}
        imageSrc={image.src}
      />
      <h3 className="formanufacturedbtext">{title}</h3>
      <div className="formanufacturedbdesc mt-3">{description}</div>
    </div>
  </div>
);
SmallFeature.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SmallFeature;
