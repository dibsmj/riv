// content.js

import topImage from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/bg.webp';
import mobileImage from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/mobile.png';
import marketOverview from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/market-overview.png';
import rivexaTransforms from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/rivexa-transforms.png';

import c1 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/c1.webp';
import c2 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/c2.webp';
import c3 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/c3.webp';
import c4 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/c4.webp';
import c5 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/c5.webp';
import c6 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/c6.webp';
import c7 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/c7.webp';

import icon1 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon1.png';
import icon1Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon1Active.png';
import icon2 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon2.png';
import icon2Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon2Active.png';
import icon3 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon3.png';
import icon3Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon3Active.png';
import icon4 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon4.png';
import icon4Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon4Active.png';
import icon5 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon5.png';
import icon5Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon5Active.png';
import icon6 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon6.png';
import icon6Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon6Active.png';
import icon7 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon7.png';
import icon7Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/icon7Active.png';

import e1 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/e1.webp';
import e2 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/e2.webp';
import e3 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/e3.webp';
import e4 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/e4.webp';
import e5 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/e5.webp';
import e6 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/e6.webp';
import e7 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/e7.webp';
import e8 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/e8.webp';

import l1 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/l1.png';
import l2 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/l2.png';
import l3 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/l3.png';
import l4 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/l4.png';
import l5 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/l5.png';
import l6 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/l6.png';
import l7 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/l7.png';
import l8 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/l8.png';
import l9 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/l9.png';
import l10 from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/l10.png';

import leftSideImage from '@/assets/CategoryPage/FHT/FHTSubcategory/Leather/endPart.png';

export const HERO_SECTION_CONTENT = {
  topImage,
  mobileImage,
  title: 'Premium Leather Goods Sourced from India’s Finest Manufacturers ',
  desc: 'Discover expertly crafted leather products that reflect India’s rich heritage, offering unmatched quality, customization, and sustainability',
  breadcrumbItems: [
    { text: 'Home', url: '/' },
    { text: 'Fashion & Home Textiles', url: '/fashion-and-textiles' },
    { text: 'Leather Goods', url: '/fashion-and-textiles/leather' },
  ],
};

export const INFO_SECTION_CONTENT = [
  {
    title: 'Market Overview',
    desc: (
      <>
        <p>
          India is the second-largest exporter of leather globally, with the
          sector contributing over $5 billion annually in exports.
        </p>
        <p>
          West Bengal alone accounts for nearly 25% of India’s leather
          production, with key hubs like Kolkata driving innovation in
          sustainable leather production. Indian leather is known for its
          premium quality and craftsmanship, making it a global favourite for
          footwear, fashion accessories, and apparel.
          <br />
          (Sources: India Brand Equity Foundation, 2023; Ministry of Commerce
          and Industry)
        </p>
      </>
    ),
    image: marketOverview,
    order: 'textFirst',
  },
  {
    title: 'How rivexa Transforms Your Sourcing Journey',
    desc: (
      <>
        <p>
          At rivexa, we make sourcing leather goods simple and efficient,
          connecting you with India’s best leather manufacturers. From jackets
          to travel accessories, we offer tailor-made, high-quality products
          that meet international standards for craftsmanship, durability, and
          sustainability, while ensuring timely delivery and transparent
          pricing.
        </p>
        <ul>
          <li>Verified 175+ Suppliers</li>
          <li>Seamless User Experience</li>
          <li>Realtime Visibility & Productivity</li>
          <li>Trust & Transparency</li>
          <li>Receive & Compare Prices</li>
        </ul>
      </>
    ),
    image: rivexaTransforms,
    order: 'imageFirst',
  },
];

export const TITLE_CONSTANTS = {
  RIVEXA_SECTION_TITLE: 'Why Choose rivexa for Leather ?',
  EXPERTISE_SECTION_TITLE: 'Our Expertise in Leather ',
};

export const RIVEXA_CONTENT_OPTIONS = [
  {
    id: '1',
    title: 'Authentic Craftsmanship',
    image: c1,
    icon: icon1,
    activeIcon: icon1Active,
    descriptions: [
      'Our suppliers work with skilled artisans who blend traditional leatherworking techniques with modern innovations, delivering products that embody authenticity and premium craftsmanship. ',
    ],
  },
  {
    id: '2',
    title: 'Diverse Product Range',
    image: c2,
    icon: icon2,
    activeIcon: icon2Active,
    descriptions: [
      'rivexa offers a vast array of leather goods, from apparel to accessories, ensuring that we cater to every need across fashion, lifestyle, and functional leather products.',
    ],
  },
  {
    id: '3',
    title: 'Competitive Pricing',
    image: c3,
    icon: icon3,
    activeIcon: icon3Active,
    descriptions: [
      'Leveraging India’s cost-effective production capabilities, rivexa provides premium leather goods at competitive rates without compromising on quality. ',
    ],
  },
  {
    id: '4',
    title: 'Customization and Flexibility',
    image: c4,
    icon: icon4,
    activeIcon: icon4Active,
    descriptions: [
      'Our extensive network allows us to offer highly customizable leather solutions, tailored to your brand’s design, colour, and material preferences, ensuring flexibility to suit specific requirements. ',
    ],
  },
  {
    id: '5',
    title: 'Global Reach with Local Expertise',
    image: c5,
    icon: icon5,
    activeIcon: icon5Active,
    descriptions: [
      'With our deep-rooted local expertise in India’s leather sector and global outreach, rivexa ensures smooth communication, efficient sourcing, and adherence to international market standards. ',
    ],
  },
  {
    id: '6',
    title: 'Sustainable Sourcing',
    image: c6,
    icon: icon6,
    activeIcon: icon6Active,
    descriptions: [
      'Eco-friendly Materials',
      'Ethical Manufacturing Practices',
      'Range of Sustainable Fabrics.',
      'Globally recognised Certifications & Standards',
    ],
  },
  {
    id: '7',
    title: 'Value Added Services',
    image: c7,
    icon: icon7,
    activeIcon: icon7Active,
    descriptions: [
      "Looking for design consultation? We’re here for you! Stay ahead of the curve with the latest trends in Fashion Apparel & Home Textiles, upcoming color forecasts for every season, and expert assistance in concept creation and look-book preparation—all tailored to elevate your brand's unique style. ",
    ],
  },
];

export const CATEGORIES = [
  {
    title: 'Jackets',
    imageSrc: e1,
    hoverContent:
      'Handcrafted leather jackets, available in various finishes and styles for a premium fashion experience. ',
  },
  {
    title: 'Shoes',
    imageSrc: e2,
    hoverContent:
      'High-quality leather footwear that blends durability with comfort, ranging from formal to casual styles. ',
  },
  {
    title: 'Belt & Other Fashion Accessories',
    imageSrc: e3,
    hoverContent:
      'Stylish leather belts and accessories designed to complement any wardrobe.',
  },
  {
    title: 'Gloves',
    imageSrc: e4,
    hoverContent:
      'Luxuriously soft leather gloves that offer both warmth and sophistication.',
  },
  {
    title: 'Travel Accessories',
    imageSrc: e5,
    hoverContent:
      'Premium leather travel accessories, including bags and pouches, crafted for durability and elegance.',
  },
  {
    title: 'Bags & Wallets',
    imageSrc: e6,
    hoverContent:
      'Chic leather bags and wallets available in a variety of sizes, designs, and materials.',
  },
  {
    title: 'Bottom Wear',
    imageSrc: e7,
    hoverContent:
      'High-quality leather trousers and skirts, perfect for high-fashion statements.',
  },
  {
    title: 'Explore More',
    imageSrc: e8,
    hoverContent:
      'Discover more innovative leather products that reflect your brand’s style and sustainability goals.',
  },
];

export const LOGOS = [
  { id: 'logo1', src: l1 },
  { id: 'logo2', src: l2 },
  { id: 'logo3', src: l3 },
  { id: 'logo4', src: l4 },
  { id: 'logo5', src: l5 },
  { id: 'logo6', src: l6 },
  { id: 'logo7', src: l7 },
  { id: 'logo8', src: l8 },
  { id: 'logo9', src: l9 },
  { id: 'logo10', src: l10 },
];

export const LEFT_SIDE_IMAGE = leftSideImage;

export const FAQ_DATA = [
  {
    id: 1,
    question: 'What is your minimum order quantity (MOQ)?',
    answer:
      'Our MOQs can vary depending on the product and fabric. However, we strive to be flexible and accommodate businesses of all sizes. Please contactus for a specific quote based on your needs.',
  },
  {
    id: 2,
    question: 'What types of customization options do you offer? ',
    answer: (
      <>
        <p>
          We offer a wide range of customization options to meet your specific
          design needs. This includes:
        </p>
        <ul>
          <li>Private labeling with your brand logo and tags</li>
          <li>Custom colors and prints</li>
          <li>Different fabric options and trims</li>
          <li>Specific garment details and adjustments</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    question: 'Do you offer design and development assistance?',
    answer: (
      <>
        <p>
          Yes, we have a team of experienced designers who can help you develop
          your clothing line from concept to completion. We can assist with:
        </p>
        <ul>
          <li>Initial sketches and design ideas</li>
          <li>Technical specifications and pattern making</li>
          <li>Sample development and fit checks</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    question: 'What is your typical production turnaround time?',
    answer:
      'Production turnaround time can vary from supplier to supplier and can be discussed before making the agreement ',
  },
  {
    id: 5,
    question: 'What do you mean by Verified Suppliers?',
    answer:
      'We at rivexa, do a thorough background check on our supplier base, on the following parameters: · Compliance Certification · Machinery & Manufacturing Capability · Design & Development Capabilities · Multi-Category Expertise',
  },
];
