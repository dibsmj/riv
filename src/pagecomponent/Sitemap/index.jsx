"use client";
/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef, memo } from "react";
import TreeNode from "./TreeNode";

const Sitemap = memo(() => {
  const data = [
    {
      name: "Home",
      link: "/",
      children: [
        {
          name: "Product Categories",
          link: "#",
          children: [
            {
              name: "Industrial Goods",
              link: "/industrial-goods",
              children: [
                {
                  name: "Casting",
                  link: "/industrial-goods/casting",
                  children: [
                    {
                      name: "Aluminium Die Casting",
                      link: "/industrial-goods/casting/aluminium-die-casting",
                      children: [],
                    },
                    {
                      name: "Sand Casting",
                      link: "/industrial-goods/casting/sand-casting",
                      children: [],
                    },
                    {
                      name: "Investment Casting",
                      link: "/industrial-goods/casting/investment-casting",
                      children: [],
                    },
                  ],
                },
                {
                  name: "Forging",
                  link: "/industrial-goods/forging",
                  children: [
                    {
                      name: "Open Die Forging",
                      link: "/industrial-goods/forging/open-die-forging",
                      children: [],
                    },
                    {
                      name: "Closed Die Forging",
                      link: "/industrial-goods/forging/closed-die-forging",
                      children: [],
                    },
                  ],
                },
                {
                  name: "Machining",
                  link: "/industrial-goods/machining",
                  children: [
                    {
                      name: "CNC Machining",
                      link: "/industrial-goods/machining/cnc-machining",
                      children: [],
                    },
                    {
                      name: "Conventional Machining",
                      link: "/industrial-goods/machining/conventional-machining",
                      children: [],
                    },
                  ],
                },
                {
                  name: "Fabrication",
                  link: "/industrial-goods/fabrication",
                  children: [
                    {
                      name: "Equipment Fabrication",
                      link: "/industrial-goods/fabrication/equipment-fabrication",
                      children: [],
                    },
                    {
                      name: "Sheet Metal Fabrication",
                      link: "/industrial-goods/fabrication/sheet-metal-fabrication",
                      children: [],
                    },
                    {
                      name: "Structural Fabrication",
                      link: "/industrial-goods/fabrication/structural-fabrication",
                      children: [],
                    },
                  ],
                },
                {
                  name: "Extrusion",
                  link: "/industrial-goods/extrusion/aluminium-extrusion",
                  children: [],
                },
                {
                  name: "Injection Molding",
                  link: "/industrial-goods/molding/injection-molding",
                  children: [],
                },
              ],
            },
            {
              name: "Fashion & Home Textiles",
              link: "/fashion-and-textiles",
              children: [
                {
                  name: "Uniform & safety gears",
                  link: "/fashion-and-textiles/uniform-and-work-wear",
                  children: [],
                },
                {
                  name: `Women's Apparel`,
                  link: "/fashion-and-textiles/womens-apparel",
                  children: [],
                },
                {
                  name: `Men's Apparel`,
                  link: "/fashion-and-textiles/mens-apparel",
                  children: [],
                },
                {
                  name: "Footwear",
                  link: "/fashion-and-textiles/footwear",
                  children: [],
                },
                {
                  name: "Bag & Accessories",
                  link: "/fashion-and-textiles/bags",
                  children: [],
                },
                {
                  name: "Home textiles",
                  link: "/fashion-and-textiles/home-textiles",
                  children: [],
                },
                {
                  name: "Leather",
                  link: "/fashion-and-textiles/leather",
                  children: [],
                },
                {
                  name: "Sleep & Innerwear",
                  link: "/fashion-and-textiles/sleep-and-innerwear",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "Value Added Services",
          link: "/value-added-services",
          children: [],
        },
        {
          name: "Resources",
          link: "#",
          children: [
            {
              name: "Blogs",
              link: "/resources",
              children: [
                {
                  name: "Brand",
                  link: "#",
                  children: [
                    {
                      name: "mjunction featured in Harvard Business Review Case Study",
                      link: "/resources/mjunction-featured-in-harvard-business-review-case-study",
                      children: [],
                    },
                  ],
                },
                {
                  name: "Partnership",
                  link: "#",
                  children: [
                    {
                      name: "rivexa by mjunction Signs MoU with EEPC to Boost Indian Exports",
                      link: "/resources/rivexa-by-mjunction-signs-mou-with-eepc-to-boost-indian-exports",
                      children: [],
                    },
                  ],
                },
                {
                  name: "Value Added Services",
                  link: "#",
                  children: [
                    {
                      name: "International Trade Finance Services (ITFS)",
                      link: "/resources/international-trade-finance-services-itfs",
                      children: [],
                    },
                    {
                      name: "Boosting Exports: The Crucial Role of Indian Logistics Services",
                      link: "/resources/boosting-exports-the-crucial-role-of-indian-logistics-services",
                      children: [],
                    },
                    {
                      name: "Ensuring Quality: The Role of Inspection Services in Indian Export",
                      link: "/resources/ensuring-quality-the-role-of-inspection-services-in-indian-export",
                      children: [],
                    },
                    {
                      name: "Effective Cross Border Export Logistics Strategies for Indian Exporters",
                      link: "/resources/effective-cross-border-export-logistics-strategies-for-indian-exporters-2",
                      children: [],
                    },
                  ],
                },
                {
                  name: "Industrial Goods",
                  link: "#",
                  children: [
                    {
                      name: "Why India is a Leader in Aluminum Die Casting",
                      link: "/resources/why-india-is-a-leader-in-aluminum-die-casting",
                      children: [],
                    },
                    {
                      name: "Exploring Excellence in Aluminum Die Casting with rivexa: Quality, Precision, and Strategic Advantage",
                      link: "/resources/exploring-excellence-in-aluminum-die-casting-with-rivexa-quality-precision-and-strategic-advantage",
                      children: [],
                    },
                    {
                      name: "Empowering International Buyers: Unveiling the Impact of rivexa Trust Score in Supplier Selection",
                      link: "/resources/empowering-international-buyers-unveiling-the-impact-of-rivexa-trust-score-in-supplier-selection",
                      children: [],
                    },
                    {
                      name: "Exploring the Versatility and Utility of Sheet Metal in Modern Manufacturing",
                      link: "/resources/exploring-the-versatility-and-utility-of-sheet-metal-in-modern-manufacturing",
                      children: [],
                    },
                    {
                      name: "CNC machining process",
                      link: "/resources/cnc-machining-process",
                      children: [],
                    },
                    {
                      name: "Industrial Goods",
                      link: "/resources/industrial-goods",
                      children: [],
                    },
                    {
                      name: "Heavy Metal Fabrication: Building the Backbone of Industrial Infrastructure",
                      link: "/resources/heavy-metals-fabrication-building-the-backbone-of-industrial-infrastructure",
                      children: [],
                    },
                    {
                      name: "A Complete Guide to Making Custom Industrial Parts",
                      link: "/resources/a-complete-guide-to-making-custom-industrial-parts",
                      children: [],
                    },
                    {
                      name: "Role of Quality Control & Inspection in Industrial Manufacturing",
                      link: "/resources/role-of-quality-control-inspection-in-industrial-manufacturing",
                      children: [],
                    },
                    {
                      name: `The Strength of India's Steel Industry`,
                      link: "/resources/the-strength-of-indias-steel-industry",
                      children: [],
                    },
                    {
                      name: `Top Aluminum Extrusion Profiles for Business Applications`,
                      link: "/resources/top-aluminum-extrusion-profiles-for-business-applications",
                      children: [],
                    },
                    {
                      name: "Top 5 Emerging Trends in Industrial Manufacturing for 2025",
                      link: "/resources/top-5-emerging-trends-in-industrial-manufacturing-for-2025",
                      children: [],
                    },
                    {
                      name: `The Role of Casting in Industrial Manufacturing`,
                      link: "/resources/the-role-of-casting-in-industrial-manufacturing",
                      children: [],
                    },
                    {
                      name: `Rapid Prototyping Evolution`,
                      link: "/resources/rapid-prototyping-evolution",
                      children: [],
                    },
                    {
                      name: `India growing as a manufacturing superpower`,
                      link: "/resources/india-growing-as-a-manufacturing-superpower",
                      children: [],
                    },
                    {
                      name: `Digitalization in the Indian Manufacturing Sector`,
                      link: "/resources/digitalization-in-the-indian-manufacturing-sector",
                      children: [],
                    },
                    {
                      name: `The Rise of Industry 4.0 in Indian Manufacturing`,
                      link: "/resources/the-rise-of-industry-4-0-in-indian-manufacturing",
                      children: [],
                    },
                  ],
                },
                {
                  name: "Fashion and Home Textiles",
                  link: "#",
                  children: [
                    {
                      name: "Sustainability & Packaging – An age-old Tradition of India",
                      link: "/resources/sustainability-packaging-an-age-old-tradition-of-india",
                      children: [],
                    },
                    {
                      name: "How Custom Uniforms Boost Employee Unity and Brand Identity",
                      link: "/resources/how-custom-uniforms-boost-employee-unity-and-brand-identity",
                      children: [],
                    },
                    {
                      name: `Sustainable Threads: rivexa as Your Eco-Fashion Co-Pilot in India's Green Revolution`,
                      link: "/resources/sustainable-threads-rivexa-as-your-eco-fashion-co-pilot-in-indias-green-revolution",
                      children: [],
                    },
                    {
                      name: "The Emergence of Sustainable Fashion: Redefining Fashion Through Decision Making",
                      link: "/resources/the-emergence-of-sustainable-fashion-redefining-fashion-through-decision-making",
                      children: [],
                    },
                    {
                      name: `Navigating Fashion Economics: Unveiling Cost Analysis and Strategic Pricing in Sourcing`,
                      link: "/resources/navigating-fashion-economics-unveiling-cost-analysis-and-strategic-pricing-in-sourcing",
                      children: [],
                    },
                    {
                      name: `Overcoming Apparel Supply Chain Challenges: rivexa's Remedies for Success`,
                      link: "/resources/overcoming-apparel-supply-chain-challenges-rivexas-remedies-for-success",
                      children: [],
                    },
                    {
                      name: "Fashion and Home Textiles",
                      link: "/resources/fashion-and-home-textiles",
                      children: [],
                    },
                    {
                      name: `Harmony in Trends: rivexa's Design Excellence through WGSN`,
                      link: "/resources/harmony-in-trends-rivexas-design-excellence-through-wgsn",
                      children: [],
                    },
                    {
                      name: "The Rise of Sustainable Fashion: Redefining Style with Conscious Choices",
                      link: "/resources/the-rise-of-sustainable-fashions-redefining-style-with-conscious-choices",
                      children: [],
                    },
                    {
                      name: "Fast Fashion vs. Slow Fashion: A Comprehensive Look",
                      link: "/resources/fast-fashion-vs-slow-fashion-a-comprehensive-look",
                      children: [],
                    },
                    {
                      name: "Transform Your Space: Top Trends in Home Textiles for 2024",
                      link: "/resources/transform-your-space-top-trends-in-home-textiles-for-2024",
                      children: [],
                    },
                    {
                      name: "A Guide to Sustainable Home Textiles: Navigating Eco-Friendly Choices",
                      link: "/resources/a-guide-to-sustainable-home-textiles-navigating-eco-friendly-choices",
                      children: [],
                    },
                    {
                      name: "Current Trends in the Global Textile Manufacturing Industry",
                      link: "/resources/current-trends-in-the-global-textile-manufacturing-industry",
                      children: [],
                    },
                    {
                      name: "India garment sourcing market: An Emerging Global Apparel Hub",
                      link: "/resources/india-garment-sourcing-market-an-emerging-global-apparel-hub",
                      children: [],
                    },
                    {
                      name: "Sustainable textile innovations India: Leading fashion through recyclable materials  ",
                      link: "/resources/sustainable-textile-innovations-india-leading-fashion-through-recyclable-materials",
                      children: [],
                    },
                    {
                      name: "Building a cost-effective apparel sourcing strategy",
                      link: "/resources/building-a-cost-effective-apparel-sourcing-strategy",
                      children: [],
                    },
                    {
                      name: "Why apparel startups need B2B solutions for fashion sourcing",
                      link: "/resources/why-apparel-startups-need-b2b-solutions-for-fashion-sourcing",
                      children: [],
                    },
                    {
                      name: "Why rivexa is the leading B2B platform for sourcing fashion apparel",
                      link: "/resources/why-rivexa-is-the-leading-b2b-platform-for-sourcing-fashion-apparel",
                      children: [],
                    },
                  ],
                },
                {
                  name: "Export know-how",
                  link: "#",
                  children: [
                    {
                      name: "Overcoming Cultural and Language Barriers in Global Trade: A Guide for Indian Exporters",
                      link: "/resources/overcoming-cultural-and-language-barriers-in-global-trade-a-guide-for-indian-exporters",
                      children: [],
                    },
                    {
                      name: "Enhancing Your Export Business: Steps for Successful Exporting",
                      link: "/resources/enhancing-your-export-business-steps-for-successful-exporting",
                      children: [],
                    },
                    {
                      name: "Using Digital Tools to Achieve Export Success: The Critical Role of B2B E-Marketplaces",
                      link: "/resources/using-digital-tools-to-achieve-export-success-the-critical-role-of-b2b-e-marketplaces",
                      children: [],
                    },
                    {
                      name: "A basic Guide to Export Procedures and Documentation",
                      link: "/resources/a-basic-guide-to-export-procedures-and-documentation",
                      children: [],
                    },
                    {
                      name: "How Predictive Maintenance is Transforming Manufacturing",
                      link: "/resources/how-predictive-maintenance-is-transforming-manufacturing",
                      children: [],
                    },
                    {
                      name: "Empowering Local Manufacturers: A Look into Our District-Level Collaborations",
                      link: "/resources/empowering-local-manufacturers-a-look-into-our-district-level-collaborations",
                      children: [],
                    },
                    {
                      name: "Foreign Trade Policy 2023- Highlights",
                      link: "/resources/foreign-trade-policy-2023-highlights",
                      children: [],
                    },
                    {
                      name: `Empowering MSMEs: The Role of E-commerce in Educating and Enabling Local Businesses`,
                      link: "/resources/empowering-msmes-the-role-of-e-commerce-in-educating-and-enabling-local-businesses",
                      children: [],
                    },
                    {
                      name: "Challenges in Dealing with Vendor Questionnaires",
                      link: "/resources/challenges-in-dealing-with-vendor-questionnaires",
                      children: [],
                    },
                    {
                      name: "Export Incentives in India- Schemes and Benefits",
                      link: "/resources/export-incentives-in-india-schemes-and-benefits",
                      children: [],
                    },
                    {
                      name: "Incoterms",
                      link: "/resources/incoterms",
                      children: [],
                    },
                    {
                      name: "Key Components of Cross-Border Logistics for Global Success",
                      link: "/resources/key-components-of-cross-border-logistics-for-global-success",
                      children: [],
                    },
                    {
                      name: "How Supply Chain Financing Can Transform Your Business",
                      link: "/resources/how-supply-chain-financing-can-transform-your-business-a-comprehensive-guide",
                      children: [],
                    },
                    {
                      name: "Effective Cross Border Export Logistics Strategies for Indian Exporters",
                      link: "/resources/effective-cross-border-export-logistics-strategies-for-indian-exporters",
                      children: [],
                    },
                    {
                      name: "India B2B's next ample opportunity: Cross border commerce",
                      link: "/resources/india-b2bs-next-ample-opportunity-cross-border-commerce",
                      children: [],
                    },
                    {
                      name: "Understanding the Export Industry Landscape in India: Factors Driving Success and Expansion",
                      link: "/resources/understanding-the-export-industry-landscape-in-india-factors-driving-success-and-expansion",
                      children: [],
                    },
                    {
                      name: "Navigating Change: Key Strategies for Global Business Adaptation in 2024 and Beyond",
                      link: "/resources/navigating-change-key-strategies-for-global-business-adaptation-in-2024-and-beyond",
                      children: [],
                    },
                    {
                      name: `Transforming Supply Chains with rivexa’s B2B Procurement Platform`,
                      link: "/resources/transforming-supply-chains-with-rivexas-b2b-procurement-platform",
                      children: [],
                    },
                  ],
                },
                {
                  name: "About our platform",
                  link: "#",
                  children: [
                    {
                      name: "rivexa: leading the way with continuous integration and continuous delivery",
                      link: "/resources/rivexa-leading-the-way-with-continuous-integration-and-continuous-delivery",
                      children: [],
                    },
                    {
                      name: "Verified sellers: How to get build a strong portfolio on rivexa",
                      link: "/resources/verified-sellers-how-to-get-build-a-strong-portfolio-on-rivexa",
                      children: [],
                    },
                    {
                      name: "Delivering Excellence on Time: How Our Time and Action Module Streamlines B2B Production",
                      link: "/resources/delivering-excellence-on-time-how-our-time-and-action-module-streamlines-b2b-production",
                      children: [],
                    },
                    {
                      name: "Unlocking Seamless Sourcing: Our Transparent, Flexible, and User-Friendly RFx Process",
                      link: "/resources/unlocking-seamless-sourcing-our-transparent-flexible-and-user-friendly-rfx-process",
                      children: [],
                    },
                    {
                      name: "Getting started: How to get registered as a supplier on rivexa",
                      link: "/resources/how-to-registered-as-a-supplier-on-rivexa",
                      children: [],
                    },
                    {
                      name: "Getting started: How to get registered as a buyer on rivexa",
                      link: "/resources/how-to-registered-as-a-buyer-on-rivexa",
                      children: [],
                    },
                    {
                      name: `Innovative Textile Technologies in the Hospitality Industry`,
                      link: "/resources/innovative-textile-technologies-in-the-hospitality-industry",
                      children: [],
                    },
                    {
                      name: `Forging Trends for Enhanced Strength: Modern Techniques Shaping Durable Industrial Components`,
                      link: "/resources/forging-trends-for-enhanced-strength-modern-techniques-shaping-durable-industrial-components",
                      children: [],
                    },
                    {
                      name: `Textile industry challenges in today's apparel supply chain`,
                      link: "/resources/textile-industry-challenges-in-todays-apparel-supply-chain",
                      children: [],
                    },
                    {
                      name: `Quality Control in India Manufacturing: A GCC Buyer's Guide`,
                      link: "/resources/quality-control-in-india-manufacturing-a-gcc-buyers-guide",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "Newsrooms",
              link: "/news",
              children: [
                {
                  name: "Red Sea crisis: RBI, Irdai called in to help limit impact on Indian exports",
                  link: "/news/red-sea-crisis-rbi-irdai-called-in-to-help-limit-impact-on-indian-exports",
                  children: [],
                },

                {
                  name: "India's Textile Industry Vision 2047: A $600 Billion Export Goal on the Horizon",
                  link: "/news/indias-textile-industry-vision-2047-a-600-billion-export-goal-on-the-horizon",
                  children: [],
                },
                {
                  name: "Understanding the Carbon Border Adjustment Mechanism: Balancing Trade and Climate Goals",
                  link: "/news/understanding-the-carbon-border-adjustment-mechanism-balancing-trade-and-climate-goals",
                  children: [],
                },
                {
                  name: "Expanding Horizons: mjunction and rivexa Drive Global Growth with Innovation and Trust",
                  link: "/news/expanding-horizons-mjunction-and-rivexa-drive-global-growth-with-innovation-and-trust",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "FAQ",
          link: "/faq",
          children: [],
        },
        {
          name: "Contact us",
          link: "/contact-us",
          children: [],
        },
      ],
    },
  ];

  return (
    <main>
      <div className="w-full sm:w-[90%] md:w-[80%] mx-auto text-center mt-16 sm:mt-24 md:mt-28">
        {data.map((node, index) => (
          <TreeNode key={`${node}-sitemap`} node={node} />
        ))}
      </div>
    </main>
  );
});

export default Sitemap;
