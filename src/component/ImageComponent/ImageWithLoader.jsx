/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Img } from "react-image";
import { CircularProgress } from "@mui/material";

const ImageWithLoader = ({ image, alt, classname = "" }) => {
  const z = 0;
  return (
    <Img
      src={image}
      alt={alt}
      loader={<CircularProgress />}
      unloader={<img src="error.jpg" alt="Error" loading="lazy" />}
      className={classname}
    />
  );
};

ImageWithLoader.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default ImageWithLoader;
