import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as ga from '../../lib/google-analytics';
import YoutubeEmbed from '../components/YoutubeEmbed';

function Hero() {
  const onBetaAccess = (event) => {
    ga.event({
      action: "get-beta-access"
    })
  }

  return (
    <>
      <section className="relative">
      {/* Illustration */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image src='/images/hero-illustration.svg' priority={true} className="max-w-none" width="1440" height="1265" alt="Hero Illustration" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="h2 font-hkgrotesk mb-6" data-aos="fade-up">
                Ship features with faster UX/UI iterations
            </h1>
              <p className="text-xl text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100">
                Open-source react library to collaborate on UX/UI reviews in the browser
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" href="/signup" onClick={onBetaAccess} target="_blank" rel="noopener noreferrer">
                  Get Started Free {' '}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div>
                <a className='btn block sm:hidden text-white bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm cursor-pointer' href="https://docs.pageblox.io" target="_blank" rel="noopener noreferrer">
                  Read Docs
                </a>
              </div>
            </div>
          </div>
          {/* Hero image */}
            <div className="pt-16 md:pt-20" data-aos="fade-up" data-aos-delay="300">
              <YoutubeEmbed embedId="O4jTSwObSVg" />
          </div>
        </div>
      </div>
      </section>
      </>
  );
}

export default Hero;
