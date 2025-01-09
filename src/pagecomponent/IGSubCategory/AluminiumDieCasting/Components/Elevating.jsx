/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import ElevatingStyles from "./ElevatingStyles";
import SmallFeature from "@/component/Static/SmallFeature";

import ECommerce from "@/assets/CategoryPage/IG/aluminium/ECommerce.webp";
import Legacy from "@/assets/CategoryPage/IG/aluminium/Legacy.webp";
import Experience from "@/assets/CategoryPage/IG/aluminium/Experience.webp";

const features = [
  {
    id: 1,
    title: "USD 30 bn GMV in FY23",
    image: ECommerce,
    description: `mjunction is India's largest B2B e-commerce platform with transactions of over 30 bn USD and  trusted since 2001`,
  },
  {
    id: 2,
    title: "Promoted by Tata steel and Steel authority of India ltd",
    image: Legacy,
    description: `rivexa, from mjunction, leverages its illustrious parentage, Tata Steel & SAIL's expertise for unparalleled industrial solutions`,
  },
  {
    id: 3,
    title: "Disrupting the Ecosystem",
    image: Experience,
    description:
      "With a vast network of 300k buyers and suppliers, 900+ experts,  and presence in 55+ locations, mjunction is transforming the procurement ecosystem",
  },
];

const Elevating = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div css={ElevatingStyles}>
      <div className="bg-[#4A3587]">
        <div className="w-[88%] m-auto py-2">
          <h2 className="font-['Chillax'] text-[32px] text-primaryWhite">
            A Credible Partner Rooted in Trust and Transparency
          </h2>
          <h3 className="font-['Urbanist'] text-xl font-medium text-primaryWhite">
            {`Learn more about how mjunction revolutionizes procurement with its innovative solutions and industry expertise:`}
          </h3>
          <div className="mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              {features.map((feature, index) => (
                <div
                  className="bg-primaryWhite rounded-2xl p-8"
                  key={feature.id}
                >
                  <SmallFeature
                    title={feature.title}
                    image={feature.image.src}
                    description={feature.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevating;
