/** @jsxImportSource @emotion/react */
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useAppSelector } from '../../../redux/hooks';
import Arrow from '../../../assets/resources/arrow.svg';

const responsiveInitial = {
  xl: {
    breakpoint: { max: 3000, min: 1536 },
    items: 5,
    paritialVisibilityGutter: 50,
  },
  lg: {
    breakpoint: { max: 1536, min: 1200 },
    items: 5,
    paritialVisibilityGutter: 20,
  },
  md: {
    breakpoint: { max: 1200, min: 900 },
    items: 3,
    paritialVisibilityGutter: 20,
  },
  sm: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    paritialVisibilityGutter: 10,
  },
  xs: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    paritialVisibilityGutter: 20,
  },
};
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
const CarouselSlider = ({
  children,
  responsive = responsiveInitial,
  ...rest
}) => (
  <Carousel className="pb-8 mt-[15px] lg:mt-0" responsive={responsive}>
    {children}
  </Carousel>
);

const ItemSlider = ({
  backGroundColor,
  categories,
  handleItemClick,
  footer,
  textHeader,
  btnText,
  urlLink,
}) => {
  const { user } = useAppSelector((state) => state.global);
  return (
    <Col
      style={{ backgroundColor: `${backGroundColor}` }}
      className="justify-center align-middle mt-[3rem]"
    >
      <Col md={10} className="center-col">
        <div className="pt-14 pb-5">
          <CarouselSlider data-testid="carousel">
            {categories.map((category, index) => (
              <div
                role="button"
                tabIndex={0}
                className="m-auto w-[220px] h-[300px]"
                key={category.id}
                // onClick={() => handleItemClick(category.id)}
                // onKeyDown={() => handleItemClick(category.id)}
              >
                <img
                  src={category.image}
                  alt="CategoryOne"
                  className="imageClass"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  loading="lazy"
                />
                <div className="header-text text-primaryBlack text-xl font-semibold d-flex justify-content-center items-center text-center mt-2">
                  {category.text}
                </div>
              </div>
            ))}
          </CarouselSlider>
        </div>
      </Col>
      {footer === '1' && (
        <Col
          md={10}
          className="center-col justify-center text-center items-center pb-5 font-[Arial] text-[#000] text-[24px] font-[600]"
        >
          {textHeader}
          <a href={urlLink} className="no-underline">
            <button
              type="button"
              className="whatCanIDo center-col text-center items-center justify-center place-content-center mt-4"
            >
              {btnText}
              <img src={Arrow} alt="" className="ml-1" loading="lazy" />
            </button>
          </a>
        </Col>
      )}
    </Col>
  );
};

ItemSlider.propTypes = {
  backGroundColor: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func.isRequired,
  footer: PropTypes.string.isRequired,
  textHeader: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  urlLink: PropTypes.string.isRequired,
};

export default ItemSlider;
