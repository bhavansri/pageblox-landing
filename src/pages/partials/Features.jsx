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
          <div className="flex items-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4 w-1/2">Simplify your <br/> review workflow</h2>
            <div className="w-1/2">
              <p className="text-lg text-slate-500">
                The current team workflows for reviewing UX/UI code changes is a convoluted process involving multiple tools & communication channels - resulting in launch delays, poor documentation, and uncaught bugs.
                Pageblox solves this by offering a simple interface directly on the app, so stakeholders can engage in an effortless, high-quality review process.
              </p>
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
                  <div className="font-hkgrotesk font-bold text-xl">Designed for complex web apps.</div>
                  <div className="text-slate-500 mb-3 mt-2">
                    Built for a single surface, and complex surfaces with hidden components (i.e. Dropdowns/Modals)
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
        </div>
      </div>
    </section>
  );
}

export default Features;
