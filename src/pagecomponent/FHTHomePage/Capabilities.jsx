import Link from "next/link";
import { memo, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const capabilitiesData = [
  {
    title: "Women's Apparel",
    description:
      "Experience our expertise and connect with India’s finest exporters delivering complete sourcing solutions",
    bgclassname: `womencap`,
    link: `/fashion-and-textiles/womens-apparel`,
  },
  {
    title: "Men's Apparel",
    description:
      "Partner with our curated and verified Indian manufacturers for custom menswear sourcing",
    bgclassname: `mencap`,
    link: `/fashion-and-textiles/mens-apparel`,
  },
  {
    title: "Uniform & Safety Gears",
    description:
      "Source quality, customized uniforms and safety gear directly from India. Blend branding, comfort, and productivity",
    bgclassname: `uniformcap`,
    link: `/fashion-and-textiles/uniform-and-work-wear`,
  },
  {
    title: "Home Textile",
    description:
      "Partner with India, the world’s 2nd largest exporter of finest home textiles",
    bgclassname: `hometextilecap`,
    link: `/fashion-and-textiles/home-textiles`,
  },
  {
    title: "Bags & Accessories",
    description:
      "Collaborate with our verified skilled manufacturers for custom bags and accessories",
    bgclassname: `bagcap`,
    link: `/fashion-and-textiles/bags`,
  },
  {
    title: "Footwear",
    description:
      "Trendsetting styles and craftsmanship. Custom manufacturing, delivered!",
    bgclassname: `shoescap`,
    link: `/fashion-and-textiles/footwear`,
  },
  {
    title: "Leather",
    description:
      "Apparel, footwear, fashion accessories and more. Explore the best of Indian manufacturers for leather goods",
    bgclassname: `leathercap`,
    link: `/fashion-and-textiles/leather`,
  },
  {
    title: "Sleep & Innerwear",
    description:
      "Breathable fabrics, competitive MOQs, highest quality standards made possible by specialized manufacturers.",
    bgclassname: `sleepwearcap`,
    link: `/fashion-and-textiles/sleep-and-innerwear`,
  },
];

const CapabilityCard = ({ title, link, description, bgclassname }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint if needed
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsHovered(true);
    }
  }, [isMobile]);

  return (
    <Link href={link} className="cursor-pointer no-underline">
      <div
        className={`${bgclassname} relative`}
        onMouseEnter={!isMobile ? () => setIsHovered(true) : undefined}
        onMouseLeave={!isMobile ? () => setIsHovered(false) : undefined}
      >
        <div className="capabilitiesnew">
          <div className="p-5">
            {isMobile ? (
              <div className="categorydescription bg-[#000] opacity-100 text-[#fff] p-2 absolute bottom-0 left-0 text-center rounded-[25px] w-[96%] z-10">
                <div>{title}</div>
                <div>{description}</div>
              </div>
            ) : (
              <>
                <div
                  className={`categoryname ${
                    isHovered
                      ? "text-left"
                      : "bg-[#000] opacity-70 text-[#fff] p-2 absolute bottom-0 left-0 text-center rounded-[25px] w-[96%] z-10"
                  }`}
                >
                  {title}
                </div>
                {isHovered && (
                  <div className="categorydescription bg-[#000] opacity-70 text-[#fff] p-2 absolute bottom-0 left-0 text-center rounded-[25px] w-[96%] z-10 animate-fade-up">
                    <div>{description}</div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

const Capabilities = memo(() => {
  return (
    <div className="mx-auto w-[85%] sm:w-[95%] xs:w-[95%] ssm:w-[95%] md:w-[85%]">
      <div className="captitle">Our capabilities</div>
      <div className="capdesc mt-4 text-[2rem] sm:text-[1.5rem] xs:text-[1.5rem] ssm:text-[2rem] md:text-[2rem]">
      Co-piloting your fashion and home textiles sourcing from India’s
      finest manufacturers
      </div>

      {/* For Desktop and Larger Screens */}
      <div className="hidden md:grid mt-6 mx-auto gap-4 grid-cols-3 place-items-center cursor-pointer">
        {capabilitiesData.map(({ link, title, description, bgclassname }) => (
          <CapabilityCard
            key={title}
            title={title}
            link={link}
            description={description}
            bgclassname={bgclassname}
          />
        ))}
      </div>

      {/* For All Screens Below `md` */}
      <div className="block md:hidden mt-6 mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {capabilitiesData
            .reduce((acc, curr, index) => {
              if (index % 2 === 0) acc.push([]);
              acc[acc.length - 1].push(curr);
              return acc;
            }, [])
            .map((slideData, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-4">
                  {slideData.map(
                    ({ link, title, description, bgclassname }) => (
                      <CapabilityCard
                        key={title}
                        title={title}
                        link={link}
                        description={description}
                        bgclassname={bgclassname}
                      />
                    )
                  )}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
});

export default Capabilities;
