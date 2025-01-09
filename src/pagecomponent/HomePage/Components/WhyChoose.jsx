/** @jsxImportSource @emotion/react */
import { memo } from "react";
import Image from "next/image";
import TrustIcon from "@/assets/Home/trust.webp";
import LegacyIcon from "@/assets/Home/Legacy.webp";
import ExpertiseIcon from "@/assets/Home/expertise.webp";

// Data for each section
const sections = [
  {
    title: "Trust and Transparency",
    icon: TrustIcon,
    width: 232,
    height: 261,
    items: [
      "Discover full transparency using an online RFx process, multiple supplier quotes, bid management, contract signing, and collaboration tools",
      "Select highly curated manufacturers, rated on various criteria, with detailed profiles showcasing capabilities and certifications",
      "100% visibility on price quotations from suppliers, online negotiations and landed cost after adding a minimal rivexa platform fee",
      "Value Added Services including quality checks, cross border logistics, B2B payment gateway enabled via partnerships with leading companies",
    ],
    showConnector: true, // Add condition to show connector
    connectorClass:
      "whychoosebrandone -top-[54px] md:-top-[54px] lg:-top-[54px] xl:-top-[36px] h-[10rem] md:h-[10rem] lg:h-[10rem] xl:h-[8rem] left-[100px] md:left-[100px] lg:left-[100px] xl:left-[140px]",
  },
  {
    title: "Legacy",
    icon: LegacyIcon,
    width: 276,
    height: 304,
    items: [
      "Backed by Tata Steel and SAIL, rivexa is the latest flagship offering of mjunction, carving out a niche for itself as a B2B export marketplace",
      "Fueled by our vision, mission and values, we strive to deliver exceptional outcomes through continuous improvement and innovation",
      "Committed to helping MSME's in India embrace data first approach and digital transformation for better international trade engagement",
      "We are at the forefront of forging synergistic partnerships identifying opportunities for cooperation and trade promotion",
    ],
    showConnector: true,
    connectorClass:
      "whychoosebrandtwo -top-[75px] md:-top-[75px] lg:-top-[75px] xl:-top-[60px] h-[12rem] md:h-[12rem] lg:h-[12rem] xl:h-[8.25rem] left-[100px] md:left-[100px] lg:left-[100px] xl:left-[140px]",
  },
  {
    title: "Category Expertise",
    icon: ExpertiseIcon,
    width: 232,
    height: 232,
    items: [
      "rivexa excels and specializes in understanding and meeting the unique requirements of buyers within each category",
      "rivexa offers robust operational support to facilitate end-to-end transactions and deliver seamless user experience.",
      "Our on-ground team ensures proactive time & action management, quality checks and compliant processes to ensure on-time delivery.",
      "Revolutionizing Industrial Sourcing: Discover rivexa's precision in manufacturing intricate components and sturdy parts",
    ],
    showConnector: false, // No connector needed for this section
  },
];

// Reusable Section Component
const Section = ({
  title,
  icon,
  width,
  height,
  items,
  showConnector,
  connectorClass,
}) => (
  <div className="mt-[3rem]">
    <div className="flex flex-row sm:flex-col xs:flex-col ssm:flex-col md:flex-row">
      <div className="w-1/4 sm:w-full xs:w-full ssm:w-full md:w-1/4 flex-shrink-0 flex justify-center items-center align-middle">
        <Image
          src={icon}
          alt={title}
          loading="lazy"
          width={width}
          height={height}
        />
      </div>
      <div className="w-3/4 sm:w-full xs:w-full ssm:w-full md:w-3/4">
        <p className="whychoosesectiontitle">{title}</p>
        <ul className="whchooselist">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Conditional absolute connector */}
    {showConnector && (
      <div
        className={`relative sm:hidden xs:hidden ssm:hidden md:block lg:block xl:block`}
      >
        <div className={`${connectorClass} absolute`} />
      </div>
    )}
  </div>
);

const WhyChoose = memo(() => {
  return (
    <div className="w-[85%] sm:w-[95%] xs:w-[95%] ssm:w-[90%] md:w-[85%] mx-auto mt-[4rem] py-[3rem]">
      <div className="whychoose py-[3rem] px-[3rem] sm:px-[1rem] xs:px-[1rem] ssm:px-[1rem] md:px-[3rem] rounded-[80px]">
        <div className="whycooseustext">Why Choose Us</div>
        <div className="whycooseussubtext mt-3">
          Your digital co-pilot for seamless, end-to-end sourcing.
        </div>

        {/* Render Sections */}
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            icon={section.icon}
            width={section.width}
            height={section.height}
            items={section.items}
            showConnector={section.showConnector}
            connectorClass={section.connectorClass}
          />
        ))}
      </div>
    </div>
  );
});

export default WhyChoose;
