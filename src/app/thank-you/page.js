import dynamic from "next/dynamic";
import { headers } from "next/headers";

const Thankyoupage = dynamic(() => import("@/pagecomponent/General/ThankYou"));

export const metadata = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/thank-you`;
  return {
    title: "rivexa - Thank you",
    alternates: {
      canonical: canonicalUrl,
    },
    description: "Thank you",
    openGraph: {
      type: "website",
      siteName: "rivexa",
      title: "rivexa - Thank you",
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

export default function Thankyou() {
  const data = {
    headerTitle: "rivexa - Thank you",
  };
  return <Thankyoupage propsData={data} />;
}
