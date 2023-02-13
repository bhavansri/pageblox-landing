import Head from 'next/head'
import Aos from 'aos'
import Header from './partials/Header'
import Hero from './partials/Hero'
import Features from './partials/Features'
import Features02 from './partials/Features02'
import Faqs from './partials/Faqs'
import Cta from './partials/Cta'
import Integrations from './partials/Integrations'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <>
      <Head>
        <title>Pageblox</title>
        <meta name="description" content="Code reviews for UX/UI changes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" /><link rel="icon" type="image/svg+xml" href="/images/pageblox-logo.svg" />
      </Head>
      <main className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Integrations />
        <Features02 />
        <Faqs />
        <Cta/>
      </main>
    </>
  )
}
