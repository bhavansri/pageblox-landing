import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { PagebloxProvider } from "pageblox-react";
import * as ga from "../lib/google-analytics";
import "pageblox-react/dist/index.css";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import "../styles/style.css";
import "../styles/dracula.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const excludePathsList = ["/login", "/register"];

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
        demoMode={true}
      >
        <Component {...pageProps} />
      </PagebloxProvider>
    </>
  );
}
