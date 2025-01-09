// content.js

import topImage from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/bg.webp';
import mobileImage from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/mobile.png';
import marketOverview from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/market-overview.png';
import rivexaTransforms from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/rivexa-transforms.png';

import c1 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/c1.webp';
import c2 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/c2.webp';
import c3 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/c3.webp';
import c4 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/c4.webp';
import c5 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/c5.webp';
import icon1 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/icon1.png';
import icon1Active from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/icon1Active.png';
import icon2 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/icon2.png';
import icon2Active from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/icon2Active.png';
import icon3 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/icon3.png';
import icon3Active from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/icon3Active.png';
import icon4 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/icon4.png';
import icon4Active from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/icon4Active.png';
import icon5 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/icon5.png';
import icon5Active from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/icon5Active.png';

import e1 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/e1.webp';
import e2 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/e2.webp';
import e3 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/e3.webp';
import e4 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/e4.webp';
import e5 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/e5.webp';
import e6 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/e6.webp';

import l1 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/l1.png';
import l2 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/l2.png';
import l3 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/l3.png';
import l4 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/l4.png';
import l5 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/l5.png';
import l6 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/l6.png';
import l7 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/l7.png';
import l8 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/l8.png';
import l9 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/l9.png';
import l10 from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/l10.png';

import leftSideImage from '@/assets/CategoryPage/FHT/FHTSubcategory/HomeTextiles/endPart.png';

export const HERO_SECTION_CONTENT = {
  topImage,
  mobileImage,
  title:
    'Premium Home Textiles from India: Quality Craftsmanship, Global Reach',
  desc: 'Discover luxurious home textile collections crafted with precision, innovation, and sustainability—sourced directly from India’s leading manufacturers.',
  mainTitle: "Men's Apparel",
  breadcrumbItems: [
    { text: 'Home', url: '/' },
    { text: 'Fashion & Home Textiles', url: '/fashion-and-textiles' },
    { text: 'Home Textiles', url: '/fashion-and-textiles/home-textiles' },
  ],
};

export const INFO_SECTION_CONTENT = [
  {
    title: 'Market Overview',
    desc: (
      <p>
        India is one of the largest suppliers of home textiles globally, with
        exports reaching $7.5 billion in 2022 and projected to grow by 8.3%
        annually until 2026. India’s competitive edge lies in its rich variety
        of fabrics, innovative designs, and growing focus on sustainable
        production practices, making it a key player in the global home textile
        market.
        <br />
        (Source: India Brand Equity Foundation, 2023; Textile Value Chain, 2023)
      </p>
    ),
    image: marketOverview,
    order: 'textFirst',
  },
  {
    title: 'How rivexa Transforms Your Sourcing Journey',
    desc: (
      <>
        <p>
          At rivexa, we make sourcing home textiles effortless, offering
          end-to-end solutions that connect you to India&apos;s top
          manufacturers. With a strong focus on quality, customization, and
          sustainability, we ensure your brand&apos;s unique needs are met with
          precision and reliability, backed by a transparent and efficient
          supply chain.
        </p>
        <ul>
          <li>Verified Suppliers</li>
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
  RIVEXA_SECTION_TITLE: 'Why Choose rivexa for  Home Textiles ?',
  EXPERTISE_SECTION_TITLE: 'Our Expertise in Home Textiles ',
};

export const RIVEXA_CONTENT_OPTIONS = [
  {
    id: '1',
    title: 'Custom Manufacturing',
    image: c1,
    icon: icon1,
    activeIcon: icon1Active,
    descriptions: [
      ' rivexa offers tailor-made solutions, providing flexibility in fabric choices, design specifications, and production processes. Whether you require unique sizes, patterns, or color schemes, we deliver precisely what your brand needs to stand out in the market.',
    ],
  },
  {
    id: '2',
    title: 'Quality Assurance',
    image: c2,
    icon: icon2,
    activeIcon: icon2Active,
    descriptions: [
      'With a strict focus on quality, every product sourced through rivexa undergoes comprehensive testing to meet international standards for durability and comfort. Our dedication to excellence ensures long-lasting, high-quality home textiles that enhance brand trust.',
    ],
  },
  {
    id: '3',
    title: 'Variety of Fabrics',
    image: c3,
    icon: icon3,
    activeIcon: icon3Active,
    descriptions: [
      'rivexa’s extensive network of manufacturers offers a diverse range of fabrics, including luxurious cotton, linen, silk, and sustainable options like organic fibers. This diversity allows us to cater to various market needs, ensuring you get the best materials for your product line.',
    ],
  },
  {
    id: '4',
    title: 'Sustainable Sourcing',
    image: c4,
    icon: icon4,
    activeIcon: icon4Active,
    descriptions: [
      'Eco-friendly Materials',
      'Ethical Manufacturing Practices',
      'Range if sustainable materials',
      'Globally recognised Certifications and Standards',
    ],
  },
  {
    id: '5',
    title: 'Value Added Services',
    image: c5,
    icon: icon5,
    activeIcon: icon5Active,
    descriptions: [
      'Eco-friendly Materials',
      'Ethical Manufacturing Practices',
      'Range if sustainable materials',
      'Globally recognised Certifications and Standards',
    ],
  },
];

export const CATEGORIES = [
  {
    title: 'Bed Linens & Cushions',
    imageSrc: e1,
    hoverContent:
      'Luxurious bed linens and cushions, designed for comfort and style, available in a range of fabrics and patterns. ',
  },
  {
    title: 'Table & Kitchen Linen',
    imageSrc: e2,
    hoverContent:
      'High-quality tablecloths, napkins, and kitchen textiles, perfect for adding a touch of elegance to any setting.',
  },
  {
    title: 'Towels and Bathrobes',
    imageSrc: e3,
    hoverContent:
      'Plush, absorbent towels and bathrobes crafted from premium fabrics for ultimate comfort.',
  },
  {
    title: 'Rugs, Mats and Carpets',
    imageSrc: e4,
    hoverContent:
      'Beautifully designed rugs, mats, and carpets that blend functionality with aesthetic appeal, available in various materials and textures.',
  },
  {
    title: 'Sustainable Wear',
    imageSrc: e5,
    hoverContent:
      'Explore eco-friendly home textile options, including organic cotton, recycled fibers, and other sustainable materials, reducing your environmental footprint.',
  },
  {
    title: 'Explore More',
    imageSrc: e6,
    hoverContent:
      'Discover additional home textile products to complete your brand’s collection, customized to your preferences. ',
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
