/** @jsxImportSource @emotion/react */
import { memo } from "react";
import Image from "next/image";
import DownBlackIcon from "@/assets/IGHomePage/down_black.webp";
import UpBlackIcon from "@/assets/IGHomePage/up_black.webp";

// Data array for procurement details
const procurementDetails = [
  { icon: DownBlackIcon, value: "5-7%", text: "COGM" },
  { icon: UpBlackIcon, value: "20%", text: "MACHINERY UTILIZATION" },
  { icon: UpBlackIcon, value: "2X", text: "EXPORT VOLUME" },
  { icon: DownBlackIcon, value: "30%", text: "LEAD TIME" },
  { icon: UpBlackIcon, value: "15%", text: "PRODUCTION EFFICIENCY" },
  { icon: UpBlackIcon, value: "25%", text: "MARKET REACH" },
];

// Reusable component for a single procurement detail
const ProcurementDetailItem = memo(({ icon, value, text }) => (
  <div className="w-[20%] prodetailsitem p-8 space-y-4 flex flex-col justify-center place-items-center align-middle items-center transform transition-transform duration-300 hover:scale-105">
    <Image src={icon} alt="" width={21} height={25} />
    <div className="prodetailsitemvalue text-[2.25rem] sm:text-[1.75rem] xs:text-[1.75rem] ssm:text-[2rem] md:text-[2.25rem]">
      {value}
    </div>
    <div className="prodetailsitemtext text-[1rem] sm:text-[.75rem] xs:text-[.75rem] ssm:text-[1rem] md:text-[1rem]">
      {text}
    </div>
  </div>
));

const ProcurementDetails = memo(() => {
  return (
    <div className="mx-auto w-[85%] sm:w-[95%] xs:w-[95%] ssm:w-[90%] md:w-[85%]">
      <div className="prodetailstile text-center text-[1.5rem] sm:text-[1rem] xs:text-[1rem] ssm:text-[1.5rem] md:text-[1.5rem]">
        Sourcing Costs, Supplier Network, Faster Turnaround, Product Range,
        Time-To-Market, Quality Assurance
      </div>
      <div className="mt-8 gap-8 flex flex-row flex-wrap justify-center items-center align-middle place-items-center">
        {procurementDetails.map(({ icon, value, text }, index) => (
          <ProcurementDetailItem
            key={index}
            icon={icon}
            value={value}
            text={text}
          />
        ))}
      </div>
    </div>
  );
});

export default ProcurementDetails;
