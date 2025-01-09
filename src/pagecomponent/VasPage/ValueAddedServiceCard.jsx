import React from "react";
import PropTypes from "prop-types";
import v1 from "@/assets/vas/v1.webp";
import v2 from "@/assets/vas/v2.webp";
import v3 from "@/assets/vas/v3.webp";
import v4 from "@/assets/vas/v4.webp";
import v5 from "@/assets/vas/v5.webp";
import Breadcrumb from "@/pagecomponent/BlogPages/components/Breadcrumb";

const ValueAddedServiceCard = ({ scrollToSection }) => {
  const services = [
    {
      icon: v1,
      title: "Cross Border Logistics",
      link: "cross-border-logistics",
    },
    {
      icon: v2,
      title: "Supplier Financing",
      link: "supplier-financing",
    },
    {
      icon: v3,
      title: "Quality Assurance",
      link: "quality-assurance",
    },
    {
      icon: v4,
      title: "Export Advisory",
      link: "export-advisory",
    },
    {
      icon: v5,
      title: "Design Advisory",
      link: "design-advisory",
    },
  ];

  const breadcrumbItems = [
    { text: "Home", url: "/" },
    { text: "Value Added Services", url: "/value-added-services" },
  ];
  return (
    <div className="headerbackground">
      <div className=" relative top-8 ml-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="p-6 rounded-lg shadow-md mt-[30px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 value-added-service-heading">
            Value Added Services
          </h1>
          <p className="text-[#336666] mb-6 value-added-service-description md:w-[50%] xs:w-[80%]">
            Enhance your global trade with tailored value-added services,
            ensuring a smooth and efficient journey for all your sourcing needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-2 gap-1 w-[95%] h-[80%] m-auto ">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-100 rounded-lg flex flex-col items-center relative shadow-inner transform transition-transform duration-300 hover:scale-105"
            >
              <div
                onClick={() => scrollToSection(service.link)}
                className="cursor-pointer"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    scrollToSection(service.link);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <img
                  src={service.icon.src}
                  alt={service.title}
                  className="md:h-[80%] xs:h-[90%]"
                />
                <div className="flex justify-center items-center">
                  <div className="card-title text-lg font-semibold mb-2 absolute md:top-28 xs:top-36 z-5 bg-white  py-1mt-2.5 rounded-md">
                    {service.title}
                  </div>
                  <button
                    type="button"
                    className="card-button absolute z-2 top-[10.25rem] flex items-center pl-[20px] py-2 cursor-pointer md:mt-[-18px] "
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(service.link);
                    }}
                  >
                    Know more
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                    >
                      <path
                        d="M12 4L12 20"
                        stroke="#20AF98"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.667 13.3323L12.0003 19.9987L5.33366 13.3322"
                        stroke="#20AF98"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ValueAddedServiceCard.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default ValueAddedServiceCard;
