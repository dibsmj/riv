/** @jsxImportSource @emotion/react */
import { useState } from "react";
import PropTypes from "prop-types";
import PerfectMaterialStyles from "./PerfectMaterialStyles";
import RoundButton from "@/component/RoundButton";

const materials = [
  {
    name: "A380",
    description:
      "The most widely used and popular Aluminum alloy as it has strong mechanical and physical properties. These include high resistance to corrosion and its ability to withstand high temperatures. Great dimensional stability, allowing thin walls and complex near net shapes to retain its casted geometry. It is also a good thermal and electrical conductor.",
  },
  {
    name: "A360",
    description:
      "Offers excellent ductility, great at withstanding higher temperatures, and a high resistance to corrosion. Because of these properties, however, it is harder to cast than A380.",
  },
  {
    name: "A383",
    description:
      "For intricate parts that need the precise characteristics of die filling, A383 is the most sought after alloy for the job. With regards to its properties, this alloy still retains strength at very high temperatures, and has great fluidity when molten. It is also highly resistant to corrosion.",
  },
  {
    name: "A413",
    description:
      "It is light in weight, has excellent fluidity and pressure tightness, and is resistant to hot cracking. This alloy is used to cast intricate components, but cab be subject to higher rates of impurity.",
  },
  {
    name: "AlSi9Cu3",
    description:
      "A medium-light alloy with high physical properties and good resistance to oxidation and corrosion. It has a narrow composition range, good resistance to heat treatment, and excellent mechanical properties. The alloy produces light products that are high in resistance to wear compared to other alloys.",
  },
  {
    name: "AlS11Cu2",
    description:
      "Exhibits excellent fluidity during casting, allowing for intricate shapes and thin-walled components. Good mechanical properties, including decent tensile strength and hardness. Being lightweight it is ideal for parts where weight reduction is crucial.",
  },
  {
    name: "AlSi10Mg",
    description:
      "A lightweight, high-strength aluminum alloy that is widely used in the aerospace, automotive, and medical industries. Its unique combination of aluminum, silicon, and magnesium makes it an ideal material for additive manufacturing processes, such as 3D printing.",
  },
];

const PerfectMaterial = ({ title }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(true);
  const [activeMaterial, setActiveMaterial] = useState(materials[0]);
  console.log(activeMaterial.name);
  return (
    <div css={PerfectMaterialStyles} className="mb-8">
      <h2 className="text-3xl font-bold text-center text-primaryWhite">
        {title}
      </h2>
      <h3 className="font-['Urbanist'] text-primaryWhite text-xl text-center font-normal">
        Our manufacturing partners offer an extensive selection of materials to
        meet your specific needs for precision die casted products. Choose from
        the following high-quality options:
      </h3>
      <div className="relative top-4 mx-auto w-[80%] flex flex-wrap justify-center text-center gap-5">
        {materials.map((material) => (
          <div
            key={material.name}
            className={`partnamesub ${
              activeMaterial.name === material.name
                ? "activeButtom text-primaryBlack"
                : "nonActiveButton text-primaryWhite"
            }`}
          >
            <button
              type="button"
              className={`cursor-pointer border-none bg-transparent ${
                activeMaterial.name === material.name
                  ? "text-primaryBlack"
                  : "text-primaryWhite"
              }`}
              onClick={() => setActiveMaterial(material)}
            >
              {material.name}
            </button>
          </div>
        ))}
      </div>
      <div className="w-[80%] mx-auto pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="materialTitle text-[90px] xs:text-[50px] sm:text-[50px] ssm:[70px] md:text-[90px] lg:text-[90px] flex items-center justify-center text-center">
          {activeMaterial.name}
        </div>
        <div className="flex items-center">
          <div className="text-left">
            <div className="font-['Urbanist'] text-[16px] text-primaryWhite">
              {activeMaterial.description}
            </div>
            <div className="text-left mt-7">
              <RoundButton
                buttonID={`start_your_journey`}
                title={"Submit Enquiry"}
                isEnquiryOpen={isEnquiryOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PerfectMaterial.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PerfectMaterial;
