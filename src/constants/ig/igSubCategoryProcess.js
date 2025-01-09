import {
  vector1,
  vector2,
  vector3,
  vector4,
  MoldPreparationProcess,
  MaterialMeltingProcess,
  PouringProcess,
  SolidificationProcess,
  RemovalProcess,
  FinishingProcess,
  BilletHeatingProcess,
  DiePreparationProcess,
  ForgingProcess,
  CoolingProcess,
  TrimingProcess,
  InspectionProcess,
  DesignProcess,
  MaterialSelectionProcess,
  SetupProcess,
  MachiningProcess,
  CuttingProcess,
  MeltingInjectionProcess,
  EjectionProcess,
  PatternCreationProcess,
  MoldAssemblyProcess,
  PatternRemovalProcess,
  AssemblyProcess,
  ShellBuildingProcess,
  DewaxingProcess,
  CastingProcess,
  ProgrammingProcess,
  ExtrusionProcess,
  WeldingProcess,
  TestingProcess,
  MaterialPreparationProcess,
  JoiningProcess,
  BendingProcess,
  FormingProcess,
  Positioning,
  PlacingBillet,
} from "../../config/GetImages";

const categoryProcessData = {
  casting: [
    {
      id: 1,
      items: [
        {
          title: "Mold Engineering",
          description: `Designing and creating precise molds using CAD/CAM technology`,
          image: MoldPreparationProcess,
          vector: vector1,
        },
        {
          title: "Material Melting",
          description: `Heating raw materials till it reaches a molten state`,
          image: MaterialMeltingProcess,
          vector: vector2,
        },
        {
          title: "Controlled Pouring",
          description: `Precision-pouring molten metal into the prepared mold`,
          image: PouringProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Monitored Solidification",
          description: `Ensuring proper cooling for optimal microstructure`,
          image: SolidificationProcess,
          vector: vector3,
        },
        {
          title: "Careful Extraction",
          description: `Removing the solidified casting with minimal stress`,
          image: RemovalProcess,
          vector: vector4,
        },
        {
          title: "Quality Finishing",
          description: `Applying advanced treatments for superior surface quality`,
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
  forging: [
    {
      id: 1,
      items: [
        {
          title: "Billet Heating",
          description: `Heating the metal to a malleable temperature for shaping.`,
          image: BilletHeatingProcess,
          vector: vector1,
        },
        {
          title: "Die Preparation",
          description: `Designing and machining dies to shape the metal accurately.`,
          image: DiePreparationProcess,
          vector: vector2,
        },
        {
          title: "Forging",
          description: `Applying compressive forces to shape the metal into the desired form.`,
          image: ForgingProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Cooling",
          description: `Cooling the forged part to set its shape and properties.`,
          image: CoolingProcess,
          vector: vector3,
        },
        {
          title: "Trimming",
          description: `Removing excess material from the forged part.`,
          image: TrimingProcess,
          vector: vector4,
        },
        {
          title: "Inspection",
          description: `Ensuring the forged part meets quality standards.`,
          image: InspectionProcess,
          vector: null,
        },
      ],
    },
  ],
  machining: [
    {
      id: 1,
      items: [
        {
          title: "Design",
          description: `Create a detailed blueprint or CAD model of the part to be machined.`,
          image: DesignProcess,
          vector: vector1,
        },
        {
          title: "Material Selection",
          description: `Choose the appropriate material based on the part's requirements and machining capabilities.`,
          image: MaterialSelectionProcess,
          vector: vector2,
        },
        {
          title: "Setup",
          description: `Securing the workpieces and then selecting the required machining parameters.`,
          image: SetupProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Machining",
          description: `Computer-aided machines remove material from the workpieces to acquire the pre-designed shape dimensions. `,
          image: MachiningProcess,
          vector: vector3,
        },
        {
          title: "Inspection",
          description: `Evaluating dimensions and overall quality of the final part to ensure it fits specifications.  `,
          image: InspectionProcess,
          vector: vector4,
        },
        {
          title: "Finishing",
          description: `Perform secondary operations, such as deburring or surface treatment, to improve the part's final appearance and functionality.`,
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
  fabrication: [
    {
      id: 1,
      items: [
        {
          title: "Design",
          description: `Building CAD models or detailed blueprints specifying features and dimensions of the end product. `,
          image: DesignProcess,
          vector: vector1,
        },
        {
          title: "Material Preparation",
          description: `Preparation of raw materials to ensure that they fit the required specifications for composition, strength, and size. `,
          image: MaterialPreparationProcess,
          vector: vector2,
        },
        {
          title: "Cutting",
          description: `Application of appropriate tools like plasma torches, saws, or lasers to cut materials to the specified sizes and shapes. `,
          image: CuttingProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Forming",
          description: `Manipulating the material's exterior shape using techniques like pressing, stamping or rolling to acquire the right shape. `,
          image: FormingProcess,
          vector: vector3,
        },
        {
          title: "Joining",
          description: `Weld, bolt, or bond the fabricated pieces to form the final product.`,
          image: JoiningProcess,
          vector: vector4,
        },
        {
          title: "Finishing",
          description: `Apply surface treatments, coatings, or additional processes to enhance the appearance and functionality of the fabricated product.`,
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
  extrusion: [
    {
      id: 1,
      items: [
        {
          title: "",
          description: "",
          image: "",
          vector: vector1,
        },
        {
          title: "",
          description: "",
          image: "",
          vector: vector2,
        },
        {
          title: "",
          description: "",
          image: "",
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "",
          description: "",
          image: "",
          vector: vector3,
        },
        {
          title: "",
          description: "",
          image: "",
          vector: vector4,
        },
        {
          title: "",
          description: "",
          image: "",
          vector: null,
        },
      ],
    },
  ],
  aluminiumdiecasting: [
    {
      id: 1,
      items: [
        {
          title: "Mold Preparation",
          description:
            "Precision-engineered aluminum casting die molds crafted for optimal flow and solidification",
          image: MoldPreparationProcess,
          vector: vector1,
        },
        {
          title: "Fusion and Injection",
          description:
            ": High-speed introduction of molten aluminum into the mold cavity",
          image: MeltingInjectionProcess,
          vector: vector2,
        },
        {
          title: "Rapid Cooling",
          description:
            "Controlled solidification for optimal microstructure and properties",
          image: CoolingProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Precise Extraction",
          description:
            "Automated removal ensuring minimal stress and zero defects",
          image: EjectionProcess,
          vector: vector3,
        },
        {
          title: "Advanced Finishing",
          description:
            "CNC machining and surface treatments for flawless results",
          image: TrimingProcess,
          vector: vector4,
        },
        {
          title: "Rigorous Inspection",
          description:
            "Multi-point quality checks for structural integrity, surface finish, dimensional accuracy using cutting-edge metrology",
          image: InspectionProcess,
          vector: null,
        },
      ],
    },
  ],
  sandcasting: [
    {
      id: 1,
      items: [
        {
          title: "Pattern Creation",
          description:
            "Design and shape the pattern to form the mold cavity accurately",
          image: PatternCreationProcess,
          vector: vector1,
        },
        {
          title: "Mold Assembly",
          description:
            "  Pack sand around the pattern to establish the mold structure.  ",
          image: MoldAssemblyProcess,
          vector: vector2,
        },
        {
          title: "Pattern Removal",
          description: "  Remove the pattern while keeping the mold cavity intact.  ",
          image: PatternRemovalProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Pouring",
          description: "  Fill the mold with molten metal to form the part.  ",
          image: PouringProcess,
          vector: vector3,
        },
        {
          title: "Cooling",
          description: "Let the metal solidify within the mold.  ",
          image: CoolingProcess,
          vector: vector4,
        },
        {
          title: "Removal and Finishing",
          description:
            "Extract the solidified part and perform the finishing touches for accuracy. ",
          image: RemovalProcess,
          vector: null,
        },
      ],
    },
  ],
  investmentcasting: [
    {
      id: 1,
      items: [
        {
          title: "Pattern Creation",
          description: "Create a precise wax model of the desired component.",
          image: PatternCreationProcess,
          vector: vector1,
        },
        {
          title: "Assembly",
          description:
            "Attach wax patterns to a central wax sprue, forming a tree-like structure.",
          image: AssemblyProcess,
          vector: vector2,
        },
        {
          title: "Shell Building",
          description:
            "Coat the assembly in ceramic slurry and sand layers to form a solid shell.",
          image: ShellBuildingProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Dewaxing",
          description:
            "Remove the wax by melting it out of the shell, leaving a cavity.",
          image: DewaxingProcess,
          vector: vector3,
        },
        {
          title: "Casting",
          description: "Pour molten metal into the cavity to create the part.",
          image: CastingProcess,
          vector: vector4,
        },
        {
          title: "Finishing",
          description:
            "Remove the shell and spruce and perform any final finishing touches on the casting.",
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
  opendieforging: [
    {
      id: 1,
      items: [
        {
          title: "Billet Heating",
          description:
            "Heat the metal billet to a malleable temperature for forging.",
          image: BilletHeatingProcess,
          vector: vector1,
        },
        {
          title: "Preparing Dies",
          description: "Prepare the open dies to shape the metal accurately.",
          image: DiePreparationProcess,
          vector: vector2,
        },
        {
          title: "Positioning",
          description: "Place the heated billet between the open dies.",
          image: Positioning,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Forging",
          description:
            "Apply compressive forces to shape the metal into the desired form.",
          image: ForgingProcess,
          vector: vector3,
        },
        {
          title: "Cooling",
          description: "Allow the forged part to cool and set its shape.",
          image: CoolingProcess,
          vector: vector4,
        },
        {
          title: "Finishing",
          description:
            "Perform any necessary secondary operations to achieve final dimensions and surface quality.",
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
  closeddieforging: [
    {
      id: 1,
      items: [
        {
          title: "Die Preparation",
          description:
            "Design and fabricate closed dies to shape the metal accurately.",
          image: DiePreparationProcess,
          vector: vector1,
        },
        {
          title: "Billet Heating",
          description:
            "Heat the metal billet to a malleable temperature for forging.",
          image: BilletHeatingProcess,
          vector: vector2,
        },
        {
          title: "Placing Billet",
          description: "Position the heated billet between the closed dies.",
          image: PlacingBillet,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Forging",
          description:
            "Apply high pressure to shape the metal into the die cavities.",
          image: ForgingProcess,
          vector: vector3,
        },
        {
          title: "Cooling",
          description: "Allow the forged part to cool within the closed dies.",
          image: CoolingProcess,
          vector: vector4,
        },
        {
          title: "Ejection",
          description:
            "Remove the forged part from the closed dies for further processing.",
          image: EjectionProcess,
          vector: null,
        },
      ],
    },
  ],
  cncmachining: [
    {
      id: 1,
      items: [
        {
          title: "Design",
          description:
            "Create a digital model or blueprint of the part to be machined.",
          image: DesignProcess,
          vector: vector1,
        },
        {
          title: "Programming",
          description:
            "Develop a CNC program specifying tool paths, speeds, and feeds.",
          image: ProgrammingProcess,
          vector: vector2,
        },
        {
          title: "Setup",
          description:
            "Secure the workpiece and load the program into the CNC machine.",
          image: SetupProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Machining",
          description:
            "Execute the programmed instructions to remove material and shape the part accurately.",
          image: MachiningProcess,
          vector: vector3,
        },
        {
          title: "Inspection",
          description:
            "Verify dimensions and quality during and after machining.",
          image: InspectionProcess,
          vector: vector4,
        },
        {
          title: "Finishing",
          description:
            "Perform any necessary post-processing operations for surface quality and accuracy.",
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
  conventionalmachining: [
    {
      id: 1,
      items: [
        {
          title: "Design",
          description:
            "Create a blueprint or CAD model of the part to be machined.",
          image: DesignProcess,
          vector: vector1,
        },
        {
          title: "Material Selection",
          description:
            "Choose a suitable material based on mechanical properties and machining characteristics.",
          image: MaterialSelectionProcess,
          vector: vector2,
        },
        {
          title: "Setup",
          description:
            "Secure the workpiece and select appropriate cutting tools.",
          image: SetupProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Machining",
          description:
            "Use manual or semi-automated methods to shape the part.",
          image: MachiningProcess,
          vector: vector3,
        },
        {
          title: "Inspection",
          description:
            "Verify dimensions and surface finish to ensure quality.",
          image: InspectionProcess,
          vector: vector4,
        },
        {
          title: "Finishing",
          description:
            "Perform secondary operations like deburring or polishing for final part refinement.",
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
  equipmentfabrication: [
    {
      id: 1,
      items: [
        {
          title: "Design",
          description:
            "Create blueprints or CAD models, meticulously detailing every aspect of your equipment, from form to function.",
          image: DesignProcess,
          vector: vector1,
        },
        {
          title: "Material Selection",
          description:
            "Choose the perfect materials to match your equipment's purpose, balancing strength, durability, and cost.",
          image: MaterialSelectionProcess,
          vector: vector2,
        },
        {
          title: "Machining",
          description:
            "Shape and refine components with precision, using state-of-the-art cutting and milling techniques.",
          image: MachiningProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Welding",
          description:
            "Join components with expert welding, ensuring structural integrity and longevity.",
          image: WeldingProcess,
          vector: vector3,
        },
        {
          title: "Assembly",
          description:
            "Bring all elements together, transforming individual parts into a cohesive, functional unit",
          image: AssemblyProcess,
          vector: vector4,
        },
        {
          title: "Testing",
          description:
            "Rigorously evaluate the finished equipment, ensuring it meets all performance and safety standards.",
          image: TestingProcess,
          vector: null,
        },
      ],
    },
  ],
  sheetmetalfabrication: [
    {
      id: 1,
      items: [
        {
          title: "Design",
          description:
            "Create detailed plans or CAD models to define the shape and dimensions of the sheet metal components.",
          image: DesignProcess,
          vector: vector1,
        },
        {
          title: "Material Selection",
          description:
            "Choose appropriate sheet metal based on factors like thickness, strength, and corrosion resistance.",
          image: MaterialSelectionProcess,
          vector: vector2,
        },
        {
          title: "Cutting",
          description:
            "Use shearing, laser cutting, or plasma cutting to cut the sheet metal into the desired shapes.",
          image: CuttingProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Bending",
          description:
            "Form the sheet metal into specific angles or curves using press brakes or other bending equipment.",
          image: BendingProcess,
          vector: vector3,
        },
        {
          title: "Assembly",
          description:
            "Join individual sheet metal components together through welding, riveting, or fastening.",
          image: AssemblyProcess,
          vector: vector4,
        },
        {
          title: "Finishing",
          description:
            "Apply surface treatments like painting, powder coating, or polishing to improve appearance and durability.",
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
  structuralfabrication: [
    {
      id: 1,
      items: [
        {
          title: "Design",
          description:
            " Build detailed CAD models or blueprints for structural integrity and adherence to specifications. .",
          image: DesignProcess,
          vector: vector1,
        },
        {
          title: "Material Selection",
          description:
            "Selection of appropriate materials based on project requirements. ",
          image: MaterialSelectionProcess,
          vector: vector2,
        },
        {
          title: "Cutting",
          description:
            "Use laser, plasma, or other precision cutting methods to shape materials to size accurately.",
          image: CuttingProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Welding",
          description:
            "Join structural components together securely using advanced welding techniques.",
          image: WeldingProcess,
          vector: vector3,
        },
        {
          title: "Assembly",
          description:
            "Assemble fabricated components into the desired framework or structure.",
          image: AssemblyProcess,
          vector: vector4,
        },
        {
          title: "Inspection",
          description:
            "Conduct thorough inspections to ensure quality and compliance with all relevant standards.",
          image: InspectionProcess,
          vector: null,
        },
      ],
    },
  ],
  aluminiumextrusion: [
    {
      id: 1,
      items: [
        {
          title: "Billet Heating",
          description:
            "Preheat aluminum billets to improve malleability and reduce forming forces.",
          image: BilletHeatingProcess,
          vector: vector1,
        },
        {
          title: "Die Preparation",
          description:
            "Design and prepare custom dies to accurately create the desired cross-sectional profile.",
          image: DiePreparationProcess,
          vector: vector2,
        },
        {
          title: "Extrusion",
          description:
            "Force the heated billet through the die to form the desired shape.",
          image: ExtrusionProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Cooling",
          description:
            "Cool the extruded profile to stabilize its dimensions and properties.",
          image: CoolingProcess,
          vector: vector3,
        },
        {
          title: "Cutting",
          description: "Cut the extruded profiles into desired lengths.",
          image: CuttingProcess,
          vector: vector4,
        },
        {
          title: "Finishing",
          description:
            "Perform any necessary surface treatments or machining operations to meet specifications.",
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
  injectionmolding: [
    {
      id: 1,
      items: [
        {
          title: "Material Preparation ",
          description: "Prepare and load the raw polymer material.",
          image: MoldPreparationProcess,
          vector: vector1,
        },
        {
          title: "Mold Design ",
          description:
            "Design and prepare custom molds to meet your requirements.",
          image: DesignProcess,
          vector: vector2,
        },
        {
          title: "Injection",
          description:
            "Shape and refine components to precise dimensions using cutting, milling, and drilling techniques.",
          image: MeltingInjectionProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Cooling",
          description:
            "Cool the molded component to retain its shape and stability.",
          image: CoolingProcess,
          vector: vector3,
        },
        {
          title: "Ejection",
          description: "Eject the finished product from the mold.",
          image: EjectionProcess,
          vector: vector4,
        },
        {
          title: "Finishing",
          description:
            "Perform post-processing steps such as trimming, polishing, or coating to meet the required specifications.",
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
  molding: [
    {
      id: 1,
      items: [
        {
          title: "Material Selection",
          description:
            "Choosing the kinds of plastic for your project needs based on flexibility, environmental, and durability considerations. ",
          image: DesignProcess,
          vector: vector1,
        },
        {
          title: " Mold Design ",
          description:
            "Choose suitable materials based on strength, durability, and compatibility with operating conditions.",
          image: MaterialSelectionProcess,
          vector: vector2,
        },
        {
          title: "Molding Process",
          description:
            "Shape and refine components to precise dimensions using cutting, milling, and drilling techniques.",
          image: MachiningProcess,
          vector: null,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Cooling",
          description:
            "Allow the molded part to cool and solidify, ensuring dimensional accuracy.",
          image: CoolingProcess,
          vector: vector3,
        },
        {
          title: "Demolding",
          description: "Remove the finished plastic component from the mold.",
          image: AssemblyProcess,
          vector: vector4,
        },
        {
          title: "Finishing",
          description:
            "Perform necessary finishing operations such as trimming, painting, or polishing to achieve the final product.",
          image: FinishingProcess,
          vector: null,
        },
      ],
    },
  ],
};

export const getCategoryProcess = (categoryname) => {
  const z = 0;
  return categoryProcessData[categoryname] || [];
};
