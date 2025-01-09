/** @jsxImportSource @emotion/react */
"use client";
import { useEffect, useState } from "react";
import BlogResources from "@/component/BlogResources";
import ResourcesStyles from "./ResourcesStyles";
import { SearchIcon } from "../../config/GetImages";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";
import { useLazyGetBlogCategoryQuery } from "@/redux/slices/apiSlice";

const Resources = () => {
  const [resourceCategory, setResourceCategory] = useState([]);
  const [loadResourceCategory, setLoadResourceCategory] = useState(false);
  const [getCategory] = useLazyGetBlogCategoryQuery();
  const fetchCategory = async () => {
    try {
      const result = await getCategory();
      if (result?.data.length > 0) {
        setResourceCategory(result?.data);
      } else {
        setResourceCategory([]);
      }
      setLoadResourceCategory(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [getBlogTypeID, setBlogTypeID] = useState("all");
  const [isSlice, setIsSlice] = useState(false);
  const getBlogType = (typeID) => {
    setBlogTypeID(typeID);
  };
  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (slug, name) => {
    setActiveButton(name);
    getBlogType(slug);
  };
  const breadcrumbItems = [
    { text: "Home", url: "/" },
    {
      text: `Blogs`,
      url: ``,
    },
  ];
  return (
    <main>
      <div css={ResourcesStyles}>
        <div className="w-full m-auto mt-[4rem] mb-[5rem]">
          <div className="resourcesheader">
            <div className="w-[95%] m-auto justify-center items-center align-middle">
              <div className="relative top-[2rem]">
                <div className=" flex flex-row gap-3 xs:flex-col sm:flex-col ssm:flex-row md:flex-row lg:flex-row">
                  <div className="w-[80%] xs:w-full sm:w-full ssm:w-[80%] md:w-[80%] lg:w-[80%]">
                    {/* <div className="flex flex-row">
                    <div className="resourcestype flex-shrink-0">Our blog</div>
                  </div> */}
                    <h1 className="resourcesh1 pt-3">Blogs</h1>
                    <div className="flex flex-row py-3">
                      <div className="resourcesh2">
                        The latest industry news, interviews, technologies, and
                        resources.
                      </div>
                    </div>
                  </div>
                  <div className=" relative top-[4rem] xs:top-0 sm:top-0 ssm:top-[4rem] md:top-[4rem] lg:top-[4rem] w-[20%] xs:w-full sm:w-full ssm:w-[20%] md:w-[20%] lg:w-[20%] justify-center align-middle items-center">
                    <input
                      type="text"
                      className="searchtype indent-5 w-full"
                      onKeyUp={handleSearchInputChange}
                    />
                    <img
                      alt={"SearchIcon"}
                      className={`absolute left-3 top-3`}
                      src={SearchIcon.src}
                    />
                  </div>
                </div>
                <Breadcrumb items={breadcrumbItems} />
                {loadResourceCategory && (
                  <div className=" flex flex-row flex-wrap pt-[3rem] gap-4">
                    {resourceCategory &&
                      resourceCategory.length > 0 &&
                      resourceCategory.map((item, index) => (
                        <button
                          type="button"
                          className={`resourcescategory cursor-pointer ${
                            activeButton === item.name
                              ? "!border-2 !border-solid !border-[#4a3587]"
                              : ""
                          }`}
                          key={item.term_id}
                          onClick={() =>
                            handleButtonClick(item.slug, item.name)
                          }
                        >
                          {item.name}
                        </button>
                      ))}
                  </div>
                )}
                <div className=" grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-[3rem]">
                  <BlogResources
                    searchQuery={searchQuery}
                    typeID={getBlogTypeID}
                    isSlice={!isSlice}
                    startIndex={0}
                    endIndex={3}
                    className={``}
                    sourceType={"resources"}
                  />
                </div>
              </div>
            </div>
          </div>
          <BlogResources
            searchQuery={searchQuery}
            typeID={getBlogTypeID}
            isSlice={isSlice}
            startIndex={0}
            endIndex={3}
            className={`w-[95%] m-auto grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-[8rem]`}
            sourceType={"resources"}
          />
        </div>
      </div>
    </main>
  );
};

export default Resources;
