import React, { useEffect } from 'react';

// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
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
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between pb-6 md:pb-10">
            <div className='text-slate-300 pr-5 mb-8 md:w-1/2'>
              <h2 className="h4 md:h2 font-hkgrotesk mb-4 text-left">Build features with less bugs and on time!</h2>
              <p className="text text-slate-400">
                Getting your front-end code reviewed is a painful process. It requires a lot of back-and-forth between product stakeholders, involving a lot of screenshots, emails, and meetings.
              </p>
              <p className="text text-slate-400 mt-5">
                Pageblox solves this by allowing stakeholders to review code changes in a visual way, without having to leave the browser. It's collaborative & real-time, so you can get feedback and iterate faster.
              </p>
            </div>
            <div className="text-md md:text-lg text-slate-300">
              <img src='/images/pageblox-demo.gif' width="850" height="100%" alt="Pageblox Demo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
