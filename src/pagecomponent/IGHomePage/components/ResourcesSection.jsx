/** @jsxImportSource @emotion/react */
import { memo } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { Typography } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Dynamically import CardForBlog component
const CardForBlog = dynamic(() => import("@/component/CardForBlog"), {
  loading: () => <div>Loading...</div>, // Lightweight loading state
  ssr: false,
});

const ResourcesSection = memo(({ blogData }) => {
  return (
    <>
      <div className="cardheader my-[2rem]">
        Learn how Companies are using rivexa to transform their business.
      </div>
      {blogData?.length > 0 && (
        <div className="w-[85%] m-auto">
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
                slidesPerView: 3,
              },
            }}
            className="mySwiperBlog bg-transparent"
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={blog.page_title}>
                <CardForBlog
                  blogType={blog.blog_typename}
                  blogTitle={blog.page_title}
                  blogDesc={blog.page_description}
                  blogImage={blog.blog_image}
                  createdAt={blog.created_at}
                  pageCount={blog.page_hit_count}
                  blogLink={blog.page_link}
                  type={`resources`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className="mt-[2rem] mx-auto text-center">
        <Typography
          as="a"
          href="/resources"
          className="no-underline hover:border-none"
        >
          <button type="button" className="cardfooterbutton cursor-pointer">
            Read More
          </button>
        </Typography>
      </div>
    </>
  );
});

ResourcesSection.propTypes = {
  blogData: PropTypes.array.isRequired,
};

export default ResourcesSection;
