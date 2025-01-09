import React from "react";
import { SUSTAINABLE_FASHION_DATA } from "./SustainabiltyContent";
import connect1 from "@/assets/CategoryPage/FHT/FHTSubcategory/Sustainability/connect1.png";
import connect2 from "@/assets/CategoryPage/FHT/FHTSubcategory/Sustainability/connect2.png";

const strokes = [connect1.src, connect2.src, connect1.src];

const SustainableFashion = () => {
  return (
    <div className="bg-[#E2D8FF] p-8 text-center">
      <h2 className="text-[32px] font-bold mb-16 text-[#09384D] mt-4 title">
        Sustainable fashion sourcing delivers...
      </h2>
      <div className="flex items-center justify-center flex-wrap">
        {SUSTAINABLE_FASHION_DATA.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center md:max-w-[8rem] sm:max-w-xs">
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold -mt-2 text-[#2A3342] desc">
                {item.title}
              </h3>
              <p className="text-[16px] text-gray-600 mb-4 -mt-2 text-[#556987] desc w-[100%]">
                {item.description}
              </p>
            </div>
         
            {index < SUSTAINABLE_FASHION_DATA.length - 1 && (
              <img
                src={strokes[index]}
                alt="Decorative stroke"
                className="hidden sm:block w-40 h-auto mx-4 -mt-20" 
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SustainableFashion;
