// content.js

import topImage from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/bg.webp';
import mobileImage from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/mobile.png';
import marketOverview from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/market-overview.png';
import rivexaTransforms from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/rivexa-transforms.png';

import c1 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/c1.webp';
import c2 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/c2.webp';
import c3 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/c3.webp';
import icon1 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/icon1.png';
import icon1Active from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/icon1Active.png';
import icon2 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/icon2.png';
import icon2Active from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/icon2Active.png';
import icon3 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/icon3.png';
import icon3Active from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/icon3Active.png';

import e1 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/e1.webp';
import e2 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/e2.webp';
import e3 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/e3.webp';
import e4 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/e4.webp';
import e5 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/e5.webp';
import e6 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/e6.webp';
import e7 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/e7.webp';
import e8 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/e8.webp';

import l1 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/l1.webp';
import l2 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/l2.webp';
import l3 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/l3.webp';
import l4 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/l4.webp';
import l5 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/l5.webp';
import l6 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/l6.png';
import l7 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/l7.png';
import l8 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/l8.png';
import l9 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/l9.png';
import l10 from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/l10.png';

import leftSideImage from '@/assets/CategoryPage/FHT/FHTSubcategory/MensAparrel/endPart.png';

export const HERO_SECTION_CONTENT = {
  topImage,
  mobileImage,
  title: "Men's Apparel: Elevate your Brand with rivexa",
  desc: 'High-Quality Men’s Apparel Manufacturers for the Global Fashion Industry',
  mainTitle: "Men's Apparel",
  breadcrumbItems: [
    { text: 'Home', url: '/' },
    { text: 'Fashion & Home Textiles', url: '/fashion-and-textiles' },
    { text: "Men's Apparel", url: '/fashion-and-textiles/mens-apparel' },
  ],
};

export const INFO_SECTION_CONTENT = [
  {
    title: 'Market Overview',
    desc: (
      <>
        <p>
          The global men’s apparel market is projected to reach $741.2 billion
          by 2027, growing at a CAGR of 4.5%. Key drivers include rising demand
          for casual and athleisure wear, spurred by lifestyle changes and the
          work-from-home trend.
        </p>
        <p>
          India stands out as a top exporter of men’s apparel, leveraging its
          position as the world’s largest cotton producer. In 2022, India’s
          apparel exports hit $17.1 billion, with men’s fashion being a
          significant contributor. The country’s competitive pricing, skilled
          workforce, and focus on sustainable manufacturing make it a preferred
          sourcing hub for global brands.
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
          rivexa is a B2B e-commerce platform that connects fashion brands and
          retailers with top custom clothing manufacturers in India. We
          specialize in men&apos;s fashion apparel, ensuring high quality,
          competitive pricing, and seamless processes. rivexa offers a unique
          solution by leveraging India&apos;s manufacturing strengths and
          providing a streamlined sourcing experience.
        </p>
        <p>
          India&apos;s manufacturing strengths and providing a streamlined
          sourcing experience.
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
  RIVEXA_SECTION_TITLE: "Why Choose rivexa for Men's Fashion Apparel?",
  EXPERTISE_SECTION_TITLE: "Our Expertise in Men's Fashion Apparel",
};

export const RIVEXA_CONTENT_OPTIONS = [
  {
    id: '1',
    title: 'Expert Customer Support',
    image: c1,
    icon: icon1,
    activeIcon: icon1Active,
    descriptions: [
      'Expert Assistance: Our seasoned team is always on hand to ensure prompt solutions, support and address any concerns in your sourcing journey via rivexa.',
      'Real-Time Supply Chain Visibility: Our comprehensive Time & Action Plan gives you real-time insights into our entire supply chain, ensuring smooth operations.',
      'Uncompromising Quality Assurance: At rivexa, we prioritize quality, conducting stringent checks throughout the production process to guarantee that every piece of apparel meets your highest expectations.',
    ],
  },
  {
    id: '2',
    title: 'Sustainable Sourcing',
    image: c2,
    icon: icon2,
    activeIcon: icon2Active,
    descriptions: [
      'Eco-friendly Materials',
      'Ethical Manufacturing Practices',
      'Range of Sustainable Fabrics.',
      'Globally recognised Certifications & Standards',
    ],
  },
  {
    id: '3',
    title: 'Value Added Services',
    image: c3,
    icon: icon3,
    activeIcon: icon3Active,
    descriptions: [
      'Trends: Highlighting the current & future trends in men’s fashion apparel',
      'Colour Forecast: Forecasts for upcoming seasons colour palette.',
      'Design: Cataloguing through concept creation & look-book preparation.',
    ],
  },
];

export const CATEGORIES = [
  {
    title: 'Shirts',
    imageSrc: e1,
    hoverContent:
      'Discover best patterns from checks to striped, custom manufactured according to your need.',
  },
  {
    title: 'T-Shirts & Polos',
    imageSrc: e2,
    hoverContent: 'Best in class fabrics, contract manufacturing with low MOQ.',
  },
  {
    title: 'Trousers & Jeans',
    imageSrc: e3,
    hoverContent:
      'Best quality and durable fabrics for with International Styles.',
  },
  {
    title: 'Outerwear',
    imageSrc: e4,
    hoverContent: 'Discover range of designs with comfortable fabrics.',
  },
  {
    title: 'Activewear',
    imageSrc: e5,
    hoverContent:
      'Elevate your performance with our durable and stylish activewear, designed for every workout.',
  },
  {
    title: 'Sleep & Innerwear',
    imageSrc: e6,
    hoverContent:
      'Experience ultimate comfort with our soft, breathable sleep and innerwear, crafted for restful nights and all-day ease.',
  },
  {
    title: 'Sustainable Clothing',
    imageSrc: e7,
    hoverContent:
      'Embrace eco-friendly fashion with our ethically made sustainable clothing, designed for a greener future.',
  },
  {
    title: 'Explore More',
    imageSrc: e8,
    hoverContent:
      'Discover best patterns from checks to striped, custom manufactured according to your need.',
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

export const LEFT_SIDE_IMAGE = leftSideImage;
