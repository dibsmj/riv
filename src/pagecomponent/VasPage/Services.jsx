import React from 'react';
import PropTypes from 'prop-types';

const Services = ({
  title,
  description,
  items,
  logo,
  onEnquireClick,
  bgColor,
  image,
  order1,
  order2,
}) => (
  <div className={`w-full ${bgColor}`}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto w-[80%] justify-center items-center">
      {/* Content Grid */}
      <div className={`p-4 order-1 md:${order1} xs:order-1 text-left w-[95%]`}>
        <h2 className="serviceheader text-2xl font-bold mb-4 flex flex-row text-left ">
          {title}
        </h2>
        <p className="mb-6 text-left service-description">{description}</p>
        {/* Items Grid */}
        {items && items.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-start items-start"
              >
                <img
                  src={item.icon.src}
                  alt={`Logo ${item.id}`}
                  className="w-12 h-12"
                />
                <h1 className="text-lg font-semibold serviceheader">
                  {item.heading}
                </h1>
                <p className="text-left text-sm mt-0 service-description">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={onEnquireClick}
          type="button"
          className="cursor-pointer serviceheader btn-enquire flex items-center justify-center pr-6 rounded-full bg-[#4A3587] border-none text-primaryWhite group text-sm"
        >
          <span className="order-2 transition-transform duration-500 ease-in-out group-hover:-translate-x-9">
            Enquire
          </span>
          <div className="order-1 transition-transform duration-500 ease-in-out group-hover:translate-x-16 pt-0.5 mt-0.5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
              style={{ marginRight: '0.5rem' }}
            >
              <circle cx="15" cy="15.5" r="14.5" fill="white" />
              <path
                d="M8.57141 15.1406H22.2857"
                stroke="#4A3587"
                strokeWidth="1.81429"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5702 9.42969L22.2843 15.144L16.5701 20.8583"
                stroke="#4A3587"
                strokeWidth="1.71429"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Image Grid */}
      <div className={`p-4 order-2 md:${order2} xs:order-1`}>
        <img
          src={image.src}
          alt="Description"
          className="mx-auto w-full md:w-[100%] h-[80%] mr-12 md:mt-[66px]"
        />
        <div className="flex justify-start items-start">
          {logo && <img src={logo.src} alt="logo" className="w-full md:w-[50%]" />}
        </div>
      </div>
    </div>
  </div>
);

Services.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  logo: PropTypes.string.isRequired,
  onEnquireClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  order1: PropTypes.string.isRequired,
  order2: PropTypes.string.isRequired,
};

export default Services;
