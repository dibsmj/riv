import dynamic from "next/dynamic";
import { headers } from "next/headers";

const VasPage = dynamic(() => import("@/pagecomponent/VasPage"));

export const metadata = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/value-added-services`;
  return {
    title: "Explore rivexa's Value-Added Services",
    alternates: {
      canonical: canonicalUrl,
    },
    keywords:
      "B2B Marketplace, b2b marketplace platform, b2b online marketplace, b2b ecommerce marketplace, Global b2b Marketplace, Custom manufacturing, custom manufacturing services, b2b procurement platform, custom product manufacturing",
    description:
      "rivexa offers comprehensive value-added services designed to streamline operations and maximize efficiency. Learn how our tailored solutions can elevate your business.",
    openGraph: {
      type: "website",
      site_name: "rivexa",
      title: "Explore rivexa's Value-Added Services",
      description:
        "rivexa offers comprehensive value-added services designed to streamline operations and maximize efficiency. Learn how our tailored solutions can elevate your business.",
      images: [
        {
          url: "/vas-bg.webp",
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

export default function Valueaddedservices() {
  const data = {
    headerTitle: "Explore rivexa's Value-Added Services",
  };
  return <VasPage propsData={data} />;
}
