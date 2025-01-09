/** @jsxImportSource @emotion/react */
import { memo } from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const HeaderSliderCard = dynamic(() => import("@/component/HeaderSliderCard"));
const Breadcrumb = dynamic(
  () => import("@/pagecomponent/BlogPages/components/Breadcrumb"),
  {
    ssr: false,
  }
);

const HeaderSlider = memo(({ breadcrumbItems, slides }) => {
  return (
    <div className="relative mx-auto !w-full sm:min-h-[450px] xs:min-h-[450px] ssm:min-h-[450px] md:min-h-[500px] lg:min-h-[500px] xl:min-h-[500px] bg-primaryWhite">
      {breadcrumbItems && (
        <div className="absolute top-6 left-[3rem] sm:left-[.65rem] xs:left-[.65rem] ssm:left-[3rem] z-50">
          <Breadcrumb
            items={breadcrumbItems}
            color="#FFFFFF"
            activeColor="#ffffff"
          />
        </div>
      )}
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiperHeader"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeaderSliderCard
              className={slide.className}
              showLogo={slide.showLogo}
              titleColor={slide.titleColor}
              subTitleColor={slide.subTitleColor}
              infoDataColor={slide.infoDataColor}
              bgColor={slide.bgColor}
              title={slide.title}
              subTitle={slide.subTitle}
              infoData={slide.infoData}
              customText={slide.customText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default HeaderSlider;
