import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePageblox } from 'pageblox-react';
import * as ga from '../../lib/google-analytics'

import Illustration from '../../../public/images/cta-illustration.svg';
import Modal from '../components/Modal';

function Cta() {
  const [showModal, setShowModal] = useState(false)
  const { onTryPageblox } = usePageblox()

  const onBetaAccess = (event) => {
    ga.event({
      action: "get-beta-access"
    })
  }

  const onTryNow = (event) => {
    ga.event({
      action: "try-now"
    })

    setShowModal(true)
  }

  const onModalClose = (event) => {
    setShowModal(false)
    
    onTryPageblox()
  }

  return (
    <>
    <Modal showModal={showModal} onModalClose={onModalClose} />
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
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20" data-aos="fade-up">
            <h2 className="h2 font-hkgrotesk">Spend more time on building, <br/>with less back-and-forths</h2>
          </div>
          {/* Buttons */}
          <div className="text-center">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div data-aos="fade-up" data-aos-delay="100">
                <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" href="/contact" target="_blank" rel="noopener noreferrer" onClick={onBetaAccess}>
                  Get Beta Access {' '}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div className='hidden sm:block' data-aos="fade-up" data-aos-delay="200">
                <a className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm cursor-pointer" onClick={onTryNow}>
                  Try Now on Desktop
                </a>
              </div>
              <div className='block sm:hidden' data-aos="fade-up" data-aos-delay="200">
                <p className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm cursor-pointer">
                  Try Now on Desktop
                </p>
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
