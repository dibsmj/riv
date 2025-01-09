import dynamic from "next/dynamic";
import { headers } from "next/headers";

const HomePage = dynamic(() => import("@/pagecomponent/HomePage"));

export const metadata = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}`;
  return {
    title: "rivexa- Global B2B Marketplace for Custom Manufacturing Services",
    alternates: {
      canonical: canonicalUrl,
    },
    keywords:
      "B2B Marketplace, b2b marketplace platform, b2b online marketplace, b2b ecommerce marketplace, Global b2b Marketplace, Custom manufacturing, custom manufacturing services, b2b procurement platform, custom product manufacturing",
    description:
      "Unlock global trade with rivexa, a B2B e-commerce marketplace connecting buyers and manufacturers worldwide. Elevate your experience with our custom manufacturing services.",
    openGraph: {
      type: "website",
      siteName: "rivexa",
      title: "rivexa- Global B2B Marketplace for Custom Manufacturing Services",
      description:
        "Unlock global trade with rivexa, a B2B e-commerce marketplace connecting buyers and manufacturers worldwide. Elevate your experience with our custom manufacturing services.",
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

export default async function Home({ params }) {
  const data = {
    headerTitle: "Revolutionary global B2B marketplace",
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rivexa",
    url: "https://www.rivexa.com/",
    logo: "https://www.rivexa.com/logo.png", // Replace with the actual logo URL
    sameAs: [
      "https://www.instagram.com/rivexa_by_mjunction/",
      "https://www.facebook.com/rivexabymjunction",
      "https://www.linkedin.com/showcase/rivexabymjunction/",
      "https://www.youtube.com/@Rivexa",
    ],
  };
  const otherjsonLd = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "rivexa",
    url: "https://www.rivexa.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.rivexa.com/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const blogData = await fetch(
    `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/api/gethomeblog`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(otherjsonLd) }}
      />
      <HomePage propsData={data} homePageBlogs={homePageBlogs} />
    </>
  );
}
