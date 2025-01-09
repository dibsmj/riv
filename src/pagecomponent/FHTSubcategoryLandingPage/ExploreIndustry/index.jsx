/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RoundButton from '../../../components/common/RoundButton';
import ExploreIndustryCard from './ExploreIndustryCard';
import { FHTSubcategoryLandingPageStyle } from '../FHTSubcategoryLandingPageStyle';
import ArrowGreen from '../../../assets/CategoryPage/IG/ArrowGreen.svg';

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
}) => <Carousel responsive={responsive}>{children}</Carousel>;

const ExploreIndustry = ({ getExploreIndustry }) => {
  const [isEnquiryOpen, SetIsEnquiryOpen] = useState(true);
  return (
    <div
      className="explore-industry p-9 md:p-0"
      css={() => FHTSubcategoryLandingPageStyle()}
    >
      <div className="explore-industry-title">
        Explore Industries that we cater to...
      </div>
      <div className=" w-[90%] m-auto explore-industry-card-main mt-[4rem]">
        <CarouselSlider data-testid="carousel">
          {getExploreIndustry.map((item, index) => (
            <div className="m-auto" key={item.name}>
              <ExploreIndustryCard
                key={item.name}
                imgSource={item.src}
                industryName={item.name}
              />
            </div>
          ))}
        </CarouselSlider>
      </div>
      <br />
      <div className=" text-center mt-[4rem]">
        <RoundButton
          buttonID={`start_your_journey`}
          title={'Send Enquiry'}
          isEnquiryOpen={isEnquiryOpen}
        />
        {/* <RequestDemo
        name="Send Enquiry"
        className={`requestdemo cursor-pointer inline-flex text-[15px] xs:text-[15px] sm:text-[15px] md:text-xl lg:text-xl`}
        img={ArrowGreen}
      /> */}
      </div>
    </div>
  );
};

ExploreIndustry.propTypes = {
  getExploreIndustry: PropTypes.array.isRequired,
};

export default ExploreIndustry;
