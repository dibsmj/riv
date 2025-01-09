import dynamic from "next/dynamic";
import { headers } from "next/headers";

const FaqPage = dynamic(() => import("@/pagecomponent/FaqPage"));

export const metadata = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/faq`;
  return {
    title:
      "rivexa FAQ: Answers to Your Queries for a Seamless Sourcing Experience",
    alternates: {
      canonical: canonicalUrl,
    },
    keywords:
      "B2B Marketplace, b2b marketplace platform, b2b online marketplace, b2b ecommerce marketplace, Global b2b Marketplace, Custom manufacturing, custom manufacturing services, b2b procurement platform, custom product manufacturing",
    description:
      "Find answers to common questions at rivexa's FAQ. Your easy guide to clarity and insights for a seamless sourcing experience",
    openGraph: {
      type: "website",
      siteName: "rivexa",
      title:
        "rivexa FAQ: Answers to Your Queries for a Seamless Sourcing Experience",
      description:
        "Find answers to common questions at rivexa's FAQ. Your easy guide to clarity and insights for a seamless sourcing experience",
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

export default function Faq() {
  const data = {
    headerTitle:
      "rivexa FAQ: Answers to Your Queries for a Seamless Experience",
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ's",
        item: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/faq`,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqPage propsData={data} />
    </>
  );
}
