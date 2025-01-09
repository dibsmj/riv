import dynamic from "next/dynamic";
import { headers } from "next/headers";

const PrivacyPolicy = dynamic(() => import("@/pagecomponent/PrivacyPolicy"));

export const metadata = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/thank-you`;
  return {
    title: "rivexa - Privacy Policy",
    alternates: {
      canonical: canonicalUrl,
    },
    description: "Privacy Policy",
    openGraph: {
      type: "website",
      siteName: "rivexa",
      title: "rivexa - Privacy Policy",
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

export default function Privacy() {
  const data = {
    headerTitle: "rivexa - Privacy Policy",
  };
  return <PrivacyPolicy propsData={data} />;
}
