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
  Injectionmolding,
} from "../../config/GetImages";

const categoryDescriptions = {
  casting: `Custom metal casting is an advanced manufacturing process of pouring liquid metal into precisely engineered molds to create complex components. This versatile technique allows for intricate designs and various material options, making it ideal for custom metal casting projects.  <br> Our network of top-notch custom metal casting suppliers rely on the best of technology to bring your blueprints to life. Only in India will you find custom metal casting manufacturers that ensure optimal solidification, followed by expert finishing to achieve superior surface quality and dimensional accuracy. Our casting solutions drive progress across industries, from aerospace innovations to automotive advancements.`,
  forging: `Forging is a manufacturing process where metal is shaped by applying compressive forces. It involves heating the metal to a malleable temperature and then pressing, hammering, or rolling it into the desired shape. Forged parts exhibit superior strength, durability, and grain structure compared to cast or machined components. Commonly used in automotive, aerospace, and heavy machinery industries, forging produces high-quality components with precise dimensions and excellent mechanical properties.`,
  machining: `Machining with rivexa isn't just about removing material; it's about sculpting possibilities. From intricate aerospace components to robust automotive parts, our precision machining supplier services encompass a wide array of techniques - milling, turning, drilling, and grinding - executed with meticulous attention to detail. Our precision machining manufacturers don't just meet specifications; they redefine them. <br> Realize your custom metal machining vision through rivexa. Tap into a network of precision machining suppliers who can turn complex designs into precision-engineered realities. Experience the precision that propels industries forward, all powered by Indian precision machining manufacturer excellence. `,
  fabrication:`Imagine a world where your boldest designs spring to life in gleaming metal. You can do that with rivexa's custom metal fabrication services. Our metal fabrication suppliers are the best at what they do – turning raw materials into engineering marvels. <br> From the components that hold together towering bridges to compact consumer goods, rivexa’s network of verified metal fabrication suppliers are ready to assist you in building your brand. <br> Access India's leading metal fabrication manufacturers through rivexa, combining time-tested skills with advanced industrial innovation. Our custom sheet metal fabrication expertise is the bedrock of your next projects regardless of your industry. `,
  extrusion: `Extrusion is a manufacturing process where a billet of aluminum is forced through a die to create complex cross-sectional profiles. It's highly versatile, allowing for the production of long lengths of consistent shapes with minimal waste. Extruded aluminum finds widespread use in construction, automotive, electronics, and other industries due to its lightweight, corrosion-resistant properties, making it ideal for applications ranging from structural components to intricate architectural designs.`,
  aluminiumdiecasting: `rivexa’s certified Aluminum die casting manufacturers follow rigorous quality control and state-of-the-art post-processing to ensure that every component meets the most demanding standards across automotive, aerospace, electronics, and industrial applications. <br>Our aluminum die casting manufacturers use processes that entail the best-in-class technology for creating quality parts with exceptional strength, surface, and dimensional accuracy.  `,
  sandcasting: `Maximize your manufacturing edge through rivexa’s premium sand casting services, fulfilled by India’s top manufacturers. We guarantee the precision and quality that industries insist on. We meticulously certify sand casting manufacturer network, who can combine world-class expertise with competitive costs to create metal components that meet international quality standards. <br>rivexa is the choice in strategic sand casting suppliers for reputed companies. We have streamlined their global sourcing needs – and we can do the same for you. This is the B2B emarketplace where you can find the sand casting manufacturer that speaks your language and knows your business priorities. <br>Partner with us to optimize your supply chain costs and access India’s best Sand casting Services. Superior quality, on-time delivery, and bottom line value – that’s the rivexa promise every time you choose our sand casting suppliers. `,
  investmentcasting:`If there is one thing our investment casting manufacturers understand at rivexa, it’s that precision matters in every detail. Investment casting, or last wax casting is a process that can give metal components with accuracy. The Investment casting suppliers that make up our ever-expanding partner network utilize advanced processes to create detailed wax patterns, then encase them in ceramic shells for a flawless finish everytime. <br> rivexa connects you with the very best investment casting manufacturers that India has to offer. Their expertise covers a range of industries: medicals, automotive, aerospace, and more. With our investment casting services, your casting projects benefit from top-tier expertise, so you get quality results at the end of each production cycle. <br>We believe that every part manufactured has its own story and that’s why we’ve partnered with India’s leading Investment casting suppliers. Explore unmatched engineering excellence with rivexa’s investment casting services. You’re not just sourcing parts, you’re investing in a legacy of excellence.`,
  opendieforging: `Experience the power of Indian craftsmanship with rivexa's open-die forging supplier services. Our skilled open-die forging manufacturers use state-of-the-art facilities to transform heated metal between multiple dies, crafting large and complex parts with unparalleled precision and minimal waste. <br>When you choose rivexa's open-die forging, you're not just getting a product – you're investing in enhanced material properties, superior strength, and world-class durability. From aerospace components to energy sector innovations, rivexa connects you to India's finest open die forging suppliers, delivering high-quality, custom parts that drive global industries forward. `,
  closeddieforging: `Our closed die forging process, renowned for its precision and efficiency, transforms raw metal into intricate, high-performance parts. From the robust gears driving automotive innovations to the critical shafts powering aerospace advancements, rivexa's network of elite Indian closed die forging manufacturers deliver components that can meet the most demanding global standards. Our closed die forging suppliers don't just shape metal – they apply their industrial closed forging expertise to infuse each part with improved strength, optimized grain flow, and unmatched durability. <br>Experience industrial closed forging excellence through rivexa-vetted closed die forging suppliers, where cost-efficiency meets world-class quality. Every precision-forged component embodies Indian closed die forging manufacturer excellence, custom-designed to enhance your products and optimize your supply chain.`,
  cncmachining: `With rivexa's custom CNC machining services, you're not just getting parts but accessing a world of high accuracy, repeatability, and versatility. Our network of expert custom cnc machining manufacturer’ capabilities allows for complex geometries and tight tolerances that push the boundaries of what's possible in manufacturing. <br> From aerospace components to intricate medical devices, machines used by our custom cnc machining manufacturers follow meticulously programmed instructions to execute precise cutting movements, ensuring consistency and quality in every piece. <br> Transform concepts into components with rivexa's custom online cnc machining supplier network. With our cnc machining services, Indian ingenuity meets micron-level accuracy for your most demanding projects. Experience the future of manufacturing powered by Indian Custom online cnc machining suppliers that meet global standards.`,
  conventionalmachining: `Conventional CNC machining with rivexa offers a unique blend of manual expertise and semi-automated efficiency. While less automated than CNC processes, our Conventional CNC machining supplier services provide unmatched flexibility and cost-effectiveness for various components across various industries. <br>From one-off prototypes to small-batch productions, our conventional CNC machining manufacturer capabilities ensure that your specific needs are met with the attention to detail that only hands-on experience can provide. <br> rivexa is your answer to all of your Conventional CNC machining supplier needs. We can help you access a wealth of Indian manufacturing knowledge honed over decades. Experience the perfect balance of traditional skill and modern efficiency that you can only get through our conventional CNC machining manufacturers, all geared towards bringing your designs to life with precision and economy.`,
  equipmentfabrication: `Our equipment fabrication services span the entire spectrum of specialized machinery, tools, and components, each tailored to meet the exacting demands of your specific industrial needs. From the drawing board to the factory floor, our network of verified Equipment fabrication suppliers combine precision design, material mastery, and cutting-edge fabrication techniques.  <br> Whether you're looking for heavy machinery to move mountains in construction and mining or seeking precision tools to revolutionize manufacturing, rivexa's equipment fabrication services are the cornerstone of industrial innovation. <br> Choose rivexa’s equipment fabrication services every time you need fabrication work done.  Tap into a wellspring of leading Indian equipment fabrication manufacturers who have honed these skills over generations and are supercharged with modern technology. <br>Partner with Indian equipment fabrication suppliers that share your commitment to excellence and believe in exceeding expectations. Let our equipment fabrication manufacturer build the equipment that will drive your productivity, spark innovation, and shape the future of your industry.`,
  sheetmetalfabrication: `rivexa brings you India's premier custom sheet metal fabrication services, where flat sheets transform into the backbone of the industry. Our network of verified Metal fabrication companies use modern technologies and facilities to shape your visions into reality.  <br> Our custom sheet metal fabrication expertise span applications and industries, creating everything from tough, weather-proof panels to small enclosures for containing electrical parts. We pride ourselves on combining efficiency with precision, delivering complex, lightweight structures that meet the most exacting standards. <br> Transform your sheet metal projects with rivexa. Connect with India's elite fabricators, blending time-honored techniques and cutting-edge production methods. Let's create the components to drive innovation, efficiency, and success across your product line.`,
  structuralfabrication:`When the world’s leading builders and brands need reliable structural steel fabrication services, they come to rivexa. We help provide them with the global advantage that keeps them competitive in today's market. Our vetted structural steel fabrication companies deliver quality and cost-efficiency with every steel component produced. <br>Why do major contractors partner with our structural steel fabrication manufacturer? Because we know that success in construction means more than competitive pricing – it is about reliability, precision, compliance. Our manufacturers can integrate their structural steel fabrication services with your project timelines.  <br>Partner with rivexa’s structural steel fabrication companies and access expertise that matches your ambitions. Our structural steel fabrication manufacturers possess the technology and skill to ensure that every beam, column, or connection meets specifications. `,
   aluminiumextrusion: `rivexa proudly presents India's premier custom aluminum extrusion services, where raw billets transform into complex, precision-engineered profiles that push the boundaries of what's possible. <br>Our custom aluminum extrusion manufacturers’ process is an amalgamation of heat, pressure, and expertise. We force aluminum through meticulously designed dies to create cross-sectional profiles as diverse as your imagination.<br> The Custom aluminum extrusion manufacturers who partnered with us are amazing at what they do. From building intricate electronic housings to architectural components made for skyscrapers, their extrusion profiles can be used for multiple applications.<br>Are you looking for custom aluminum extrusion suppliers? rivexa can help you with all your precision aluminum extrusion needs. We connect you with leading Indian Custom aluminum extrusion manufacturers specializing in metalworking traditions using state-of-the-art technology. Let's create profiles that will shape tomorrow's world - with minimal waste and maximum innovation. `,
  injectionmolding: `At rivexa, we offer India’s finest custom injection molding manufacturers, turning raw polymers into high-performance components that fuel innovation across industries.
  <br> The process involves injecting molten materials into custom molds to build various shapes with accuracy. Our Injection molding services can help you manufacture your product: medical devices, automotive parts, consumer electronics, packaging, etc. Our injection molding manufacturers have built their skills over years working with varied industries. <br>Choose rivexa for your injection molding manufacturing requirements every time. We can guarantee you easier access to India’s top injection molding companies, which combine the best technology with years of engineering know-how. Together, let’s mold the future with efficient production, reduced waste, and maximum precision.`,
  molding: `rivexa’s plastic injection molding suppliers bring your idea to life by molding raw materials into high-performance parts. The services they offer are a combination of advanced molding techniques and years of Indian engineering expertise. From daily consumer goods to critical automotive or medical devices, rivexa’s plastic injection molding manufacturers cater to diverse needs. <br> Whether it’s blow, injection, or rotational molding, our expert Plastic injection molding manufacturers turn raw plastic materials into quality parts. Partnering with us means so much more than accessing advanced technology – it’s a commitment to innovation. Think about rivexa each time you require the expertise of a plastic injection molding company to bring your visions to life. <br> As your trusted contact for plastic injection molding companies, we understand decision and precision when it comes to your projects. When you choose rivexa to source from the best plastic injection molding manufacturers, you’re getting business partners invested in your success. Competitive pricing and an unwavering commitment to quality are what you get every time you choose from your vetted Plastic injection molding manufacturer.`,
};

export const getCategoryHeader = (categoryname) => {
  const headerData = {
    casting: {
      title: "Custom Metal Casting Services",
      description: categoryDescriptions.casting,
      image: Casting,
      imageAltTag: "metal casting",
    },
    forging: {
      title: "Custom Metal Forging Services",
      description: categoryDescriptions.forging,
      image: Forging,
      imageAltTag: "Metal forging",
    },
    machining: {
      title: "Custom Precision Machining Services",
      description: categoryDescriptions.machining,
      image: Machining,
      imageAltTag: "Precision Machining",
    },
    fabrication: {
      title: "Custom Metal Fabrication Services",
      description: categoryDescriptions.fabrication,
      image: Fabrication,
      imageAltTag: "Custom Fabrication",
    },
    extrusion: {
      title: "Custom Metal Extrusion Services",
      description: categoryDescriptions.extrusion,
      image: Extrusion,
      imageAltTag: "Metal Extrusion",
    },
    aluminiumdiecasting: {
      title: "Aluminum Die Casting Services",
      description: categoryDescriptions.aluminiumdiecasting,
      image: AluminumCasting,
      imageAltTag: "Aluminum die casting",
    },
    sandcasting: {
      title: "Sand Casting Services",
      description: categoryDescriptions.sandcasting,
      image: SandCasting,
      imageAltTag: "Sand casting",
    },
    investmentcasting: {
      title: "Investment Casting Services",
      description: categoryDescriptions.investmentcasting,
      image: InvestmentCasting,
      imageAltTag: "Investment casting",
    },
    opendieforging: {
      title: "Open Die Forging",
      description: categoryDescriptions.opendieforging,
      image: OpenDieForging,
      imageAltTag: "Open Die Forging",
    },
    closeddieforging: {
      title: "Closed Die Forging",
      description: categoryDescriptions.closeddieforging,
      image: ClosedDieForging,
      imageAltTag: "Closed Die Forging",
    },
    cncmachining: {
      title: "Custom CNC Machining Services",
      description: categoryDescriptions.cncmachining,
      image: CNCMachining,
      imageAltTag: "CNC Machining",
    },
    conventionalmachining: {
      title: "Conventional Machining Services",
      description: categoryDescriptions.conventionalmachining,
      image: ConventionalMachining,
      imageAltTag: "Conventional Machining",
    },
    equipmentfabrication: {
      title: "Equipment Fabrication",
      description: categoryDescriptions.equipmentfabrication,
      image: EquipmentFabrication,
      imageAltTag: "Equipment Fabrication",
    },
    sheetmetalfabrication: {
      title: "Custom Sheet Metal Fabrication Services",
      description: categoryDescriptions.sheetmetalfabrication,
      image: SheetMetalFabrication,
      imageAltTag: "Sheet Metal Fabrication",
    },
    structuralfabrication: {
      title: "Structural Steel Fabrication",
      description: categoryDescriptions.structuralfabrication,
      image: StructuralFabrication,
      imageAltTag: "Structural Fabrication",
    },
    aluminiumextrusion: {
      title: "Custom Aluminum Extrusion Services",
      description: categoryDescriptions.aluminiumextrusion,
      image: AluminiumExtrusion,
      imageAltTag: "Aluminum extrusion",
    },
    injectionmolding: {
      title: "Injection Molding Services ",
      description: categoryDescriptions.injectionmolding,
      image: Injectionmolding,
      imageAltTag: "Injection Molding",
    },
    molding: {
      title: "Custom Molding Services ",
      description: categoryDescriptions.molding,
      image: Injectionmolding,
      imageAltTag: "Injection Molding",
    },
  };

  const { title, description, image, imageAltTag } =
    headerData[categoryname] || headerData.fabrication;

  return {
    title,
    description,
    image,
    imageAltTag,
  };
};
