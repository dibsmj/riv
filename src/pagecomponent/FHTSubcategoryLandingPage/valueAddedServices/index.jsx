/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { valueAddedServices } from '../FHTSubcategoryLandingPageStyle';
import {
  HeaderRegistrationButton,
  ImageLazyLoad,
} from '../../../components/common';
import VasImageOne from '../../../assets/CategoryPage/FHT/vas1.png';
import VasImageTwo from '../../../assets/CategoryPage/FHT/vas2.png';
import VasImageThree from '../../../assets/CategoryPage/FHT/vas3.png';
import VasImageFour from '../../../assets/CategoryPage/FHT/vas4.png';

const ServiceCard = ({
  image,
  title,
  description,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className="relative"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <ImageLazyLoad
      alt={title}
      className={`rounded-lg w-full h-full`}
      imageSrc={image}
    />
    {isHovered ? (
      <div className="absolute rounded-lg top-0 left-0 w-full h-full bg-[#000] opacity-70 text-center animate-fade-up">
        <div className="px-5 py-12">
          <div className="hoverdtexttitle">{title}</div>
          <div className="mt-2 hovertextdescription">{description}</div>
        </div>
      </div>
    ) : (
      <div
        className={`absolute bottom-1 xs:bottom-0 sm:bottom-0 ssm:bottom-0 md:bottom-[.1rem] lg:bottom-[.1rem] left-0 h-12 w-full categoryfooter m-auto`}
      >
        <h3 className="categoryfootertext justify-center items-center align-middle text-center mt-[10px] font-extrabold">
          {title}
        </h3>
      </div>
    )}
  </div>
);
ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isHovered: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

const ValueAddedServices = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const services = [
    {
      image: VasImageOne,
      title: 'Design Advisory',
      description:
        'Transforming visions into reality, our design service crafts bespoke apparel solutions for B2B clients. With a focus on innovation, we deliver high-quality, market-ready designs tailored to the brand identity and target audience.',
    },
    {
      image: VasImageTwo,
      title: 'Supplier Financing',
      description:
        'We offer tailored financing solutions to overcome capital hurdles for global buyers and suppliers, empowering seamless sourcing and business growth. Our flexible options, including pre-shipment and post-shipment financing, enable confident order fulfillment, production expansion, and market opportunity seizing.',
    },
    {
      image: VasImageThree,
      title: 'Cross Border Logistics',
      description:
        "rivexa's logistics solutions streamline international shipping with competitive prices, real-time tracking, and comprehensive support. From last-mile delivery to customs clearance, we prioritize swift, secure deliveries, enhancing client satisfaction.",
    },
    {
      image: VasImageFour,
      title: 'Quality Assurance',
      description:
        'At rivexa, we ensure top-notch product quality through rigorous international standards and partnerships. Our expert team conducts thorough inspections and certifications, ensuring customer satisfaction and enduring partnerships.',
    },
  ];
  return (
    <div css={() => valueAddedServices()}>
      <div className=" w-[90%] m-auto">
        <h2 className="font-bold justify-center items-center text-center align-middle ">
          Value added services
        </h2>
        <div className="text-center">
          Elevate your uniforms and workwear sourcing experience with our value
          added services co-piloting your journey at every step
        </div>
        <div className=" grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-1 ssm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
              isHovered={hoveredItem === index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <HeaderRegistrationButton className={`value-services-btn`} />
      </div>
    </div>
  );
};

export default ValueAddedServices;
