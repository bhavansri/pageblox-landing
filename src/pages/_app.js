import { PagebloxProvider } from "pageblox-react";
import "pageblox-react/dist/index.css";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import "../styles/style.css";
import "../styles/dracula.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const excludePathsList = ["/login", "/register"];

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `}
      </Script>
      <PagebloxProvider
        projectId="maX1fU1LnwiquM4vAPZy"
        excludePaths={excludePathsList}
        demoMode={false}
      >
        <Component {...pageProps} />
      </PagebloxProvider>
    </>
  );
}
