/** @jsxImportSource @emotion/react */
import { memo } from "react";
import Image from "next/image";
import IndustryOne from "@/assets/IGHomePage/one.png";
import IndustryTwo from "@/assets/IGHomePage/two.png";
import IndustryThree from "@/assets/IGHomePage/three.png";
import IndustryFour from "@/assets/IGHomePage/four.png";
import IndustryFive from "@/assets/IGHomePage/five.png";
import IndustrySix from "@/assets/IGHomePage/six.png";

// Data array for industries
const industries = [
  { image: IndustryOne, title: "Automotive" },
  { image: IndustryTwo, title: " Industrial Manufacturing" },
  { image: IndustryThree, title: "Steel" },
  { image: IndustryFour, title: "Oil & Gas" },
  { image: IndustryFive, title: "Electric Vehicles" },
  { image: IndustrySix, title: "Energy" },
];

// Reusable component for an industry item
const IndustryItem = memo(({ image, title }) => (
  <div className="flex flex-col items-center justify-center align-middle text-center">
    <Image
      src={image}
      alt={title}
      width={190}
      height={172}
      priority={false}
      quality={5}
    />
    <div className="industrytitle">{title}</div>
  </div>
));

const IndustryServed = memo(() => {
  return (
    <div className="mx-auto w-[80%] sm:w-[90%] xs:w-[90%] ssm:w-[90%] md:w-[80%]">
      <div className="captitle">Industries Served</div>
      <div className="grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 ssm:grid-cols-3 md:grid-cols-3 gap-6 justify-center place-items-center align-middle items-center">
        {industries.map(({ image, title }, index) => (
          <IndustryItem key={index} image={image} title={title} />
        ))}
      </div>
    </div>
  );
});

export default IndustryServed;
