/** @jsxImportSource @emotion/react */
import { memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import HeaderSliderCard from "@/component/HeaderSliderCard";

const HeaderSlider = memo(() => {
  // const [workerResult, setWorkerResult] = useState(null);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const worker = new Worker(
  //       new URL("../../../utils/worker.js", import.meta.url)
  //     );
  //     worker.postMessage({ num1: 5, num2: 3 });
  //     worker.onmessage = (event) => {
  //       setWorkerResult(event.data.result);
  //       worker.terminate();
  //     };
  //     worker.onerror = (error) => {
  //       console.error("Worker error: ", error);
  //       worker.terminate();
  //     };
  //   }
  // }, []);

  return (
    <div className=" mx-auto !w-full sm:min-h-[28.125rem] xs:min-h-[28.125rem] ssm:min-h-[28.125rem] md:min-h-[31.25rem] lg:min-h-[31.25rem] xl:min-h-[31.25rem]">
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
        <SwiperSlide>
          <HeaderSliderCard
            className={`sliderOne`}
            showLogo={true}
            titleColor={`#4a3587`}
            subTitleColor={`#856acf`}
            infoDataColor={`#4a3587`}
            title={`Co-pilot your sourcing journey with India’s leading B2B e-Marketplace`}
            subTitle={`We enable seamless end-to-end sourcing for custom manufactured goods from physically verified and certified manufacturers.`}
            infoData={[
              {
                name: "Verified Manufacturers",
                value: 1000,
                sign: "+",
              },
              {
                name: "Registered Buyers",
                value: 100,
                sign: "+",
              },
              {
                name: "Active Enquiries",
                value: 500,
                sign: "+",
              },
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderCard
            className={`sliderTwo`}
            showLogo={false}
            titleColor={`#fff`}
            subTitleColor={`#fff`}
            infoDataColor={`#fff`}
            title={`Precision Engineering at Scale`}
            subTitle={`From casting to fabrication, we deliver industrial excellence`}
            infoData={[
              {
                name: "Verified Manufacturers",
                value: 500,
                sign: "+",
              },
              {
                name: "Materials Processed",
                value: 15,
                sign: "+",
              },
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderCard
            className={`sliderThree`}
            showLogo={false}
            titleColor={`#4a3587`}
            subTitleColor={`#856acf`}
            infoDataColor={`#4a3587`}
            title={`Weaving Global Connections`}
            subTitle={`Sourcing premium Indian textiles for fashion and home decor worldwide`}
            infoData={[
              {
                name: "Verified Textile Manufacturers",
                value: 500,
                sign: "+",
              },
              {
                name: "Textile Varieties",
                value: 1000,
                sign: "+",
              },
            ]}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
});

export default HeaderSlider;
