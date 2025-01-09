/** @jsxImportSource @emotion/react */
"use client";
import { useEffect, useState } from "react";
import BlogResources from "@/component/BlogResources";
import NewsRoomStyles from "./NewsRoomStyles";
import HeaderPart from "./HeaderPart";
import LatestCarousel from "./LatestCarousel";
import { linkedInLinks } from "./linkedinConstants";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [getBlogTypeID, setBlogTypeID] = useState("all");
  const [isSlice, setIsSlice] = useState(false);
  const getBlogType = (typeID) => {
    setBlogTypeID(typeID);
  };
  return (
    <main>
      <div css={NewsRoomStyles}>
        <div className="w-full m-auto relative mt-[4rem] mb-[5rem]">
          <div className="bg-[#ffffff] ">
            <div className="resourcesheader">
              <HeaderPart />
              <div className="w-[95%] sm:w-full xs:w-[98%] ssm:w-w-[98%] md:w-[95%] lg:w-[95%] xl:w-[95%] m-auto flex flex-row sm:flex-col xs:flex-col ssm:flex-col md:flex-row lg:flex-row xl:flex-row gap-5">
                <div className="w-[70%] sm:w-full xs:w-full ssm:w-full md:w-[70%] lg:w-[70%] xl:w-[70%]">
                  <span className="eventsFont ml-4">Latest</span>
                  <LatestCarousel
                    searchQuery={searchQuery}
                    getBlogTypeID={getBlogTypeID}
                    isSlice={isSlice}
                  />
                </div>
                <div className="w-[30%] sm:w-[95%] xs:w-[95%] ssm:w-[95%] md:w-[30%] lg:w-[30%] xl:w-[30%] p-[1rem]">
                  <span className="eventsFont ml-4"> Events</span>
                  <div className="mt-16 sm:px-0 xs:px-0 md:px-2 px-2 bg-[#fff] rounded-md shadow-sm">
                    {linkedInLinks?.map((link) => (
                      <a
                        key={link.id}
                        href={link.link}
                        className="flex items-center border p-2 mb-4 rounded-lg hover:shadow-md transition-shadow no-underline "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={link.image.src}
                          alt={link.name}
                          className="w-16 h-16 object-cover mr-4 rounded"
                        />
                        <div>
                          <span className="font-semibold text-sm text-primaryBlack no-underline">
                            {link.name}
                          </span>
                          <p className="text-gray text-xs no-underline">
                            {link.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-[12rem]">
              <BlogResources
                blogParentCategory={"news"}
                searchQuery={searchQuery}
                typeID={getBlogTypeID}
                isSlice={isSlice}
                startIndex={0}
                endIndex={3}
                className={`w-[95%] m-auto grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-[8rem]`}
                sourceType={"news"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resources;
