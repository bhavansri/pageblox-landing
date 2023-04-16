import React, { useEffect } from 'react';

// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import Image from 'next/image';
Swiper.use([Autoplay, Navigation]);

function Features() {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    });
  }, []);

  return (
    <section className="relative">
      {/* Bg illustration */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10" aria-hidden="true">
        <img src='/images/features-illustration.svg' className="max-w-none" width="1440" height="440" alt="Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="flex items-start justify-between pb-12 md:pb-20">
            <div className='w-1/2 text-slate-300 pr-5'>
              <h2 className="h3 md:h2 font-hkgrotesk mb-4">Accelerate your UX/UI review workflows</h2>
              <p className="text md:text-lg text-slate-400">
                Reviewing UX/UI changes is hard. It's an inefficient process that often results in launch delays & uncaught buggy code. 
              </p>
              <p className="text md:text-lg text-slate-400 mt-5">
                Pageblox solves this by creating a single review interface, reducing the back-and-forth in the review process between stakeholders and developers.
              </p>
            </div>
            <div className="w-1/2 text-md md:text-lg text-slate-300">
              <img src='/images/pageblox-demo.gif' width="100%" height="100%" alt="Pageblox Demo" />
            </div>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <Image className="mb-3" src='/images/drag-and-drop.svg' width="56" height="56" alt="Icon 01" />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">Drag & drop review environment</div>
                  <div className="text-slate-500 mb-3 mt-2">
                    Installing our SDK turns your pages into an annotation tool, similar to Figma & Google Docs.
                  </div>
                </div>
                <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="https://docs.pageblox.io" target="_blank" rel="noopener noreferrer">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <Image className="mb-3" src='/images/comment.svg' width="56" height="56" alt="Icon 02" />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">Collaborate on reviews real-time</div>
                  <div className="text-slate-500 mb-3 mt-2">
                    Stakeholders can leave comments & replies, create or resolve threads, and attach screen recordings.
                  </div>
                </div>
                <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="https://docs.pageblox.io" target="_blank" rel="noopener noreferrer">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <Image className="mb-3" src='/images/complex-web-design.svg' width="56" height="56" alt="Icon 03" />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">Designed with complexity in mind.</div>
                  <div className="text-slate-500 mb-3 mt-2">
                    Handles routing, SPAs & server-side, CSR & SSR, nested UI elements, and more.
                  </div>
                </div>
                <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="https://docs.pageblox.io" target="_blank" rel="noopener noreferrer">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex md:hidden mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
