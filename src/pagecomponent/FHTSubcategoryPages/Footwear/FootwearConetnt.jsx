import topImage from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/bg.webp';
import mobileImage from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/mobile.png';
import marketOverview from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/market-overview.png';
import rivexaTransforms from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/rivexa-transforms.png';
import c1 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/c1.webp';
import c2 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/c2.webp';
import c3 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/c3.webp';
import c4 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/c4.webp';
import c5 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/c5.webp';
import icon1 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/icon1.png';
import icon1Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/icon1Active.png';
import icon2 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/icon2.png';
import icon2Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/icon2Active.png';
import icon3 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/icon3.png';
import icon3Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/icon3Active.png';
import icon4 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/icon4.png';
import icon4Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/icon4Active.png';
import icon5 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/icon5.png';
import icon5Active from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/icon5Active.png';

import e1 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/e1.webp';
import e2 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/e2.webp';
import e3 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/e3.webp';
import e4 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/e4.webp';
import e5 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/e5.webp';
import e6 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/e6.webp';
import e7 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/e7.webp';
import e8 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/e8.webp';

import l1 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/l1.png';
import l2 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/l2.png';
import l3 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/l3.png';
import l4 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/l4.png';
import l5 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/l5.png';
import l6 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/l6.png';
import l7 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/l7.png';
import l8 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/l8.png';
import l9 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/l9.png';
import l10 from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/l10.png';

import leftSideImage from '@/assets/CategoryPage/FHT/FHTSubcategory/Footwear/endPart.png';

export const HERO_SECTION_CONTENT = {
  topImage,
  mobileImage,
  title: 'Step into Excellence with Premium Footwear Sourced from India',
  desc: 'Discover versatile and high-quality footwear that combines craftsmanship, innovation, and sustainability for the modern global market.',
  mainTitle: 'Footwears and workwear',
  breadcrumbItems: [
    { text: 'Home', url: '/' },
    { text: 'Fashion & Home Textiles', url: '/fashion-and-textiles' },
    {
      text: 'Footwear',
      url: '/fashion-and-textiles/footwear',
    },
  ],
};

export const INFO_SECTION_CONTENT = [
  {
    title: 'Market Overview',
    desc: (
      <p>
        India&apos;s footwear industry is expected to grow at a CAGR of 11% from
        2023 to 2028, driven by rising global demand for leather, sports, and
        sustainable footwear.
        <br />
        Global Leader: India ranks among the top 2nd in the largest producers of
        footwear globally.
        <br />
        Employment: The industry employs over 1.1 million people, contributing
        significantly to the economy and providing livelihood to millions of
        families
        <br />
        Export Revenue: Footwear exports from India generate over $2 billion in
        revenue annually
        <br />
        (Source: India Brand Equity Foundation, 2023)
      </p>
    ),
    image: marketOverview,
    order: 'textFirst',
  },
  {
    title: 'How rivexa Transforms Your Sourcing Journey',
    desc: (
      <div>
        <p>
          At rivexa, we ensure a seamless and efficient sourcing experience,
          offering a curated selection of high-quality footwear from
          India&apos;s top manufacturers. Our dedication to sustainability and
          expert craftsmanship enhances your brand&apos;s visibility in the
          global market, while our streamlined logistics guarantee dependable
          and timely deliveries.
        </p>
        <p>
          rivexa offers a unique solution by leveraging India&apos;s
          manufacturing strengths and providing a streamlined sourcing
          experience.
        </p>
        <ul>
          <li>Verified 175+ Suppliers</li>
          <li>Seamless User Experience</li>
          <li>Realtime Visibility & Productivity</li>
          <li>Trust & Transparency</li>
          <li>Receive & Compare Prices</li>
        </ul>
      </div>
    ),
    image: rivexaTransforms,
    order: 'imageFirst',
  },
];

export const TITLE_CONSTANTS = {
  RIVEXA_SECTION_TITLE: 'Why Choose rivexa for Footwear ?',
  EXPERTISE_SECTION_TITLE: 'Our Expertise in Footwear ',
};

export const RIVEXA_CONTENT_OPTIONS = [
  {
    id: '1',
    title: 'Craftsmanship',
    image: c1,
    icon: icon1,
    activeIcon: icon1Active,
    descriptions: [
      'Partner with skilled artisans whose expertise in traditional and modern footwear design ensures unmatched quality and attention to detail.',
    ],
  },
  {
    id: '2',
    title: 'Leather Exporter',
    image: c2,
    icon: icon2,
    activeIcon: icon2Active,
    descriptions: [
      'As the world’s second-largest leather exporter, India offers a wide range of premium leather footwear, blending durability with luxury to meet international standards.',
    ],
  },
  {
    id: '3',
    title: 'High Manufacturing Capacity',
    image: c3,
    icon: icon3,
    activeIcon: icon3Active,
    descriptions: [
      'India’s robust footwear manufacturing industry supports high minimum order quantities (MOQs), making it ideal for brands seeking large-scale production with consistent quality.',
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
      'Trends: Highlighting the current & future trends in men’s fashion apparel',
      'Colour Forecast: Forecasts for upcoming seasons colour palette.',
      'Design: Cataloguing through concept creation & look-book preparation.',
    ],
  },
];

export const CATEGORIES = [
  {
    title: "Men's Footwear",
    imageSrc: e1,
    hoverContent:
      'Stylish and durable bulk footwear for men, crafted with precision for ultimate comfort and performance.',
  },
  {
    title: 'Women’s Footwear',
    imageSrc: e2,
    hoverContent:
      'A diverse range of elegant and contemporary designs, tailored to meet global trends.',
  },
  {
    title: "Children's Footwear",
    imageSrc: e3,
    hoverContent:
      'Comfortable, durable, and safe footwear for children, made with premium materials.',
  },
  {
    title: 'Sports Footwear',
    imageSrc: e4,
    hoverContent:
      'High-performance sports footwear designed for maximum comfort, support, and durability.',
  },
  {
    title: 'Formal Footwear',
    imageSrc: e5,
    hoverContent:
      'Classic, refined formal footwear that combines luxury materials with sophisticated craftsmanship.',
  },
  {
    title: 'Leather Footwear',
    imageSrc: e6,
    hoverContent:
      'Premium leather footwear, showcasing India’s world-class expertise in leather processing and production.',
  },
  {
    title: 'Sustainable Footwear',
    imageSrc: e7,
    hoverContent:
      'From recycled materials to eco-friendly leather, our sustainable footwear options cater to the rising demand for ethical, planet-friendly fashion.',
  },
  {
    title: 'Explore More',
    imageSrc: e8,
    hoverContent:
      'Browse our full range of footwear and discover products that meet your brand’s specific needs.',
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
