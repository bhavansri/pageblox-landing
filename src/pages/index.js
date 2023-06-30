import Head from "next/head";
import Aos from "aos";
import Header from "./partials/Header";
import Hero from "./partials/Hero";
import Features from "./partials/Features";
import Features02 from "./partials/Features02";
import Faqs from "./partials/Faqs";
import Cta from "./partials/Cta";
import Integrations from "./partials/Integrations";
import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Head>
        <title>Pageblox</title>
        <meta
          name="title"
          property="og:title"
          content="Pageblox - Real-time collaborative reviews on UX/UI code changes"
        ></meta>
        <meta
          name="image"
          property="og:image"
          content="/images/pageblox-og.png"
        ></meta>
        <meta
          name="description"
          property="og:description"
          content="A developer tool for product teams to manage UX/UI feedback on code changes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/images/pageblox-logo.svg"
        />
        <Script>
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t, e) { var o = e.split("."); 2 == o.length && (t = t[o[0]], e = o[1]), t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }(p = t.createElement("script")).type = "text/javascript", p.async = !0, p.src = s.api_host + "/static/array.js", (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('phc_f4fR9nqXkvFJl3vKqiDgle2aziXu1oDwk7wVoZqtc7G',{api_host:'https://app.posthog.com'})`}
        </Script>
      </Head>
      <main className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Integrations />
        <Features02 />
        {/* <Faqs /> */}
        <Cta />
      </main>
    </>
  );
}
