import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as ga from '../../lib/google-analytics'

import Illustration from '../../../public/images/cta-illustration.svg';

function Cta() {
  const onBetaAccess = (event) => {
    ga.event({
      action: "get-beta-access"
    })
  }

  return (
    <>
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mt-8 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width="1440" height="440" alt="Features 01 Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto text-center pb-12 md:pb-20" data-aos="fade-up">
            <h2 className="h2 font-hkgrotesk">Faster UX/UI reviews for code changes</h2>
          </div>
          {/* Buttons */}
          <div className="text-center">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div data-aos="fade-up" data-aos-delay="100">
                <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" href="https://289qfe92z29.typeform.com/to/LJNGDV6f" target="_blank" rel="noopener noreferrer" onClick={onBetaAccess}>
                  Get Started Free {' '}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <a className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm cursor-pointer" href="https://github.com/pageblox-org/pageblox-react" target="_blank" rel="noopener noreferrer">
                  Read Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      </>
  );
}

export default Cta;
