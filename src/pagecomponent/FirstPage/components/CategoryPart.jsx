/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { memo } from "react";
import Image from "next/image";
import RoundButton from "@/component/RoundButton";
import IGImage from "@/assets/FirstPage/ig.webp";
import FHTImage from "@/assets/FirstPage/fht.webp";

const CategoryPart = memo(() => (
  <div className="w-[88%] m-auto ">
    <h2 className="buseinessverticlestext text-center text-[42px] xs:text-[32px] sm:text-[32px] ssm:text-[40px] md:text-[42px] lg:text-[42px]">
      Product Categories
    </h2>
    <div className="businesssubtext text-[24px] xs:text-[20px] sm:text-[20px] ssm:text-[22px] md:text-[24px] lg:text-[24px]">
      Step into the future with rivexa — explore unique offerings in each
      vertical
    </div>
    <div className=" grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[4rem] mt-[2rem]">
      <div className="bg-[#000]">
        <img
          alt={`industrial components sourcing- Rivexa`}
          className={`max-w-full max-h-full flex items-center justify-center align-middle`}
          src={IGImage.src}
        />
        <div className=" p-[1.25rem]">
          <h3 className="categoryhead">Industrial Goods</h3>
          <div className="categorydesc mt-3">
            Unlock customized manufacturing for drawing-based requirements. With
            500+ certified manufacturers across diverse capabilities of casting,
            forging, machining, molding, fabrication and extrusion, our platform
            caters to millions of components.
          </div>
          <div className=" mt-[1rem]">
            <RoundButton
              buttonID={`industrial_goods`}
              title={"Know more"}
              link={`${process.env.NEXT_PUBLIC_APP_ROOT_URL}/industrial-goods`}
            />
          </div>
        </div>
      </div>
      <div className="z-50 bg-[#000]">
        <img
          alt={`fashion and home textile sourcing- Rivexa`}
          className={`max-w-full max-h-full flex items-center justify-center align-middle`}
          src={FHTImage.src}
        />
        <div className=" p-[1.25rem]">
          <h3 className="categoryhead">Fashion & Home Textiles</h3>
          <div className="categorydesc mt-3">
            Bring your unique designs to life with 500+ curated factories,
            experienced in design to production and social, sustainability
            certifications. We cater to 100+ categories in Fashion Apparel &
            Accessories, Home Textile, Workwear & Uniforms.
          </div>
          <div className=" mt-[1rem]">
            <RoundButton
              buttonID={`fashion_home_textiles`}
              title={"Know more"}
              link={`${process.env.NEXT_PUBLIC_APP_ROOT_URL}/fashion-and-textiles`}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default CategoryPart;
