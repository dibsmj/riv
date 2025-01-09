/** @jsxImportSource @emotion/react */
import { memo, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IGCategoryImage from "@/assets/Home/IG-Category.webp";
import FHTCategoryImage from "@/assets/Home/FHT-Category.webp";

// Extract the reusable category card as a separate component
const CategoryCard = ({
  activeCategory,
  setActive,
  category,
  title,
  description,
  imageSrc,
  link,
}) => {
  const isActive = activeCategory === category;

  const handleMouseEnter = useCallback(() => {
    setActive(category);
  }, [category, setActive]);

  const handleMouseLeave = useCallback(() => {
    setActive(null);
  }, [setActive]);

  const router = useRouter();
  const handleClick = () => {
    router.push(link);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        isActive
          ? "categorymainactive transform transition-transform duration-300 hover:scale-105"
          : "categorymaininactive"
      } p-[.75rem]`}
    >
      <h4
        className={`${
          isActive ? " font-semibold" : " font-normal"
        } categorytitle !my-3 flex md:justify-start sm:justify-center xs:justify-center text-[2.25rem] sm:text-[1.25rem] xs:text-[1.25rem] md:text-[2.25rem] tablet:text-[1.25rem] laptop:text-[1.25rem] desktop:text-[2.25rem]`}
      >
        {title}
      </h4>
      <div className={`flex justify-center`}>
        <Image
          src={imageSrc}
          width={546}
          height={296}
          quality={30}
          priority={false}
          alt={`${title} Image`}
          className="max-w-full max-h-full rounded-2xl shadow-xl"
        />
      </div>
      <p
        className={`categorytext`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <button
        onClick={handleClick}
        className={`flex md:m-0 sm:m-auto xs:m-auto ${
          isActive
            ? "bg-[#4a3587] text-primaryWhite learnmoreactive"
            : "bg-primaryWhite text-primaryBlack learnmore"
        } border-none px-5 py-2 cursor-pointer`}
      >
        Learn More
      </button>
    </div>
  );
};

const CategorySection = memo(() => {
  const [activeCategory, setActive] = useState(null);

  return (
    <div className="m-auto">
      <h2 className="productCategories !my-5 text-[2.5rem] sm:text-[1.75rem] xs:text-[1.75rem] ssm:text-[2rem] md:text-[2.5rem] sm:text-center xs:text-center ssm:text-left md:text-left lg:text-left xl:text-left">
        Product Categories
      </h2>
      <div className="grid mx-0 xs:mx-5 sm:mx-5 ssm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ssm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-[2rem]">
        <CategoryCard
          activeCategory={activeCategory}
          setActive={setActive}
          category="ig"
          title="Industrial Goods"
          description="Unlock customized manufacturing for drawing-based requirements. With 500+ certified manufacturers across diverse capabilities of <b>Casting, Forging, Machining, Molding, Fabrication and Extrusion,</b> our platform caters to millions of components."
          imageSrc={IGCategoryImage}
          link={`/industrial-goods`}
        />
        <CategoryCard
          activeCategory={activeCategory}
          setActive={setActive}
          category="fht"
          title="Fashion & Home Textile"
          description="Bring your unique designs to life with 500+ curated factories, experienced in design to production and social, sustainability certifications. We cater to 100+ categories in <b>Fashion Apparel & Accessories, Home Textile, Workwear & Uniforms.</b>"
          imageSrc={FHTCategoryImage}
          link={`/fashion-and-textiles`}
        />
      </div>
    </div>
  );
});

export default CategorySection;
