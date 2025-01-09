import Pagenotfound from "@/pagecomponent/General/404";
import { headers } from "next/headers";

export const metadata = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/404`;
  return {
    title: "rivexa- 404",
    alternates: {
      canonical: canonicalUrl,
    },
    description: "404",
    openGraph: {
      type: "website",
      siteName: "rivexa",
      title: "rivexa- 404",
      description: "404",
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

export default async function NotFound() {
  const data = {
    headerTitle: "rivexa- 404",
  };
  return <Pagenotfound propsData={data} />;
}
