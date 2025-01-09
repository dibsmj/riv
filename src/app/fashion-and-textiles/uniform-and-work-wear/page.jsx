import dynamic from "next/dynamic";
import { headers } from "next/headers";

const FHTUniform = dynamic(() =>
  import("@/pagecomponent/FHTSubcategoryPages/Uniform")
);

export const metadata = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/fashion-and-textiles/uniform-and-work-wear`;
  return {
    title: "Custom Uniforms and Workwear Manufacturers & Suppliers",
    description:
      "Source quality uniforms & workwear for hospitality, medical, defense, education, aviation, construction & safety. Connect with physically verified manufacturers on rivexa B2B export marketplace.",
    keywords:
      "B2B Marketplace, b2b marketplace platform, b2b online marketplace, b2b ecommerce marketplace, Global b2b Marketplace, Custom manufacturing, custom manufacturing services, b2b procurement platform, custom product manufacturing",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      site_name: "rivexa",
      title: "Custom Uniforms and Workwear Manufacturers & Suppliers",
      description:
        "Source quality uniforms & workwear for hospitality, medical, defense, education, aviation, construction & safety. Connect with physically verified manufacturers on rivexa B2B export marketplace.",
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
    headerTitle: "rivexa - Uniforms & Workwear",
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
        name: "Uniforms & Workwear",
        item: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/fashion-and-textiles/uniform-and-work-wear`,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FHTUniform propsData={data} />
    </>
  );
}
