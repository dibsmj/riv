/** @jsxImportSource @emotion/react */
"use client";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropTypes from "prop-types";

const ImageLazyLoad = ({
  imageSrc,
  alt = "",
  className = "",
  width = "",
  height = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <LazyLoadImage
      alt={alt}
      rel="preload"
      effect={isLoading ? "blur" : null}
      src={imageSrc}
      delayMethod="debounce"
      delayTime={100}
      onLoad={handleLoad}
      className={className}
      width={width}
      height={height}
      wrapperProps={{
        style: { transitionDelay: "1s" },
      }}
    />
  );
};

ImageLazyLoad.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImageLazyLoad;
