/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import FHTCategorySectionStyles from "./FHTCategorySectionStyles";
import ImageLazyLoad from "@/component/ImageLazyLoad";
import UnifromImage from "@/assets/CategoryPage/FHT/webp/uniform.webp";
import MenImage from "@/assets/CategoryPage/FHT/webp/men.webp";
import BagImage from "@/assets/CategoryPage/FHT/webp/bag.webp";
import WomenImage from "@/assets/CategoryPage/FHT/webp/women.webp";
import FootImage from "@/assets/CategoryPage/FHT/webp/foot.webp";
import HomeImage from "@/assets/CategoryPage/FHT/webp/home.webp";
import LatherImage from "@/assets/CategoryPage/FHT/webp/Leather.webp";
import SleepImage from "@/assets/CategoryPage/FHT/webp/sleep.webp";
import RightArrow from "@/assets/FirstPage/right.png";
import SustainableOne from "@/assets/CategoryPage/FHT/webp/sustainable-1.webp";
import SustainableTwo from "@/assets/CategoryPage/FHT/webp/sustainable-2.webp";
import SustainableThree from "@/assets/CategoryPage/FHT/webp/sustainable-3.webp";

const CategoryItem = ({
  id,
  className,
  image,
  title,
  description,
  imageClass,
  link,
  showButton = true,
  width,
  height,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const renderContent = () => (
    <div className="absolute bottom-0 left-0 p-5 !text-left">
      <h3 className="categorytitle text-3xl xs:text-xl sm:text-xl ssm:text-xl md:text-2xl lg:text-3xl !text-left animate-fade-up">
        {title}
      </h3>
      {isHovered && (
        <div className="categorydesc mt-2 text-sm md:text-md lg:text-lg animate-fade-up">
          {description}
        </div>
      )}
      {showButton && (
        <div className="mt-2">
          <button type="button" className="vewallbtn cursor-pointer">
            Know More <img src={RightArrow.src} alt="RightArrow" />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div
      key={id}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={link} className="no-underline border-0">
        <div className="relative">
          <ImageLazyLoad
            imageSrc={image.src}
            alt={title}
            className={imageClass}
            width={width}
            height={height}
          />
          {!isHovered && (
            <div className="absolute inset-0 bg-[black] opacity-40" />
          )}
          {isHovered && (
            <div className="absolute inset-0 bg-[black] opacity-60 h-[98%]" />
          )}
          {renderContent()}
        </div>
      </a>
    </div>
  );
};

CategoryItem.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageClass: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

const getcategoriesdata = (category) => {
  const categoriesdata = {
    sustainable: [
      {
        title: `Sustainable Sourcing`,
        description: `Embrace eco-friendly fashion with our ethically made sustainable clothing, designed for a greener future.`,
        link: `/fashion-and-textiles/sustainability`,
        imgaeOne: SustainableOne,
        imgaeTwo: SustainableTwo,
        imgaeThree: SustainableThree,
      },
    ],
    uniform: [
      {
        title: `Uniform & safety gears`,
        description: `Upgrade your branding journey with certified, industry expert manufacturers. `,
        link: `/fashion-and-textiles/uniform-and-work-wear`,
      },
    ],
    womens: [
      {
        title: `Women's Apparel`,
        description: `Concept to manufacturing- we help bring your designs to life.`,
        link: `/fashion-and-textiles/womens-apparel`,
      },
    ],
    mens: [
      {
        title: `Men's Apparel`,
        description: `Experience efficiency in bulk sourcing from India`,
        link: `/fashion-and-textiles/mens-apparel`,
      },
    ],
    footwear: [
      {
        title: `Footwear`,
        description: `Trendsetting styles and superior craftsmanship. Innovate with quality and cost effective manufacturing partners.`,
        link: `/fashion-and-textiles/footwear`,
      },
    ],
    bags: [
      {
        title: `Bag & Accessories`,
        description: `Bring your vision to life with high quality manufacturing from India.`,
        link: `/fashion-and-textiles/bags`,
      },
    ],
    textiles: [
      {
        title: `Home textiles`,
        description: `Quality, design, customization. We offer the best experience in your sourcing journey.`,
        link: `/fashion-and-textiles/home-textiles`,
      },
    ],
    leather: [
      {
        title: `Leather`,
        description: `Build price and quality efficiency from one of the largest exporters of leather goods.`,
        link: `/fashion-and-textiles/leather`,
      },
    ],
    innerwear: [
      {
        title: `Sleep & Innerwear`,
        description: `Breathable fabrics, low MOQ and innovative techniques.`,
        link: `/fashion-and-textiles/sleep-and-innerwear`,
      },
    ],
  };
  return categoriesdata[category] || [];
};

const FHTCategorySection = ({ showButton = true }) => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  return (
    <section css={FHTCategorySectionStyles}>
      <div className="w-[95%] m-auto justify-center items-center text-center align-middle mt-10">
        <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
          <div className="space-y-2">
            <CategoryItem
              id={1}
              className={`flex-1 xs:flex-1 sm:flex-1 ssm:flex-1 md:flex-initial lg:flex-initial relative cursor-pointer`}
              image={
                lastSegment === "uniform-and-work-wear"
                  ? getcategoriesdata("sustainable")[0].imgaeOne
                  : UnifromImage
              }
              title={`${
                lastSegment === "uniform-and-work-wear"
                  ? getcategoriesdata("sustainable")[0].title
                  : getcategoriesdata("uniform")[0].title
              }`}
              description={`${
                lastSegment === "uniform-and-work-wear"
                  ? getcategoriesdata("sustainable")[0].description
                  : getcategoriesdata("uniform")[0].description
              }`}
              imageClass={`object-cover max-w-full max-h-full `}
              link={`${
                lastSegment === "uniform-and-work-wear"
                  ? getcategoriesdata("sustainable")[0].link
                  : getcategoriesdata("uniform")[0].link
              }`}
              showButton={showButton}
              width={410}
              height={242}
            />
            <CategoryItem
              id={2}
              className={`flex-1 xs:flex-1 sm:flex-1 ssm:flex-1 md:flex-initial lg:flex-initial relative cursor-pointer`}
              image={
                lastSegment === "womens-apparel"
                  ? getcategoriesdata("sustainable")[0].imgaeTwo
                  : WomenImage
              }
              title={`${
                lastSegment === "womens-apparel"
                  ? getcategoriesdata("sustainable")[0].title
                  : getcategoriesdata("womens")[0].title
              }`}
              description={`${
                lastSegment === "womens-apparel"
                  ? getcategoriesdata("sustainable")[0].description
                  : getcategoriesdata("womens")[0].description
              }`}
              imageClass={`object-cover max-w-full max-h-full`}
              link={`${
                lastSegment === "womens-apparel"
                  ? getcategoriesdata("sustainable")[0].link
                  : getcategoriesdata("womens")[0].link
              }`}
              showButton={showButton}
              width={410}
              height={373}
            />
          </div>
          <div className="space-y-2">
            <CategoryItem
              id={3}
              className={`flex-1 xs:flex-1 sm:flex-1 ssm:flex-1 md:flex-initial lg:flex-initial relative cursor-pointer`}
              image={
                lastSegment === "mens-apparel"
                  ? getcategoriesdata("sustainable")[0].imgaeTwo
                  : MenImage
              }
              title={`${
                lastSegment === "mens-apparel"
                  ? getcategoriesdata("sustainable")[0].title
                  : getcategoriesdata("mens")[0].title
              }`}
              description={`${
                lastSegment === "mens-apparel"
                  ? getcategoriesdata("sustainable")[0].description
                  : getcategoriesdata("mens")[0].description
              }`}
              imageClass={`object-cover max-w-full max-h-full`}
              link={`${
                lastSegment === "mens-apparel"
                  ? getcategoriesdata("sustainable")[0].link
                  : getcategoriesdata("mens")[0].link
              }`}
              showButton={showButton}
              width={410}
              height={373}
            />
            <CategoryItem
              id={4}
              className={`flex-1 xs:flex-1 sm:flex-1 ssm:flex-1 md:flex-initial lg:flex-initial relative cursor-pointer`}
              image={
                lastSegment === "footwear"
                  ? getcategoriesdata("sustainable")[0].imgaeOne
                  : FootImage
              }
              title={`${
                lastSegment === "footwear"
                  ? getcategoriesdata("sustainable")[0].title
                  : getcategoriesdata("footwear")[0].title
              }`}
              description={`${
                lastSegment === "footwear"
                  ? getcategoriesdata("sustainable")[0].description
                  : getcategoriesdata("footwear")[0].description
              }`}
              imageClass={`object-cover max-w-full max-h-full`}
              link={`${
                lastSegment === "footwear"
                  ? getcategoriesdata("sustainable")[0].link
                  : getcategoriesdata("footwear")[0].link
              }`}
              showButton={showButton}
              width={410}
              height={242}
            />
          </div>
          <div className="space-y-2">
            <CategoryItem
              id={5}
              className={`flex-1 xs:flex-1 sm:flex-1 ssm:flex-1 md:flex-initial lg:flex-initial relative cursor-pointer`}
              image={
                lastSegment === "bags"
                  ? getcategoriesdata("sustainable")[0].imgaeOne
                  : BagImage
              }
              title={`${
                lastSegment === "bags"
                  ? getcategoriesdata("sustainable")[0].title
                  : getcategoriesdata("bags")[0].title
              }`}
              description={`${
                lastSegment === "bags"
                  ? getcategoriesdata("sustainable")[0].description
                  : getcategoriesdata("bags")[0].description
              }`}
              imageClass={`object-cover max-w-full max-h-full`}
              link={`${
                lastSegment === "bags"
                  ? getcategoriesdata("sustainable")[0].link
                  : getcategoriesdata("bags")[0].link
              }`}
              showButton={showButton}
              width={410}
              height={242}
            />
            <CategoryItem
              id={6}
              className={`flex-1 xs:flex-1 sm:flex-1 ssm:flex-1 md:flex-initial lg:flex-initial relative cursor-pointer`}
              image={
                lastSegment === "home-textiles"
                  ? getcategoriesdata("sustainable")[0].imgaeTwo
                  : HomeImage
              }
              title={`${
                lastSegment === "home-textiles"
                  ? getcategoriesdata("sustainable")[0].title
                  : getcategoriesdata("textiles")[0].title
              }`}
              description={`${
                lastSegment === "home-textiles"
                  ? getcategoriesdata("sustainable")[0].description
                  : getcategoriesdata("textiles")[0].description
              }`}
              imageClass={`object-cover max-w-full max-h-full`}
              link={`${
                lastSegment === "home-textiles"
                  ? getcategoriesdata("sustainable")[0].link
                  : getcategoriesdata("textiles")[0].link
              }`}
              showButton={showButton}
              width={410}
              height={373}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
          <CategoryItem
            id={7}
            className={`flex-1 xs:flex-1 sm:flex-1 ssm:flex-1 md:flex-initial lg:flex-initial relative cursor-pointer`}
            image={
              lastSegment === "leather"
                ? getcategoriesdata("sustainable")[0].imgaeThree
                : LatherImage
            }
            title={`${
              lastSegment === "leather"
                ? getcategoriesdata("sustainable")[0].title
                : getcategoriesdata("leather")[0].title
            }`}
            description={`${
              lastSegment === "leather"
                ? getcategoriesdata("sustainable")[0].description
                : getcategoriesdata("leather")[0].description
            }`}
            imageClass={`object-cover max-w-full max-h-full`}
            link={`${
              lastSegment === "leather"
                ? getcategoriesdata("sustainable")[0].link
                : getcategoriesdata("leather")[0].link
            }`}
            showButton={showButton}
            width={629}
            height={242}
          />
          <CategoryItem
            id={8}
            className={`flex-1 xs:flex-1 sm:flex-1 ssm:flex-1 md:flex-initial lg:flex-initial relative cursor-pointer`}
            image={
              lastSegment === "sleep-and-innerwear"
                ? getcategoriesdata("sustainable")[0].imgaeThree
                : SleepImage
            }
            title={`${
              lastSegment === "sleep-and-innerwear"
                ? getcategoriesdata("sustainable")[0].title
                : getcategoriesdata("innerwear")[0].title
            }`}
            description={`${
              lastSegment === "sleep-and-innerwear"
                ? getcategoriesdata("sustainable")[0].description
                : getcategoriesdata("innerwear")[0].description
            }`}
            imageClass={`object-cover max-w-full max-h-full`}
            link={`${
              lastSegment === "sleep-and-innerwear"
                ? getcategoriesdata("sustainable")[0].link
                : getcategoriesdata("innerwear")[0].link
            }`}
            showButton={showButton}
            width={629}
            height={242}
          />
        </div>
      </div>
    </section>
  );
};

export default FHTCategorySection;
