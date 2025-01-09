import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { getCategoryHeader, getMetaData } from "@/constants/ig";
import { notFound } from "next/navigation";

const Industrialgoodcategory = dynamic(() =>
  import("@/pagecomponent/IGSubCategory")
);

export async function generateMetadata({ params }) {
  const { igcategory, subprocess } = await params;
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/industrial-goods/${igcategory}/${subprocess}`;
  return {
    title: getMetaData(subprocess.replace(/-/g, "")).metaTitle,
    description: getMetaData(subprocess.replace(/-/g, "")).description,
    keywords: getMetaData(subprocess.replace(/-/g, "")).keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      site_name: "rivexa",
      title: getMetaData(subprocess.replace(/-/g, "")).metaTitle,
      description: getMetaData(subprocess.replace(/-/g, "")).description,
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
}

export default async function Industrialgoods({ params }) {
  const { igcategory, subprocess } = await params;
  const data = {
    headerTitle: getMetaData(subprocess.replace(/-/g, "")).metaTitle,
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
      {
        "@type": "ListItem",
        position: 3,
        name: `${getCategoryHeader(igcategory).title}`,
        item: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/industrial-goods/${igcategory}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${getCategoryHeader(subprocess.replace(/-/g, "")).title}`,
        item: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/industrial-goods/${igcategory}/${subprocess}`,
      },
    ],
  };
  const VALID_CATEGORIES = [
    "casting",
    "forging",
    "machining",
    "fabrication",
    "extrusion",
    "molding"
  ];
  const VALID_SUBPROCESSES = [
    "aluminiumdiecasting",
    "landingaluminiumdiecasting",
    "sandcasting",
    "investmentcasting",
    "opendieforging",
    "closeddieforging",
    "cncmachining",
    "conventionalmachining",
    "equipmentfabrication",
    "sheetmetalfabrication",
    "structuralfabrication",
    "aluminiumextrusion",
    "injectionmolding",
  ];
  if (
    !VALID_CATEGORIES.includes(igcategory.replace(/-/g, "")) ||
    !VALID_SUBPROCESSES.includes(subprocess.replace(/-/g, ""))
  ) {
    notFound(); // Redirect to 404 page if invalid
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Industrialgoodcategory
        propsData={data}
        igcategory={igcategory.replace(/-/g, "")}
        subprocess={subprocess.replace(/-/g, "")}
      />
    </>
  );
}
