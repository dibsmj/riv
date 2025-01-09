/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { memo, useState } from "react";

const capabilitiesData = [
  {
    title: "Casting",
    description:
      "Molten metal forming techniques create precise components for diverse industrial applications.",
    subItems: [
      {
        name: "Aluminium Die Casting",
        link: "/industrial-goods/casting/aluminium-die-casting",
      },
      { name: "Sand Casting", link: "/industrial-goods/casting/sand-casting" },
      {
        name: "Investment Casting",
        link: "/industrial-goods/casting/investment-casting",
      },
    ],
    bgclassname: `castingcap`,
    link: `/industrial-goods/casting`,
  },
  {
    title: "Forging",
    description:
      "Industrial product suppliers strengthen metal, producing tough parts for demanding applications.",
    subItems: [
      { name: "Open Die Forging", link: "/industrial-goods/forging/open-die-forging" },
      {
        name: "Closed Die Forging",
        link: "/industrial-goods/forging/closed-die-forging",
      },
    ],
    bgclassname: `forgingcap`,
    link: `/industrial-goods/forging`,
  },
  {
    title: "Machining",
    description:
      "Precise material removal by custom industrial products manufacturers for exact specifications.",
    subItems: [
      {
        name: "CNC Machining",
        link: "/industrial-goods/machining/cnc-machining",
      },
      {
        name: "Conventional Machining",
        link: "/industrial-goods/machining/conventional-machining",
      },
    ],
    bgclassname: `machiningcap`,
    link: `/industrial-goods/machining`,
  },
  {
    title: "Fabrication",
    description:
      "Custom industrial products manufacturers combine processes for complex structural solutions.",
    subItems: [
      {
        name: "Equipment Fabrication",
        link: "/industrial-goods/fabrication/equipment-fabrication",
      },
      {
        name: "Sheet Metal Fabrication",
        link: "/industrial-goods/fabrication/sheet-metal-fabrication",
      },
      {
        name: "Structural Fabrication",
        link: "/industrial-goods/fabrication/structural-fabrication",
      },
    ],
    bgclassname: `fabricationcap`,
    link: `/industrial-goods/fabrication`,
  },
  {
    title: "Extrusion",
    description:
      "Industrial products manufacturers create long, uniform cross-sections for profiles and tubing.",
    subItems: [
      {
        name: "Extrusion",
        link: "/industrial-goods/extrusion/aluminium-extrusion",
      },
    ],
    bgclassname: `extrusioncap`,
    link: `/industrial-goods/extrusion/aluminium-extrusion`,
  },
  {
    title: "Injection Molding",
    description:
      "Custom industrial products manufacturers produce complex plastic parts at high speeds.",
    subItems: [{ name: "Injection Molding", link: "/industrial-goods/molding/injection-molding" }],
    bgclassname: `injectioncap`,
    link: `/industrial-goods/molding/injection-molding`,
  },
];

const CapabilityCard = ({
  title,
  link,
  description,
  subItems,
  bgclassname,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={bgclassname}>
      <div
        className="capabilitiesnew relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          <div className="p-5">
            <Link
              href={link}
              className=" cursor-pointer no-underline border-none"
            >
              <div className="categoryname text-left">{title}</div>
            </Link>
            <div className="flex flex-row flex-wrap gap-2 absolute bottom-5 right-5 left-5 categorydescription">
              {description}
            </div>
          </div>
        ) : (
          <div className="p-5">
            <Link
              href={link}
              className=" cursor-pointer no-underline border-none"
            >
              <div className="categoryname text-left">{title}</div>
            </Link>
            <div className="categorydescription mt-8 animate-fade-up">{description}</div>
            <div className="flex flex-row flex-wrap gap-2 absolute bottom-5 left-5 animate-fade-up">             
              {subItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="capsubrounditem no-underline border-none py-3 w-[148px]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Capabilities = memo(() => {
  return (
    <div className="mx-auto w-[85%] sm:w-[95%] xs:w-[95%] ssm:w-[95%] md:w-[85%]">
      <div className="captitle">Our capabilities</div>
      <div className="capdesc mt-4 text-[2rem] sm:text-[1.5rem] xs:text-[1.5rem] ssm:text-[2rem] md:text-[2rem]">
        Precision-engineered metal parts: Customized solutions for every
        industry.
      </div>
      <div className="mt-6 mx-auto gap-4 grid grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 place-items-center">
        {capabilitiesData.map(
          ({ link, title, description, subItems, bgclassname }) => (
            <CapabilityCard
              key={title}
              title={title}
              link={link}
              description={description}
              subItems={subItems}
              bgclassname={bgclassname}
            />
          )
        )}
      </div>
    </div>
  );
});

export default Capabilities;
