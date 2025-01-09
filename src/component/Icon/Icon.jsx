/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import IconStyle from "./IconStyles";

const Icon = ({
  icon,
  isSelected = false,
  isSuccess = false,
  isDefault = false,
  isWhite = false,
  isClicked = false,
  className = "",
  alt = "",
}) => (
  <img
    data-testid="icon"
    src={icon}
    alt={alt}
    css={() => IconStyle(isSelected, isSuccess, isDefault, isWhite, isClicked)}
    className={className}
    loading="lazy"
  />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isDefault: PropTypes.bool,
  isWhite: PropTypes.bool,
  isClicked: PropTypes.bool,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Icon;
