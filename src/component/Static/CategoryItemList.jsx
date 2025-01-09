/** @jsxImportSource @emotion/react */
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useAppSelector } from '../../../redux/hooks';

const responsiveInitial = {
  xl: {
    breakpoint: { max: 3000, min: 1536 },
    items: 4,
    paritialVisibilityGutter: 50,
  },
  lg: {
    breakpoint: { max: 1536, min: 1200 },
    items: 4,
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

const CategoryItemList = ({ ratingList, categories, handleItemClick }) => {
  const { user } = useAppSelector((state) => state.global);
  return (
    <Col className="categorydiv mt-[7rem]">
      <Col md={7} className="categorydRating">
        <div className="categorydRatingDiv grid grid-cols-3">
          {ratingList.map((ratingItem) => (
            <div className="ratingDiv" key={ratingItem.id}>
              <div className="ratingChildOne text-xl lg:text-3xl">
                {ratingItem.rating}
              </div>
              <div className="text-sm lg:text-lg header-text">
                {ratingItem.text}
              </div>
            </div>
          ))}
        </div>
      </Col>

      <Col md={10} className="center-col mt-8">
        <div className="pt-32 pb-5">
          <CarouselSlider data-testid="carousel">
            {categories.map((category, index) => (
              <div
                role="button"
                tabIndex={0}
                className="m-auto w-[328px] h-[492px]"
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
    </Col>
  );
};

CategoryItemList.propTypes = {
  ratingList: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default CategoryItemList;
