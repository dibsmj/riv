import "./globals.css";
import AppProvider from "./_app";
import Script from "next/script";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/component/Header"));
const Footer = dynamic(() => import("@/component/Footer"));

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SYZGT46J1J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-inline" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SYZGT46J1J');
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11420962231"
          strategy="afterInteractive"
        />
        <Script id="google-ads-inline" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11420962231');
          `}
        </Script>
        <Script id="linkedin-partner-id" type="text/javascript" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "5523194";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight" type="text/javascript" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        <Script id="hotjar-inline" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:5117562,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        <Script type="text/javascript" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NF3DCTPN');
          `}
        </Script> */}
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NF3DCTPN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=5523194&fmt=gif"
          />
        </noscript>
        <div className="w-full m-auto overflow-hidden">
          <Header />
          <AppProvider>{children}</AppProvider>
          <Footer />
          <div className=" relative m-auto">
            <div className=" z-[999] p-[0.35rem] inline-flex xs:flex-col sm:flex-col ssm:flex-row md:flex-row lg:flex-row xl:flex-row fixed bottom-0 w-full h-auto justify-center items-center align-middle bg-[#4a3587] text-primaryWhite">
              <span className=" no-underline mr-2">Announcement :</span>
              <a
                href="/event/steelfab-me"
                className="text-primaryWhite cursor-pointer"
              >
                Your India sourcing journey starts with rivexa. Connect with our
                team at SteelFab - 2025, Sharjah
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
