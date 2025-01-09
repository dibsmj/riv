import dynamic from "next/dynamic";
import { headers } from "next/headers";

const SingleBlogPage = dynamic(() => import("@/pagecomponent/BlogPages"));

const extractYoastWpseoTitle = (metaValues) => {
  if (typeof metaValues !== "string") {
    return null;
  }
  const metaArray = metaValues.split(", ");
  const yoastTitle = metaArray.find((item) =>
    item.startsWith("_yoast_wpseo_title:")
  );
  return yoastTitle ? yoastTitle.split(":").slice(1).join(":").trim() : null;
};

export async function generateMetadata({ params }) {
  const { news } = await params;
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/resources/${news}`;

  const blogData = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BLOGS_API_URL}wp-blogs/${news}`
  ).then((res) => res.json());

  return {
    title:
      blogData.length > 0
        ? extractYoastWpseoTitle(blogData[0]?.meta_values)
        : "",
    alternates: {
      canonical: canonicalUrl,
    },
    description: blogData.length > 0 ? blogData[0].page_title : "",
    openGraph: {
      type: "website",
      site_name: "rivexa",
      title:
        blogData.length > 0
          ? extractYoastWpseoTitle(blogData[0]?.meta_values)
          : "",
      description: blogData.length > 0 ? blogData[0].page_title : "",
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

export default async function Resources({ params }) {
  const { news } = await params;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BLOGS_API_URL}wp-blogs/${news}`
  ).then((res) => res.json());
  console.log(data);
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
        name: "Resources",
        item: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/news`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${data[0]?.page_title}`,
        item: `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/news/${news}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SingleBlogPage propsData={data} resource={news} />
    </>
  );
}
