import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import companyIcon from '../../../assets/T&A/company-icon.png';
import { getSignedUrl } from '../../../utils/S3Service';

const ImageComponent = ({
  src,
  alt,
  defaultWidth,
  defaultHeight,
  width,
  height,
  isBucketSrc,
  className,
}) => {
  const finalWidth = width || defaultWidth;
  const finalHeight = height || defaultHeight;
  const [imgSrc, setimgSrc] = useState('');

  useEffect(() => {
    if (isBucketSrc && src) {
      (async () => {
        try {
          const signedUrl = await getSignedUrl(src);
          setimgSrc(signedUrl);
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, []);

  return (
    <img
      src={(isBucketSrc ? imgSrc : src) || companyIcon}
      alt={alt}
      className={className}
      loading="lazy"
      style={{ width: `${finalWidth}rem`, height: `${finalHeight}rem` }}
    />
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  defaultWidth: PropTypes.number,
  defaultHeight: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  isBucketSrc: PropTypes.bool,
  className: PropTypes.any,
};

ImageComponent.defaultProps = {
  defaultWidth: 3.68,
  defaultHeight: 3.68,
  width: null,
  height: null,
  isBucketSrc: false,
  className: '',
};

export default ImageComponent;
