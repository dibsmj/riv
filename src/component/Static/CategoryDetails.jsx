/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAppSelector } from '../../../redux/hooks';
import EnquiryFromOverLay from './EnquiryFromOverLay';
import { ImageLazyLoad } from '../index';

const CategoryDetails = ({
  imageLarge,
  detais,
  headerText,
  categories,
  fromPage,
}) => {
  const { user } = useAppSelector((state) => state.global);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    // eslint-disable-next-line no-undef
    // document.querySelector('.rct-hl-even').click();
  };
  return (
    <Col md={10} className="center-col">
      <Col md={11} className="center-col">
        <section className="grid grid-cols-1 justify-center items-center text-center align-middle">
          <p className="display-5 fw-bold text-primary header-font">
            {headerText}
          </p>
          <p className="text-[21px] mt-2 header-text">{detais}</p>
        </section>
        <section className="grid grid-cols-1 md:flex lg:flex gap-3 mt-6">
          <div className="image-container">
            <ImageLazyLoad
              alt={`CategoryOne`}
              className={`object-cover h-full w-full`}
              imageSrc={imageLarge}
            />
          </div>
          <div className="text-container" id="enquiryFromLandingPage">
            <EnquiryFromOverLay
              toggleDrawer={toggleDrawer}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              categories={categories}
              fromPage={fromPage}
            />
          </div>
        </section>
      </Col>
    </Col>
  );
};

CategoryDetails.propTypes = {
  imageLarge: PropTypes.string.isRequired,
  detais: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  fromPage: PropTypes.string.isRequired,
};

export default CategoryDetails;
