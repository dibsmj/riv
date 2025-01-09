import dynamic from "next/dynamic";
import { headers } from "next/headers";

const ContactUs = dynamic(() => import("@/pagecomponent/ContactUs"));

export const metadata = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/contact-us`;
  return {
    title: "Contact Us for Industrial and Clothing Manufacturing Solution",
    alternates: {
      canonical: canonicalUrl,
    },
    keywords:
      "B2B Marketplace, b2b marketplace platform, b2b online marketplace, b2b ecommerce marketplace, Global b2b Marketplace, Custom manufacturing, custom manufacturing services, b2b procurement platform, custom product manufacturing",
    description:
      "Contact rivexa for custom solutions in industrial and fashion manufacturing, bulk textile sourcing, and sustainable innovations.",
    openGraph: {
      type: "website",
      siteName: "rivexa",
      title: "Contact Us for Industrial and Clothing Manufacturing Solution",
      description:
        "Contact rivexa for custom solutions in industrial and fashion manufacturing, bulk textile sourcing, and sustainable innovations.",
      images: [
        {
          url: "/aboutrivexa_old.png",
        },
      ],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
        { url: "/favicon-48x48.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/favicon-96x96.ico", sizes: "96x96", type: "image/x-icon" },
        { url: "/favicon-144x144.ico", sizes: "144x144", type: "image/x-icon" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
};

export default function Contactus() {
  const data = {
    headerTitle: "Revolutionary global B2B marketplace",
  };
  return <ContactUs propsData={data} />;
}
