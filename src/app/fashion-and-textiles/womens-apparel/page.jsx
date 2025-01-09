import dynamic from "next/dynamic";
import { headers } from "next/headers";

const FHTWomensApparel = dynamic(() =>
  import("@/pagecomponent/FHTSubcategoryPages/WomensApparel")
);

export const metadata = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/fashion-and-textiles/womens-apparel`;
  return {
    title: "Custom Womens Apparel Manufacturers and Suppliers",
    description:
      "Discover trendy women's apparel rivexa's diverse collection: top & bottom wear, athleisure, winterwear, maternity wear, inner & sleepwear.",
    keywords:
      "B2B Marketplace, b2b marketplace platform, b2b online marketplace, b2b ecommerce marketplace, Global b2b Marketplace, Custom manufacturing, custom manufacturing services, b2b procurement platform, custom product manufacturing",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      site_name: "rivexa",
      title: "Custom Womens Apparel Manufacturers and Suppliers",
      description:
        "Discover trendy women's apparel rivexa's diverse collection: top & bottom wear, athleisure, winterwear, maternity wear, inner & sleepwear.",
      images: [
        {
          url: "/fht_bg_video_webp.webp",
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

export default function Fashionandtextiles() {
  const data = {
    headerTitle: "rivexa - Womens Apparel",
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
        name: "Fashion and Home Textiles",
        item: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/fashion-and-textiles`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Womens Apparel",
        item: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/fashion-and-textiles/womens-apparel`,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FHTWomensApparel propsData={data} />
    </>
  );
}
