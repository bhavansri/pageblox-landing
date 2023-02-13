import React from 'react';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 pt-5 md:pb-20 md:pt-5">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">FAQs</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What types of codebases do you support?</h4>
                <p className="text-slate-500">
                  Currently the SDK works for only React projects. We do however, have plans to support more JavaScript frameworks.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">How much does it cost to use?</h4>
                <p className="text-slate-500">
                  We currently charge users $10/month to get an API key and use the SDK in projects.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Why an SDK instead of a chrome extension?</h4>
                <p className="text-slate-500">
                  We chose an SDK approach because it allows a better collaborative experience for reviews, and handles the complexity that comes with a dynamic app.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Are any integrations supported?</h4>
                <p className="text-slate-500">
                  Integrations with workplace tools like Jira, Linear, and Github will be built as fast follow features for our beta customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
