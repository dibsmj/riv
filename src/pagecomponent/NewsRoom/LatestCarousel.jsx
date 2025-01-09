import React from "react";
import PropTypes from "prop-types";
import BlogResources from "@/component/BlogResources";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const LatestCarousel = ({ searchQuery, getBlogTypeID, isSlice }) => {
  const blogItems = [0, 1, 2, 3];
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      freeMode={true}
      navigation={true}
      modules={[FreeMode, Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
      className="mySwiperNews bg-transparent"
    >
      {blogItems.length > 0 &&
        blogItems.map((blog, index) => (
          <SwiperSlide key={index}>
            <BlogResources
              key={index}
              blogParentCategory={"news"}
              searchQuery={searchQuery}
              typeID={getBlogTypeID}
              isSlice={!isSlice}
              startIndex={index}
              endIndex={index + 1}
              className=""
              sourceType={"news"}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

LatestCarousel.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  getBlogTypeID: PropTypes.string.isRequired,
  isSlice: PropTypes.bool.isRequired,
};

export default LatestCarousel;
