import { useState, React } from "react";
import ImageLazyLoad from "@/component/ImageLazyLoad";
import { SearchIcon } from "@/config/GetImages";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";

const HeaderPart = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };
  const breadcrumbItems = [
    { text: "Home", url: "/" },
    {
      text: `Newsroom`,
      url: ``,
    },
  ];

  return (
    <div className="w-full bg-[#E2D8FF]">
      <div className="w-[95%] m-auto justify-center items-center align-middle relative py-2">
        <div className=" flex flex-row gap-3 xs:flex-col sm:flex-col ssm:flex-row md:flex-row lg:flex-row">
          <div className="w-[80%] xs:w-full sm:w-full ssm:w-[80%] md:w-[80%] lg:w-[80%]">
            {/* <div className="flex flex-row">
                    <div className="resourcestype flex-shrink-0">Expertise Exchange</div>
                  </div> */}
            <h1 className="resourcesh1 pt-3">Newsroom</h1>
            <div className="flex flex-row py-3">
              <div className="resourcesh2">
                Sharing wisdom, sparking innovation.
              </div>
            </div>
          </div>
          <div className=" relative top-[4rem] xs:top-0 sm:top-0 ssm:top-[4rem] md:top-[4rem] lg:top-[4rem] w-[20%] xs:w-full sm:w-full ssm:w-[20%] md:w-[20%] lg:w-[20%] justify-center align-middle items-center">
            <input
              type="text"
              className="searchtype indent-5 w-full"
              onKeyUp={handleSearchInputChange}
            />
            <ImageLazyLoad
              alt={"SearchIcon"}
              className={`absolute left-3 top-3`}
              imageSrc={SearchIcon.src}
            />
          </div>
        </div>
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  );
};

export default HeaderPart;
