import {
  AluminumCasting,
  SandCasting,
  InvestmentCasting,
  OpenDieForging,
  ClosedDieForging,
  CNCMachining,
  ConventionalMachining,
  EquipmentFabrication,
  SheetMetalFabrication,
  StructuralFabrication,
  AluminiumExtrusion,
  Casting,
  Forging,
  Machining,
  Fabrication,
  Extrusion,
} from '../../config/GetImages';

const subSubCategoryData = {
  casting: [
    {
      image: AluminumCasting,
      name: 'Aluminium Die Casting',
      link: '/industrial-goods/casting/aluminium-die-casting',
    },
    {
      image: SandCasting,
      name: 'Sand Casting',
      link: '/industrial-goods/casting/sand-casting',
    },
    {
      image: InvestmentCasting,
      name: 'Investment Casting',
      link: '/industrial-goods/casting/investment-casting',
    },
  ],
  forging: [
    {
      image: OpenDieForging,
      name: 'Open Die Forging',
      link: '/industrial-goods/forging/open-die-forging',
    },
    {
      image: ClosedDieForging,
      name: 'Closed Die Forging',
      link: '/industrial-goods/forging/closed-die-forging',
    },
  ],
  machining: [
    {
      image: CNCMachining,
      name: 'CNC Machining',
      link: '/industrial-goods/machining/cnc-machining',
    },
    {
      image: ConventionalMachining,
      name: 'Conventional Machining',
      link: '/industrial-goods/machining/conventional-machining',
    },
  ],
  fabrication: [
    {
      image: EquipmentFabrication,
      name: 'Equipment Fabrication',
      link: '/industrial-goods/fabrication/equipment-fabrication',
    },
    {
      image: SheetMetalFabrication,
      name: 'Sheet Metal Fabrication',
      link: '/industrial-goods/fabrication/sheet-metal-fabrication',
    },
    {
      image: StructuralFabrication,
      name: 'Structural Fabrication',
      link: '/industrial-goods/fabrication/structural-fabrication',
    },
  ],
  extrusion: [
    {
      image: AluminiumExtrusion,
      name: 'Aluminium Extrusion',
      link: '/industrial-goods/extrusion/aluminium-extrusion',
    },
  ],
  injectionmolding: [
    {
      image: AluminiumExtrusion,
      name: 'Aluminium Extrusion',
      link: '/industrial-goods/injection-molding/plastic-molding',
    },
  ],
};

export const getSubSubCategory = (categoryName) => {
  const z = 0;
  return subSubCategoryData[categoryName] || [];
};

const subSubCategoryDataFooter = {
  casting: [
    {
      imageUrl: Fabrication,
      title: 'Fabrication',
      link: '/industrial-goods/fabrication',
    },
    {
      imageUrl: Machining,
      title: 'Machining',
      link: '/industrial-goods/machining',
    },
    { imageUrl: Forging, title: 'Forging', link: '/industrial-goods/forging' },
    {
      imageUrl: Extrusion,
      title: 'Extrusions',
      link: '/industrial-goods/extrusion/aluminium-extrusion',
    },
  ],
  forging: [
    { imageUrl: Casting, title: 'Casting', link: '/industrial-goods/casting' },
    {
      imageUrl: Fabrication,
      title: 'Fabrication',
      link: '/industrial-goods/fabrication',
    },
    {
      imageUrl: Machining,
      title: 'Machining',
      link: '/industrial-goods/machining',
    },
    {
      imageUrl: Extrusion,
      title: 'Extrusions',
      link: '/industrial-goods/extrusion/aluminium-extrusion',
    },
  ],
  machining: [
    { imageUrl: Casting, title: 'Casting', link: '/industrial-goods/casting' },
    { imageUrl: Forging, title: 'Forging', link: '/industrial-goods/forging' },
    {
      imageUrl: Fabrication,
      title: 'Fabrication',
      link: '/industrial-goods/fabrication',
    },
    {
      imageUrl: Extrusion,
      title: 'Extrusions',
      link: '/industrial-goods/extrusion',
    },
  ],
  fabrication: [
    { imageUrl: Casting, title: 'Casting', link: '/industrial-goods/casting' },
    {
      imageUrl: Machining,
      title: 'Machining',
      link: '/industrial-goods/machining',
    },
    { imageUrl: Forging, title: 'Forging', link: '/industrial-goods/forging' },
    {
      imageUrl: Extrusion,
      title: 'Extrusions',
      link: '/industrial-goods/extrusion/aluminium-extrusion',
    },
  ],
  extrusion: [
    { imageUrl: Casting, title: 'Casting', link: '/industrial-goods/casting' },
    {
      imageUrl: Machining,
      title: 'Machining',
      link: '/industrial-goods/machining',
    },
    { imageUrl: Forging, title: 'Forging', link: '/industrial-goods/forging' },
    {
      imageUrl: Fabrication,
      title: 'Fabrication',
      link: '/industrial-goods/fabrication',
    },
  ],
  molding: [
    { imageUrl: Casting, title: 'Casting', link: '/industrial-goods/casting' },
    {
      imageUrl: Machining,
      title: 'Machining',
      link: '/industrial-goods/machining',
    },
    { imageUrl: Forging, title: 'Forging', link: '/industrial-goods/forging' },
    {
      imageUrl: Fabrication,
      title: 'Fabrication',
      link: '/industrial-goods/fabrication',
    },
  ],
};

export const getSubSubCategoryFooter = (categoryName) => {
  const z = 0;
  return subSubCategoryDataFooter[categoryName] || [];
};
