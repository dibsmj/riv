// content.js

import topImage from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/bg.webp";
import mobileImage from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/mobile.png";
import marketOverview from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/market-overview.png";
import rivexaTransforms from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/rivexa-transforms.png";
import c1 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/c1.webp";
import c2 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/c2.webp";
import c3 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/c3.webp";
import c4 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/c4.webp";
import c5 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/c5.webp";
import c6 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/c6.webp";
import c7 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/c7.webp";

import icon1 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon1.png";
import icon1Active from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon1Active.png";
import icon2 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon2.png";
import icon2Active from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon2Active.png";
import icon3 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon3.png";
import icon3Active from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon3Active.png";
import icon4 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon4.png";
import icon4Active from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon4Active.png";
import icon5 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon5.png";
import icon5Active from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon5Active.png";
import icon6 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon6.png";
import icon6Active from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon6Active.png";
import icon7 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon7.png";
import icon7Active from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/icon7Active.png";

import e1 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/e1.webp";
import e2 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/e2.webp";
import e3 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/e3.webp";
import e4 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/e4.webp";
import e5 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/e5.webp";
import e6 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/e6.webp";

import l1 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/l1.png";
import l2 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/l2.png";
import l3 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/l3.png";
import l4 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/l4.png";
import l5 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/l5.png";
import l6 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/l6.png";
import l7 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/l7.png";
import l8 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/l8.png";
import l9 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/l9.png";
import l10 from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/l10.png";

import leftSideImage from "@/assets/CategoryPage/FHT/FHTSubcategory/Bag/endPart.png";

export const HERO_SECTION_CONTENT = {
  topImage,
  mobileImage,
  title:
    "Discover Premium Bags, Accessories & Jewellery Sourced Responsibly from India",
  desc: "Elevate your business with bespoke, artisanal creations that blend tradition with contemporary trends, delivered with unmatched quality and ethical sourcing.",
  breadcrumbItems: [
    { text: "Home", url: "/" },
    { text: "Fashion & Home Textiles", url: "/fashion-and-textiles" },
    {
      text: "Bags",
      url: "/fashion-and-textiles/bags",
    },
  ],
};

export const INFO_SECTION_CONTENT = [
  {
    title: "Market Overview",
    desc: (
      <p>
        India&apos;s fashion accessories market, including bags and jewellery,
        is poised to grow at a CAGR of 8.5% from 2022 to 2027, reaching $85
        billion by 2027. The country&apos;s thriving export of accessories,
        bolstered by government initiatives and the demand for eco-friendly,
        handcrafted products, makes it a global hub for ethical fashion
        sourcing.
        <br />
        (Source: India Brand Equity Foundation, 2023)
      </p>
    ),
    image: marketOverview,
    order: "textFirst",
  },
  {
    title: "How rivexa Transforms Your Sourcing Journey",
    desc: (
      <div>
        <p>
          At rivexa, we simplify your sourcing of premium bags, accessories, and
          jewellery with a seamless process that prioritises quality and
          craftsmanship. Discover custom jewellery manufacturers and suppliers
          of wholesale bags, handbags, and fashion accessories featuring designs
          by skilled Indian artisans. Our global network ensures timely delivery
          and a reliable supply chain, tailored to your brand&apos;s exact
          needs, with a commitment to sustainability and ethical practices.
        </p>
        <p>
          Unique Solution: rivexa offers a unique solution by leveraging
          India&apos;s manufacturing strengths and providing a streamlined
          sourcing experience.
        </p>
        <ul>
          <li>Verified Suppliers</li>
          <li>Seamless User Experience</li>
          <li>Realtime Visibility & Productivity</li>
          <li>Trust & Transparency</li>
          <li>Receive & Compare Prices</li>
        </ul>
      </div>
    ),
    image: rivexaTransforms,
    order: "imageFirst",
  },
];

export const TITLE_CONSTANTS = {
  RIVEXA_SECTION_TITLE: "Why Choose rivexa for Bags & Accesories ?",
  EXPERTISE_SECTION_TITLE: "Our Expertise in Bags & Accesories ",
};
export const RIVEXA_CONTENT_OPTIONS = [
  {
    id: "1",
    title: "Artisanal Craftsmanship",
    image: c1,
    icon: icon1,
    activeIcon: icon1Active,
    descriptions: [
      "India is renowned for its traditional craftsmanship and artisanal skills, which result in unique and high-quality products. Techniques like hand-weaving, embroidery, and beadwork enhance Indian bags and accessories, distinguishing them in the global market.",
    ],
  },
  {
    id: "2",
    title: "Diverse Material Availability",
    image: c2,
    icon: icon2,
    activeIcon: icon2Active,
    descriptions: [
      "India offers a wide variety of raw materials, including eco-friendly options like jute and organic cotton. This diversity allows for a broader range of products that meet the growing demand for sustainable and ethically produced goods.",
    ],
  },
  {
    id: "3",
    title: "Compliance with Ethical Standards",
    image: c3,
    icon: icon3,
    activeIcon: icon3Active,
    descriptions: [
      "Increasingly, global consumers and businesses are prioritising ethical production standards. Indian manufacturers follow fair trade practices, providing better working conditions and fair wages, a key selling point for ethical buyers.",
    ],
  },
  {
    id: "4",
    title: "Government Support and Initiatives:",
    image: c4,
    icon: icon4,
    activeIcon: icon4Active,
    descriptions: [
      'The Indian government has launched initiatives like the "Make in India" campaign to boost exports by promoting local manufacturing and improving global competitiveness. Subsidies, tax benefits, and easier export processes support businesses in scaling their operations.',
    ],
  },
  {
    id: "5",
    title: "Adaptability and Customization",
    image: c5,
    icon: icon5,
    activeIcon: icon5Active,
    descriptions: [
      'Indian manufacturers are highly adaptable and capable of producing customised designs to meet specific market needs. The Indian government has introduced various initiatives, such as the "Make in India" campaign, to strengthen the export sector by promoting local manufacturing and increasing global competitiveness. This flexibility is crucial for brands looking to differentiate themselves with unique product offerings.',
    ],
  },
  {
    id: "6",
    title: "Rising Quality Standards",
    image: c6,
    icon: icon6,
    activeIcon: icon6Active,
    descriptions: [
      "With increasing investments in technology and infrastructure, the quality of Indian-manufactured goods has seen significant improvements. Modern production facilities and stringent quality control measures ensure that products meet international standards.",
    ],
  },
  {
    id: "7",
    title: "Sustainable Sourcing",
    image: c7,
    icon: icon7,
    activeIcon: icon7Active,
    descriptions: [
      "Eco-friendly Materials",
      "Ethical Manufacturing Practices",
      "Range of sustainable materials & fabrics",
      "Certifications and Standards",
    ],
  },
];

export const CATEGORIES = [
  {
    title: "Fashion Jewellery",
    imageSrc: e1,
    hoverContent:
      "Discover handcrafted jewellery that blends expert craftsmanship with modern elegance.",
  },
  {
    title: "Handbags",
    imageSrc: e2,
    hoverContent:
      "Elevate your collection with premium, artisanal and eco-friendly handbags crafted from high-quality materials.",
  },
  {
    title: "Purses",
    imageSrc: e3,
    hoverContent:
      "Elegant and functional purses that showcase intricate designs and sustainable craftsmanship.",
  },
  {
    title: "Duffle Bags",
    imageSrc: e4,
    hoverContent:
      "Durable and stylish duffle bags, perfect for both travel and everyday use.",
  },
  {
    title: "Tote Bags",
    imageSrc: e5,
    hoverContent:
      "Versatile tote bags made from eco-friendly fabrics, designed for style and utility.",
  },
  {
    title: "Explore More",
    imageSrc: e6,
    hoverContent:
      "Discover more innovative products that reflect your brand’s style and sustainability goals. ",
  },
];

export const FAQ_DATA = [
  {
    id: 1,
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our MOQs can vary depending on the product and fabric. However, we strive to be flexible and accommodate businesses of all sizes. Please contactus for a specific quote based on your needs.",
  },
  {
    id: 2,
    question: "What types of customization options do you offer? ",
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
    question: "Do you offer design and development assistance?",
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
    question: "What is your typical production turnaround time?",
    answer:
      "Production turnaround time can vary from supplier to supplier and can be discussed before making the agreement ",
  },
  {
    id: 5,
    question: "What do you mean by Verified Suppliers?",
    answer:
      "We at rivexa, do a thorough background check on our supplier base, on the following parameters: · Compliance Certification · Machinery & Manufacturing Capability · Design & Development Capabilities · Multi-Category Expertise",
  },
];
export const LOGOS = [
  { id: "logo1", src: l1 },
  { id: "logo2", src: l2 },
  { id: "logo3", src: l3 },
  { id: "logo4", src: l4 },
  { id: "logo5", src: l5 },
  { id: "logo6", src: l6 },
  { id: "logo7", src: l7 },
  { id: "logo8", src: l8 },
  { id: "logo9", src: l9 },
  { id: "logo10", src: l10 },
];

export const LEFT_SIDE_IMAGE = leftSideImage;
