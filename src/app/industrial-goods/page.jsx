import dynamic from "next/dynamic";
import { headers } from "next/headers";

const Industrialgood = dynamic(() => import("@/pagecomponent/IGHomePage"));

// const Industrialgood = dynamic(() => import("@/pagecomponent/IGLandingPage"));

export const metadata = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/industrial-goods`;
  return {
    title: "Custom Industrial Products, Machinery Parts & Components | rivexa",
    description:
      "Explore custom industrial products at rivexa, connecting you with top manufacturers of industrial machinery parts & components in India for quality manufacturing solutions.",
    keywords:
      "B2B Marketplace, b2b marketplace platform, b2b online marketplace, b2b ecommerce marketplace, Global b2b Marketplace, Custom manufacturing, custom manufacturing services, b2b procurement platform, custom product manufacturing",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      site_name: "rivexa",
      title:
        "Custom Industrial Products, Machinery Parts & Components | rivexa",
      description:
        "Explore custom industrial products at rivexa, connecting you with top manufacturers of industrial machinery parts & components in India for quality manufacturing solutions.",
      images: [
        {
          url: "/ig_bv_webp.webp",
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

export default async function Industrialgoods() {
  const data = {
    headerTitle:
      "Custom Industrial Products, Machinery Parts & Components | rivexa",
  };
  const jsonLd = {
    "@context": "https://schema.org/",
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
        name: "Industrial Goods",
        item: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/industrial-goods`,
      },
    ],
  };
  const blogData = await fetch(
    `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/api/getigblog`,
    {
      cache: "no-store",
    }
  );
  const homePageBlogs = await blogData.json();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Industrialgood propsData={data} homePageBlogs={homePageBlogs} />
    </>
  );
}
