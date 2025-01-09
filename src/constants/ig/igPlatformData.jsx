import p1 from "../../assets/CategoryPage/SubCategory/p1.png";
import p2 from "../../assets/CategoryPage/SubCategory/p2.png";
import p3 from "../../assets/CategoryPage/SubCategory/p3.png";
import p4 from "../../assets/CategoryPage/SubCategory/p4.png";
import p5 from "../../assets/CategoryPage/SubCategory/p5.png";
import p6 from "../../assets/CategoryPage/SubCategory/p6.png";
import ArrowIcon from "../../assets/CategoryPage/SubCategory/arrow.png";

export const CASTING_PLATFORM_DATA = [
  {
    id: 1,
    items: [
      {
        imageSrc: p1,
        title: "Registration",
        description: (
          <span>
            Register on our platform to eliminate delays. Join us in shaping the
            future of the B2B marketplace and start sourcing effortlessly –
            register on rivexa today.{' '}
            <a
              href="https://rivexa.com/resources/how-to-registered-as-a-buyer-on-rivexa"
              style={{
                color: "#4A3587",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Learn More
            </a>
          </span>
        ),
        arrow: ArrowIcon,
      },
      {
        imageSrc: p2,
        title: "RFQ",
        description: (
          <span>
            Submit your quotation request today and experience seamless sourcing
            with rivexa&rsquo;s transparent, flexible, and user-friendly
            process.{' '}
            <a
              href="https://rivexa.com/resources/unlocking-seamless-sourcing"
              style={{
                color: "#4A3587",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Learn More
            </a>
          </span>
        ),
        arrow: ArrowIcon,
      },
      {
        imageSrc: p3,
        title: "Contracting",
        description:
          "Take control of your procurement process: Create contracts and purchase orders effortlessly through Rivexa's platform, streamlining your operations",
        arrow: null,
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        imageSrc: p4,
        title: "Value Added Services",
        description:
          "Don't miss the opportunity to elevate your export journey with rivexa's value-added services.- Supplier Financing, Quality assurance and Logistics ",
        arrow: ArrowIcon,
      },
      {
        imageSrc: p5,
        title: "Payment",
        description:
          "Enter the world of seamless transactions with rivexa's flexible B2B payment solutions, integrated with your payment milestones for a hassle free sourcing experience",
        arrow: ArrowIcon,
      },
      {
        imageSrc: p6,
        title: "Time and Action Tracking",
        description: (
          <span>
            Stay ahead with rivexa&apos;s Time and Action Module: Streamlined
            B2B production, real-time visibility, and on-time deliveries –
            guaranteed excellence in motion.{' '}
            <a
              href="https://rivexa.com/resources/delivering-excellence-on-time"
              style={{
                color: "#4A3587",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Learn More
            </a>
          </span>
        ),
        arrow: null,
      },
    ],
  },
];
