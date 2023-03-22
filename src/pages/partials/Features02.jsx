import React, { useState } from 'react';

import Illustration from '../../../public/images/features-illustration-02.svg';
import Workflow from '../../../public/images/workflow.svg';
import ProductDesign from '../../../public/images/design-product.svg';
import WebDevelopment from '../../../public/images/web-development.svg';
import Freelancer from '../../../public/images/freelance-icon.svg';
import Image from 'next/image';

const CategoryImage = ({ category }) => {
  switch (category) {
      case '1':
        return <Image src={Workflow} className="md:max-w-none p-5" width="300" height="320" alt="Workflow Icon" />
      case '2':
      return <Image src={ProductDesign} className="md:max-w-none p-5" width="300" height="320" alt="Product Design Icon" />
    case '3':
      return <Image src={WebDevelopment} className="md:max-w-none p-5" width="300" height="320" alt="Web Development Icon" />
    case '4':
      return <Image src={Freelancer} className="md:max-w-none p-5" width="350" height="330" alt="Freelancer Icon" />
  }
}

function Features02() {

  const [category, setCategory] = useState('1');

  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width="1440" height="453" alt="Features 02 Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">Built specific for product teams</h2>
          </div>
          {/* Box */}
          <div className="bg-slate-800 bg-opacity-60 rounded overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end items-center md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '1' ? 'text-white bg-indigo-500' : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('1')}
                    >
                      Product Managers
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '2' ? 'text-white bg-indigo-500' : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('2')}
                    >
                      Designers
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '3' ? 'text-white bg-indigo-500' : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('3')}
                    >
                      Engineers
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '4' ? 'text-white bg-indigo-500' : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('4')}
                    >
                      Freelancers
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== '1' && 'hidden'}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">Faster review process that helps your team ship on time</h3>
                    <div className="text-lg text-slate-500">
                      Reviewing features & fixes usually require a lot of back and forth conversations or finding time to meet.
                      <br/><br/>
                      Now, you can manage feedback directly in the app and ship on time.
                    </div>
                  </div>
                  <div className={`${category !== '2' && 'hidden'}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">Ensure front-end changes meet design requirements</h3>
                    <div className="text-lg text-slate-500">
                      Design requirements change frequently and prototyping tools can't capture the dynamic states of web apps.
                      <br/><br/>
                      Use pageblox to leave iterative feedback and ensure design quality is met on UX/UI changes.
                    </div>
                  </div>
                  <div className={`${category !== '3' && 'hidden'}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">Spend less time blocked, more time building</h3>
                    <div className="text-lg text-slate-500">
                      A typical product review process costs many hours and prevents the developer from merging their code to production.
                      <br /><br />
                      With a simplified review workflow, developers can get fast turnaround on feedback and ensure they meet the next release cycle.
                    </div>
                  </div>
                  <div className={`${category !== '4' && 'hidden'}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">Communicate changes with clients hassle-free</h3>
                    <div className="text-lg text-slate-500">
                      Showing off work to clients and collecting feedback is difficult with timezone differences, e-mail, and managing spreadsheets.
                      <br /><br />
                      Instead, clients can leave their specific design feedback directly on your work as you iterate on development.
                    </div>
                  </div>
                </div>
              </div>
              <CategoryImage category={category} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features02;
