import CardOne from "@/assets/FirstPage/cardone.webp";
import CardTwo from "@/assets/FirstPage/cardtwo.webp";
import CardThree from "@/assets/FirstPage/cardthree.webp";
import BlueLine from "@/assets/FirstPage/lineone.png";
import CheckMark from "@/assets/FirstPage/checkmark-circle-01.png";
import GreenMark from "@/assets/FirstPage/green_checkmark.png";
import GreenLine from "@/assets/FirstPage/greenline.png";
import SecondLine from "@/assets/FirstPage/SecondLine.png";

export const whyChooseConstant = [
  {
    id: 1,
    title: "Trust and Transparency",
    leftImage: CardOne,
    checkmark: CheckMark,
    line: BlueLine,
    colorCode: "#1E21E9",
    lineClass: "absolute top-9 left-3",
    points: [
      {
        id: 1,
        text: "Discover full transparency using an online RFx process, multiple supplier quotes, bid management, contract signing, and collaboration tools.",
      },
      {
        id: 2,
        text: `Select highly curated manufacturers, rated on various criteria, with detailed profiles showcasing capabilities and certifications.`,
      },
      {
        id: 3,
        text: "100% visibility on price quotations from suppliers, online negotiations and landed cost after adding a minimal rivexa platform fee",
      },
      {
        id: 4,
        text: "Value Added Services including quality checks, cross border logistics, B2B payment gateway enabled via partnerships with leading companies",
      },
    ],
  },
  {
    id: 2,
    title: "Legacy",
    leftImage: CardTwo,
    checkmark: CheckMark,
    line: SecondLine,
    colorCode: "#7950FF",
    lineClass: "absolute top-9 left-3",
    points: [
      {
        id: 1,
        text: "Backed by Tata Steel and SAIL, rivexa is the latest flagship offering of mjunction, carving out a niche for itself as a B2B export marketplace.",
      },
      {
        id: 2,
        text: `Fueled by our vision, mission and values, we strive to deliver exceptional outcomes through continuous improvement and innovation`,
      },
      {
        id: 3,
        text: `Committed to helping MSME's in India embrace data first approach and digital transformation for better international trade engagement`,
      },
      {
        id: 4,
        text: "We are at the forefront of forging synergistic partnerships identifying opportunities for cooperation and trade promotion",
      },
    ],
  },
  {
    id: 3,
    title: "Category expertise ",
    leftImage: CardThree,
    checkmark: GreenMark,
    line: GreenLine,
    colorCode: "#098709",
    lineClass: "absolute top-9 left-3",
    points: [
      {
        id: 1,
        text: "rivexa excels and specializes in understanding and meeting the unique requirements of buyers within each category",
      },
      {
        id: 2,
        text: `rivexa offers robust operational support to facilitate end-to-end transactions and deliver seamless user experience.`,
      },
      {
        id: 3,
        text: "Our on-ground team ensures proactive time & action management, quality checks and compliant processes to ensure on time delivery.",
      },
      {
        id: 4,
        text: `Revolutionizing Industrial Sourcing: Discover rivexa's precision in manufacturing intricate components and sturdy parts`,
      },
    ],
  },
];
