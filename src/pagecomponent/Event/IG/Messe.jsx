"use client";
/** @jsxImportSource @emotion/react */
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import MesseStyles from "./MesseStyles";
import Arrow from "@/assets/resources/arrow.svg";
import Messe from "@/assets/CategoryPage/Event/SteelFab.webp";
import HimadriGhosh from "@/assets/resources/HimadriGhosh.webp";
import RahulRaju from "@/assets/resources/RahulRaju.webp";
import Costing from "@/assets/resources/costing.png";
import Forging from "@/assets/resources/Forging.png";
import Machining from "@/assets/resources/Machining.png";
import Fabrication from "@/assets/resources/Fabrication.png";
import Extrusion from "@/assets/resources/Extrusion.png";
import Assembly from "@/assets/resources/Assembly.png";

const EnquriyForm = dynamic(() => import("@/component/Enquiry/EnquriyForm"), {
  ssr: false,
});
const CategoryExperts = dynamic(
  () => import("@/component/Common/CategoryExperts"),
  {
    ssr: false,
  }
);
const CountDownTimmer = dynamic(
  () => import("@/component/Static/CountDownTimmer"),
  {
    ssr: false,
  }
);

const PoweringProcurement = dynamic(
  () => import("@/pagecomponent/IGHomePage/components/PoweringProcurement"),
  {
    ssr: false,
  }
);

const IGLandingPage = () => {
  const heights = {
    default: "720px",
    mobile: "1300px",
    tablet: "500px",
    desktop: "720px",
  };
  const ratingList = [
    {
      id: "1",
      rating: "Venue",
      text: "Hall 4, Expo Centre Sharjah, UAE",
    },
    {
      id: "2",
      rating: "Date & Time",
      text: "January 13–16, 2025",
    },
    {
      id: "3",
      rating: "Booth No",
      text: "5020",
    },
  ];

  return (
    <main>
      <div css={() => MesseStyles({ heights })}>
        <div className="headerbackground relative">
          <div className=" flex flex-row xs:grid sm:grid ssm:flex md:flex lg:flex xs:grid-cols-1 sm:grid-cols-1">
            <div className="w-[65%] xs:w-[100%] sm:w-[100%]  ssm:w-[80%] md:w-[65%] lg:w-[65%] flex-1 m-auto relative top-14 left-0">
              <div className="m-10 xs:m-4 sm:m-4 md:m-20 lg:m-12">
                <div className="headertextsection p-8 xs:p-4 sm:p-4 md:p-8 lg:p-8 relative -top-14 xs:top-1 sm:top-1 ssm:-top-14 md:-top-14 lg:-top-14 xl:-top-14">
                  <h1 className="igtext relative justify-start text-5xl xs:text-[2.5rem] sm:text-[2.5rem] ssm:text-3xl md:text-4xl lg:text-5xl">
                    SteelFab - 2025
                  </h1>
                  <div className="igsubtext mt-4 xs:mt-2 sm:mt-2 md:mt-3 lg:mt-4 xs:text-2xl sm:text-2xl ssm:text-2xl md:text-4xl lg:text-4xl">
                    Connect with rivexa at SteelFab, Sharjah - Copiloting your
                    India Sourcing journey
                  </div>
                  <div className="headervenue mt-10 xs:mt-4 sm:mt-4 md:mt-10 lg:mt-10 xs:text-[2.5rem] sm:text-[2.5rem] ssm:text-2xl md:text-4xl lg:text-5xl">
                    Sharjah, UAE
                  </div>
                  <div className="igTimmerDiv gap-7 md:gap-12 lg:gap-16">
                    <CountDownTimmer />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[35%] xs:w-[100%] sm:w-[100%] ssm:w-[20%] md:w-[35%] lg:w-[35%]">
              <div className="bg-neutral100 scale-[0.65] xs:scale-95 sm:scale-95 ssm:scale-[0.65] tablet:scale-[0.65] md:scale-[0.65] lg:scale-[0.65] xl:scale-[0.65] p-5">
                <Suspense fallback={<div>Loading...</div>}>
                  <EnquriyForm
                    categories={[{ id: 2, name: `Industrial Goods` }]}
                    fromPage="IG"
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative justify-center items-center align-middle">
          <div className=" absolute -top-16 p-8 grid xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 w-3/4 xs:w-[75%] sm:w-[80%] ssm:w-[88%] md:w-3/4 lg:w-3/4 bg-primaryWhite mx-40 xs:mx-4 sm:mx-4 md:mx-40 lg:mx-40 rounded-xl shadow-xl">
            {ratingList.map((ratingItem) => (
              <div className="ratingDiv" key={ratingItem.id}>
                <div className="igVenueItem mb-2 text-sm lg:text-lg">
                  {ratingItem.rating}
                </div>
                <div className="igVenueItemValueText text-xl">
                  {ratingItem.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[80%] m-auto">
          <div className="flex flex-col ssm:flex-row md:flex-row lg:flex-row mt-[10rem] xs:mt-[18rem] sm:mt-[10rem] md:mt-[10rem] lg:mt-[10rem]">
            <div className="w-full md:w-1/2 lg:w-1/2 justify-center items-center align-middle text-center sm:mb-8 xs:mb-8">
              <div className=" justify-center items-center align-middle text-center mt-4">
                <img
                  src={Messe.src}
                  alt="IGLandingEvent"
                  className=" object-fill w-[60%] h-[60%]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 pl-0 md:pl-4 lg:pl-4 justify-center items-center mt-0 ssm:-mt-[3.5rem]">
              <p className="wantModeIgEvent">SteelFab - 2025</p>
              <div className="mt-0 md:mt-5 lg:mt-5">
                <p className="igContent">
                  {`The landmark 20th Edition of SteelFab, the UAE’s top metalworking exhibition is expected to host over 200 industry leaders and focus on groundbreaking manufacturing development trends and innovations in the iron and steel sectors.  
rivexa will showcase the ease and benefits of sourcing industrial components from India through our digital platform, offering transparent access to verified manufacturers and smoother procurement solutions. `}
                </p>
              </div>
              <div className="justify-start items-start align-baseline mt-5 text-left xs:text-center sm:text-center md:text-left lg:text-left">
                <a
                  href="https://youtu.be/UiF6TdXWUq4"
                  target="_blank"
                  className="no-underline"
                  rel="noreferrer"
                >
                  <button type="button" className="whatCanIDo inline-flex">
                    Learn more
                    <img
                      src={Arrow.src}
                      alt=""
                      className="ml-1"
                      loading="lazy"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto my-[3rem]">
          <PoweringProcurement />
        </div>
        <div className="w-[85%] m-auto flex flex-col md:flex-row lg:flex-row mt-10 lg:mt-20 igCategory py-16 px-10 gap-8">
          <div className="w-full md:w-1/2 lg:w-1/2 justify-center items-center align-middle text-center">
            <div className=" grid grid-cols-2 lg:grid-cols-3">
              <div className="categorydivIGEvent rounded-tl-lg">
                <div className="p-4">
                  <img src={Costing.src} alt="Costing" loading="lazy" />
                  <p className="mt-2 categoryName">Costing</p>
                </div>
              </div>
              <div className="categorydivIGEvent lg:rounded-tr-none xs:rounded-tr-lg">
                <div className="p-4">
                  <img src={Forging.src} alt="Forging" loading="lazy" />
                  <p className="mt-2 categoryName">Forging</p>
                </div>
              </div>
              <div className="categorydivIGEvent rounded-tr-none lg:rounded-tr-lg">
                <div className="p-4">
                  <img src={Machining.src} alt="Machining" loading="lazy" />
                  <p className="mt-2 categoryName">Machining</p>
                </div>
              </div>
              <div className="categorydivIGEvent rounded-bl-none lg:rounded-bl-lg">
                <div className="p-4">
                  <img src={Fabrication.src} alt="Fabrication" loading="lazy" />
                  <p className="mt-2 categoryName">Fabrication</p>
                </div>
              </div>
              <div className="categorydivIGEvent lg:rounded-bl-none xs:rounded-bl-lg ">
                <div className="p-4">
                  <img src={Extrusion.src} alt="Extrusion" loading="lazy" />
                  <p className="mt-2 categoryName">Extrusion</p>
                </div>
              </div>
              <div className="categorydivIGEvent rounded-br-lg">
                <div className="p-4">
                  <img src={Assembly.src} alt="Assembly" loading="lazy" />
                  <p className="mt-2 categoryName">Injection Molding</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 pl-0 md:pl-4 lg:pl-4 justify-center items-center relative -top-[2rem]">
            <p className="categoryTextIG">Industrial goods categories</p>
            <div className="mt-0 md:mt-5 lg:mt-5">
              <p className="igContentTextIG">
                {`At rivexa, we're revolutionizing the way businesses source Industrial Goods. From intricate components that demand precision
              machining to sturdy parts crafted through casting, forging to CNC machining, we cover all aspects of Industrial Goods,
              allowing you to bring your designs to life.`}
              </p>
            </div>
            <div className="justify-start items-start align-baseline mt-7 text-left xs:text-center sm:text-center md:text-left lg:text-left">
              <a href="/industrial-goods" className="no-underline">
                <button type="button" className="whatCanIDo inline-flex">
                  View all category
                  <img src={Arrow.src} alt="" className="ml-1" loading="lazy" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[80%] m-auto">
          <div className="flex flex-col ssm:lg:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse mx-0 md:mx-2 lg:mx-2 mt-10">
            <CategoryExperts
              IGExpartOne={HimadriGhosh}
              expartOne={"Himadri Sekhar Ghosh"}
              expartOneEmail={"himadri.ghosh1@mjunction.in"}
              expartOnePhone={"+91 9433189712"}
              expartOneLinkedIn={`${"https://www.linkedin.com/in/himadri-sekhar-ghosh-a28b3a18/"}`}
              IGExpartTwo={RahulRaju}
              expartTwo={"Rahul Raju"}
              expartTwoEmail={"rahul.raju@rivexa.com"}
              expartTwoPhone={"+971 559989133"}
              expartTwoLinkedIn={`${"https://www.linkedin.com/in/rahulr36/"}`}
              background={`#b1a8cb`}
            />
          </div>
        </div>
        <div className="w-[80%] xs:w-full sm:w-full ssm:w-full md:w-[80%] lg:w-[80%] m-auto">
          <div className="iessEventTxt justify-center items-center">
            <div className=" justify-center items-centerr px-80 xs:px-4 sm:px-4 md:px-[8rem] lg:px-[8rem] py-10 sm:py-2 xs:py-2 md:py-10 lg:py-10">
              <div className="middleIGBharatTxt p-12 text-center align-middle">
                <p className="oneStepText">
                  We enable seamless end to end sourcing for custom manufactured
                  goods from verified manufacturers.
                </p>
                <a href="/industrial-goods" className="no-underline">
                  <button type="button" className="whatCanIDo inline-flex">
                    What we can do for you
                    <img src={Arrow} alt="" className="ml-1" loading="lazy" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IGLandingPage;
