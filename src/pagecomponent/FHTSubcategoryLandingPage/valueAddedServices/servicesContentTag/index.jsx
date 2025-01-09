/** @jsxImportSource @emotion/react */
import React from 'react';
import { servicesContentTag } from './servicesContentTagStyle';
import designAdvisory from '../../../../assets/CategoryPage/FHT/FHTSubcategory/designAdvisory.webp';
import supplierFinancing from '../../../../assets/CategoryPage/FHT/FHTSubcategory/supplierFinancing.webp';
import crossBorder from '../../../../assets/CategoryPage/FHT/FHTSubcategory/crossBorder.webp';
import qualityAssurance from '../../../../assets/CategoryPage/FHT/FHTSubcategory/qualityAssurance.webp';
import vas1 from '../../../../assets/CategoryPage/FHT/FHTSubcategory/vas1.png';
import vas2 from '../../../../assets/CategoryPage/FHT/FHTSubcategory/vas2.png';
import vas3 from '../../../../assets/CategoryPage/FHT/FHTSubcategory/vas3.png';
import vas4 from '../../../../assets/CategoryPage/FHT/FHTSubcategory/vas4.png';

const contentTagList = [
  {
    imgSource: designAdvisory,
    name: 'Design Advisory',
    description:
      'Transforming visions into reality, our design service crafts bespoke apparel solutions for B2B clients. With a focus on innovation, we deliver high-quality, market-ready designs tailored to the brand identity and target audience.',
  },
  {
    imgSource: supplierFinancing,
    name: 'Supplier Financing',
    description:
      'We offer tailored financing solutions to overcome capital hurdles for global buyers and suppliers, empowering seamless sourcing and business growth. Our flexible options, including pre-shipment and post-shipment financing, enable confident order fulfillment, production expansion, and market opportunity seizing.',
  },
  {
    imgSource: crossBorder,
    name: 'Cross Border Logistics',
    description: `rivexa's logistics solutions streamline international shipping with competitive prices, real-time tracking, and comprehensive support. From last-mile delivery to customs clearance, we prioritize swift, secure deliveries, enhancing client satisfaction.`,
  },
  {
    imgSource: qualityAssurance,
    name: 'Quality Assurance',
    description:
      'At rivexa, we ensure top-notch product quality through rigorous international standards and partnerships. Our expert team conducts thorough inspections and certifications, ensuring customer satisfaction and enduring partnerships.',
  },
];

const ServicesContentTag = () => {
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const vasImages = [vas1, vas2, vas3, vas4];
  return (
    <div className="grid grid-cols-2 gap-3" css={() => servicesContentTag()}>
      {contentTagList?.map((item, index) => (
        <div
          className={`tag-box flex col-span-1 relative `}
          key={item.name}
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            height: '120px',
            cursor: 'pointer',
            backgroundImage: index < 4 ? `url(${vasImages[index]})` : 'none',

            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* <div className="tag-image">
            <img src={item.imgSource} alt="nothing" loading="lazy" />
          </div> */}
          <div className="tag-title flex flex-col justify-center items-center">
            <span>{item.name}</span>
            <span
              className={`description ${
                hoveredItem === item ? 'expanded' : ''
              }`}
            >
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesContentTag;
