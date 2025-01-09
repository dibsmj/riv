import Learn1 from '../assets/blog/learn-1.webp';
import Learn2 from '../assets/blog/learn-2.webp';
import Learn3 from '../assets/blog/learn-3.webp';
import Learn4 from '../assets/blog/learn-4.webp';
import Learn5 from '../assets/blog/learn-5.webp';
import Learn6 from '../assets/blog/learn-6.webp';
import ExportIncentive from '../assets/blog/Export_incentive.webp';
import ForeignTradePolicy from '../assets/blog/Foreign_trade_policy.webp';
import IncoTerms from '../assets/blog/Inco_terms.webp';
import Pic1 from '../assets/blog/pic1.webp';
import Pic2 from '../assets/blog/pic2.webp';
import ITFS from '../assets/blog/ITFS.webp';
import EmpoweringManufacturers from '../assets/blog/Empowering_Local_Manufacturers.webp';
import EmpoweringMSMEs from '../assets/blog/Empowering_MSMEs.webp';
import PartnershipOne from '../assets/resources/others/Homepag-contents.png';
import useFetchStrapi from '../hooks/useFetchStrapi';

export const validBlogUrl = [
  'how-to-registered-as-a-buyer-on-rivexa',
  'how-to-registered-as-a-supplier-on-rivexa',
  'how-to-build-a-strong-portfolio-on-rivexa',
  'unlocking-seamless-sourcing',
  'delivering-excellence-on-time',
  'comprehensive-guide-to-export-procedures-and-documentation',
  'export-incentives-in-india',
  'foreign-trade-policy-2023',
  'incoterms',
  'fashion-and-textiles',
  'industrial-goods',
  'international-trade-finance-services',
  'empowering-local-manufacturers',
  'empowering-msmes',
  'rivexa-by-mjunction-signs-mou-with-eepc-to-boost-indian-exports',
  'empowering-exports-logistics',
  'ensuring-qualities',
  'choosing-curated-manufacturers',
  'exploring-the-tapestries',
  'sourcing-fashion-from-indias',
  'pioneering-sustainables',
  'navigating-fashion-economics',
  'the-rise-of-sustainable-fashions',
  'harmony-in-trends',
  'sustainable-threads',
  'india-s-global-competitivenesses',
  'ai-manufacturing-predictive-maintenances',
  'challenges-in-vendor-questionnaires',
  'precision-engineerings',
  'cnc-machining-processes',
  'evolution-of-processing-manufacturers',
  'heavy-metal-fabrications',
  'empowering-international-buyers',
  'sheet-metals',
];
export const resourceCategory = [
  { id: 1, name: 'All' },
  { id: 2, name: 'About our platform' },
  { id: 3, name: 'Export know-how' },
  { id: 4, name: 'Fashion and Home Textiles' },
  { id: 5, name: 'Industrial Goods' },
  { id: 6, name: 'Value Added Services' },
  { id: 7, name: 'Partnership' },
];
const GetBlogDataApi = (apiurl) => {
  const { loading, error, data } = useFetchStrapi(
    `${process.env.REACT_APP_STRAPI_ROOT_URL_API}/${apiurl}`
  );
  const headerTitle =
    data && data.length > 0 && data[0]?.attributes?.Title
      ? data[0]?.attributes?.Title
      : null;
  const createdAt =
    data && data.length > 0 && data[0]?.attributes?.createdAt
      ? data[0]?.attributes?.createdAt
      : null;
  const headerImage =
    data && data.length > 0 && data[0]?.attributes?.image?.data?.attributes?.url
      ? data[0]?.attributes?.image?.data?.attributes?.url
      : null;
  const seoData =
    data[0]?.attributes?.seo && data[0]?.attributes?.seo.length > 0
      ? data[0]?.attributes?.seo[0]
      : {
          id: null,
          keywords: null,
          canonicalURL: null,
          metaDescription: '',
          metaTitle: '',
        };
  return { loading, error, data, seoData, headerImage, headerTitle, createdAt };
};

const getResourceData = (moduleName, apiUrl) => {
  const z = 0;
  return {
    showBanner: true,
    showBreadcrumb: true,
    getContentPage: () => {
      const { loading, error, data, headerImage, headerTitle, createdAt } =
        GetBlogDataApi(apiUrl);
      return { loading, error, data, headerImage, headerTitle, createdAt };
    },
    getPageName: () => moduleName,
    getSeoData: () => {
      const { seoData } = GetBlogDataApi(apiUrl);
      return seoData;
    },
  };
};

export const modules = {
  'how-to-registered-as-a-buyer-on-rivexa': getResourceData(
    'How to get registered as a buyer on rivexa',
    'buyer-registrations?populate=*'
  ),
  'how-to-registered-as-a-supplier-on-rivexa': getResourceData(
    'How to get registered as a supplier on rivexa',
    'supplier-registrations?populate=*'
  ),
  'how-to-build-a-strong-portfolio-on-rivexa': getResourceData(
    'How to Build a Strong Portfolio on rivexa',
    'seller-strong-portfolios?populate=*'
  ),
  'unlocking-seamless-sourcing': getResourceData(
    'Our Transparent, Flexible, and User-Friendly RFx Process',
    'unlocking-seamless-sourcings?populate=*'
  ),
  'delivering-excellence-on-time': getResourceData(
    'How Our Time and Action Module Streamlines B2B Production',
    'delivering-excellences?populate=*'
  ),
  'comprehensive-guide-to-export-procedures-and-documentation': getResourceData(
    'A Basic Guide to Export Procedures and Documentation',
    'basic-guide-export-procedures?populate=*'
  ),
  'fashion-and-textiles': getResourceData(
    'Fashion and Home Textiles',
    'fashion-home-textiles?populate=*'
  ),
  'industrial-goods': getResourceData(
    'Industrial Goods',
    'industrial-goods?populate=*'
  ),
  'international-trade-finance-services': getResourceData(
    'International Trade Finance Services',
    'trade-finances?populate=*'
  ),
  incoterms: getResourceData('Incoterms', 'incoterms?populate=*'),
  'export-incentives-in-india': getResourceData(
    'Export Incentives in India- Schemes and Benefits',
    'export-incentives?populate=*'
  ),
  'foreign-trade-policy-2023': getResourceData(
    'Foreign Trade Policy 2023- Highlights',
    'foreign-trade-policies?populate=*'
  ),
  'empowering-local-manufacturers': getResourceData(
    'Empowering Local Manufacturers',
    'empowering-manufacturers?populate=*'
  ),
  'empowering-msmes': getResourceData(
    'Empowering MSMEs',
    'empowering-msmes?populate=*'
  ),
  'rivexa-by-mjunction-signs-mou-with-eepc-to-boost-indian-exports':
    getResourceData(
      'rivexa by mjunction Signs MoU with EEPC to Boost Indian Exports',
      'rivexa-signs-mous?populate=*'
    ),
  'empowering-exports-logistics': getResourceData(
    'Empowering Exports Logistics',
    'empowering-exports-logistics?populate=*'
  ),
  'ensuring-qualities': getResourceData(
    'Ensuring Qualities',
    'ensuring-qualities?populate=*'
  ),
  'navigating-fashion-economics': getResourceData(
    'Navigating Fashion Economics',
    'navigating-fashion-economics?populate=*'
  ),
  'choosing-curated-manufacturers': getResourceData(
    'Choosing Curated Manufacturers',
    'choosing-curated-manufacturers?populate=*'
  ),
  'exploring-the-tapestries': getResourceData(
    'Exploring the Tapestries',
    'exploring-the-tapestries?populate=*'
  ),
  'sourcing-fashion-from-indias': getResourceData(
    'sourcing-fashion-from-indias',
    'sourcing-fashion-from-indias?populate=*'
  ),
  'pioneering-sustainables': getResourceData(
    'pioneering-sustainables',
    'pioneering-sustainables?populate=*'
  ),
  'the-rise-of-sustainable-fashions': getResourceData(
    'The Rise of Sustainable Fashions',
    'the-rise-of-sustainable-fashions?populate=*'
  ),
  'harmony-in-trends': getResourceData(
    'Harmony in Trends',
    'harmony-in-trends?populate=*'
  ),
  'sustainable-threads': getResourceData(
    'sustainable-threads',
    'sustainable-threads?populate=*'
  ),
  'india-s-global-competitivenesses': getResourceData(
    'india-s-global-competitivenesses',
    'india-s-global-competitivenesses?populate=*'
  ),
  'ai-manufacturing-predictive-maintenances': getResourceData(
    'ai-manufacturing-predictive-maintenances',
    'ai-manufacturing-predictive-maintenances?populate=*'
  ),
  'challenges-in-vendor-questionnaires': getResourceData(
    'challenges-in-vendor-questionnaires',
    'challenges-in-vendor-questionnaires?populate=*'
  ),
  'precision-engineerings': getResourceData(
    'precision-engineerings',
    'precision-engineerings?populate=*'
  ),
  'cnc-machining-processes': getResourceData(
    'cnc-machining-processes',
    'cnc-machining-processes?populate=*'
  ),
  'evolution-of-processing-manufacturers': getResourceData(
    'evolution-of-processing-manufacturers',
    'evolution-of-processing-manufacturers?populate=*'
  ),
  'heavy-metal-fabrications': getResourceData(
    'heavy-metal-fabrications',
    'heavy-metal-fabrications?populate=*'
  ),
  'empowering-international-buyers': getResourceData(
    'empowering-international-buyers',
    'empowering-international-buyers?populate=*'
  ),
  'sheet-metals': getResourceData('sheet-metals', 'sheet-metals?populate=*'),
};

export const getAllBlogData = (url) => {
  const { loading, error, data } = useFetchStrapi(
    `${process.env.REACT_APP_STRAPI_ROOT_URL_API}/${url}`
  );
  const headerTitle =
    data && data.length > 0 && data[0]?.attributes?.Title
      ? data[0]?.attributes?.Title
      : null;
  const createdAt =
    data && data.length > 0 && data[0]?.attributes?.createdAt
      ? data[0]?.attributes?.createdAt
      : null;
  return { loading, error, data };
};

export const getResourcesItem = () => {
  const resourcesItems = [
    {
      typeID: 2,
      typeTitle: 'About our platform',
      resourcesID: 1,
      title: 'Getting started: How to get registered as a buyer on Rivexa',
      image: Learn1,
      link: 'how-to-registered-as-a-buyer-on-rivexa',
    },
    {
      typeID: 2,
      typeTitle: 'About our platform',
      resourcesID: 2,
      title: 'Getting started: How to get registered as a supplier on Rivexa',
      image: Learn2,
      link: 'how-to-registered-as-a-supplier-on-rivexa',
    },
    {
      typeID: 2,
      typeTitle: 'About our platform',
      resourcesID: 3,
      title: 'Verified sellers: How to get build a strong portfolio on Rivexa',
      image: Learn4,
      link: 'how-to-build-a-strong-portfolio-on-rivexa',
    },
    {
      typeID: 2,
      typeTitle: 'About our platform',
      resourcesID: 4,
      title:
        'Unlocking Seamless Sourcing: Our Transparent, Flexible, and User-Friendly RFx Process',
      image: Learn5,
      link: 'unlocking-seamless-sourcing',
    },
    {
      typeID: 2,
      typeTitle: 'About our platform',
      resourcesID: 5,
      title:
        'Delivering Excellence on Time: How Our Time and Action Module Streamlines B2B Production',
      image: Learn6,
      link: 'delivering-excellence-on-time',
    },
    {
      typeID: 3,
      typeTitle: 'Export know-how',
      resourcesID: 6,
      title: 'A Basic Guide to Export Procedures and Documentation',
      image: Learn3,
      link: 'comprehensive-guide-to-export-procedures-and-documentation',
    },
    {
      typeID: 3,
      typeTitle: 'Export know-how',
      resourcesID: 7,
      title: 'Export Incentives in India- Schemes and Benefits',
      image: ExportIncentive,
      link: 'export-incentives-in-india',
    },
    {
      typeID: 3,
      typeTitle: 'Export know-how',
      resourcesID: 8,
      title: 'Foreign Trade Policy 2023- Highlights',
      image: ForeignTradePolicy,
      link: 'foreign-trade-policy-2023',
    },
    {
      typeID: 3,
      typeTitle: 'Export know-how',
      resourcesID: 9,
      title: 'Incoterms',
      image: IncoTerms,
      link: 'incoterms',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 10,
      title: 'Fashion and Home Textiles',
      image: Pic2,
      link: 'fashion-and-textiles',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 11,
      title:
        'Navigating Fashion Economics: Unveiling Cost Analysis And Strategic Pricing In Sourcing',
      image: Pic2,
      link: 'navigating-fashion-economics',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 12,
      title: 'Choosing Curated Manufacturers For Your Startup Through Rivexa',
      image: Pic2,
      link: 'choosing-curated-manufacturers',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 13,
      title:
        'Exploring The Tapestry: Navigating The Fashion Realm In India With Rivexa',
      image: Pic2,
      link: 'exploring-the-tapestries',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 14,
      title: 'Sourcing Fashion From India',
      image: Pic2,
      link: 'sourcing-fashion-from-indias',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 15,
      title:
        'Pioneering Sustainable And Decentralized Fashion: A Greener Future',
      image: Pic2,
      link: 'pioneering-sustainables',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 16,
      title:
        'Navigating Fashion Economics: Unveiling Cost Analysis And Strategic Pricing In Sourcing',
      image: Pic2,
      link: 'navigating-fashion-economics',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 17,
      title:
        'The Rise Of Sustainable Fashion: Redefining Style With Conscious Choices',
      image: Pic2,
      link: 'the-rise-of-sustainable-fashions',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 18,
      title: "Harmony In Trends:Rivexa' Design Excellence Through WGSN",
      image: Pic2,
      link: 'harmony-in-trends',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 19,
      title:
        "Sustainable Threads: Rivexa As Your Eco-Fashion Co-Pilot In India' Green Revolution",
      image: Pic2,
      link: 'sustainable-threads',
    },
    {
      typeID: 4,
      typeTitle: 'Fashion and Home Textiles',
      resourcesID: 20,
      title: "India' Global Competitivenesses",
      image: Pic2,
      link: 'india-s-global-competitivenesses ',
    },

    {
      typeID: 5,
      typeTitle: 'Industrial Goods',
      resourcesID: 21,
      title: 'Industrial Goods',
      image: Pic1,
      link: 'industrial-goods',
    },
    {
      typeID: 5,
      typeTitle: 'Industrial Goods',
      resourcesID: 22,
      title: 'How Predictive Maintenance Is Transforming Manufacturing',
      image: Pic1,
      link: 'ai-manufacturing-predictive-maintenances',
    },
    {
      typeID: 5,
      typeTitle: 'Industrial Goods',
      resourcesID: 23,
      title: 'Challenges In Dealing With Vendor Questionnaires',
      image: Pic1,
      link: 'challenges-in-vendor-questionnaires',
    },
    {
      typeID: 5,
      typeTitle: 'Industrial Goods',
      resourcesID: 24,
      title:
        'Precision Engineering in Modern Manufacturing: The Dynamics of CNC Machining',
      image: Pic1,
      link: 'precision-engineerings',
    },
    {
      typeID: 5,
      typeTitle: 'Industrial Goods',
      resourcesID: 25,
      title: 'CNC Machining Process',
      image: Pic1,
      link: 'cnc-machining-processes',
    },
    {
      typeID: 5,
      typeTitle: 'Industrial Goods',
      resourcesID: 26,
      title:
        'Navigating the Evolution: The Rise of Custom-Manufactured Goods in the Industrial Landscape',
      image: Pic1,
      link: 'evolution-of-processing-manufacturers',
    },
    {
      typeID: 5,
      typeTitle: 'Industrial Goods',
      resourcesID: 27,
      title:
        'Heavy Metal Fabrication: Building the Backbone of Industrial Infrastructure',
      image: Pic1,
      link: 'heavy-metal-fabrications',
    },
    {
      typeID: 5,
      typeTitle: 'Industrial Goods',
      resourcesID: 28,
      title:
        'Empowering International Buyers: Unveiling the Impact of rivexa Trust Score in Supplier Selection',
      image: Pic1,
      link: 'empowering-international-buyers',
    },
    {
      typeID: 5,
      typeTitle: 'Industrial Goods',
      resourcesID: 29,
      title:
        'Exploring the Versatility and Utility of Sheet Metal in Modern Manufacturing',
      image: Pic1,
      link: 'sheet-metals',
    },
    {
      typeID: 6,
      typeTitle: 'Value Added Services',
      resourcesID: 30,
      title: 'International Trade Finance Services (ITFS)',
      image: ITFS,
      link: 'international-trade-finance-services',
    },
    {
      typeID: 6,
      typeTitle: 'Value Added Services',
      resourcesID: 31,
      title:
        'Empowering Local Manufacturers : A Look Into Our District-Level Collaborations',
      image: EmpoweringManufacturers,
      link: 'empowering-local-manufacturers',
    },
    {
      typeID: 6,
      typeTitle: 'Value Added Services',
      resourcesID: 32,
      title:
        'Empowering MSMEs: The Role of E-commerce in Educating and Enabling Local Businesses',
      image: EmpoweringMSMEs,
      link: 'empowering-msmes',
    },
    {
      typeID: 6,
      typeTitle: 'Value Added Services',
      resourcesID: 33,
      title:
        'Empowering Exports: The Vital Role Of Logistics Services In India',
      image: PartnershipOne,
      link: 'empowering-exports-logistics',
    },
    {
      typeID: 6,
      typeTitle: 'Value Added Services',
      resourcesID: 34,
      title:
        'Ensuring Quality: The Role Of Inspection Services In Indian Export',
      image: PartnershipOne,
      link: 'ensuring-qualities',
    },
    {
      typeID: 7,
      typeTitle: 'Partnership',
      resourcesID: 35,
      title: 'rivexa by mjunction Signs MoU with EEPC to Boost Indian Exports',
      image: PartnershipOne,
      link: 'rivexa-by-mjunction-signs-mou-with-eepc-to-boost-indian-exports',
    },
  ];
  return resourcesItems;
};
