import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
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
              Collaborate on product reviews easily
            </h1>
            <p className="text-xl text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100">
              {`A developer tool for product teams to manage UX/UI feedback on code changes`}
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" href="/signup" target="_blank" rel="noopener noreferrer">
                  Get Started {' '}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div className='hidden sm:block'>
                <a className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm" href="https://demo.pageblox.io/?review_mode=true" target="_blank" rel="noopener noreferrer">
                  Try Now on Desktop
                </a>
              </div>
              <div className='block sm:hidden'>
                <p className='btn block sm:hidden text-slate-300 bg-slate-700 border-slate-600 w-full shadow-sm'>
                  Try Now on Desktop
                </p>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="pt-16 md:pt-20" data-aos="fade-up" data-aos-delay="300">
            <img className="mx-auto object-contain rounded-lg" src='/images/pageblox-demo.gif' width="850" height="500" alt="demo gif" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
