/** @jsxImportSource @emotion/react */
import { memo } from "react";
import Image from "next/image";
import DownWhite from "@/assets/IGHomePage/down-white.webp";
import UpWhite from "@/assets/IGHomePage/up-white.webp";
import RoundWhite from "@/assets/IGHomePage/round-white.webp";

// Data for powering procurement items
const procurementItems = [
  { icon: DownWhite, title: "15-20%", text: "Sourcing Costs" },
  { icon: UpWhite, title: "40%", text: "Supplier Network" },
  { icon: RoundWhite, title: "2X", text: "Faster Turnaround" },
  { icon: UpWhite, title: "50%", text: "Product Range" },
  { icon: DownWhite, title: "30%", text: "Time to Market" },
  { icon: UpWhite, title: "95%", text: "Quality Assurance" },
];

// A reusable component for each procurement item
const PoweringItem = memo(({ icon, title, text }) => (
  <div className="poweringitem space-y-2 p-4 flex flex-col justify-center place-items-center align-middle items-center transform transition-transform duration-300 hover:scale-105">
    <Image src={icon} alt="" width={20} height={20} />
    <div className="poweringitemtitle">{title}</div>
    <div className="poweringitemtext">{text}</div>
  </div>
));

const PoweringProcurement = memo(() => {
  return (
    <div className="procurementsection mx-auto">
      <div className="mx-auto w-[90%] sm:w-[95%] xs:w-[95%] ssm:w-[90%] md:w-[90%] py-[3rem] flex flex-col justify-center items-center align-middle place-items-center">
        <div className="procurmenttitle">What you get from rivexa</div>
        <div className="mt-8 procurementdesc text-[2rem] sm:text-[1.5rem] xs:text-[1.5rem] ssm:text-[2rem] md:text-[2rem]">
          Powering Procurement, Driving Growth with rivexa
        </div>
        <div className="mt-8 flex flex-row flex-wrap gap-6 justify-center place-items-center align-middle items-center">
          {procurementItems.map(({ icon, title, text }, index) => (
            <PoweringItem key={index} icon={icon} title={title} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default PoweringProcurement;
