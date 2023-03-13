import React, { useEffect } from 'react';
import hljs from 'highlight.js';

const markdown = `
  import { PagebloxDndProvider } from 'pageblox-react'
  import 'pageblox-react/dist/index.css'

  export default function App({ Component, pageProps }) {
    return (
      <PagebloxDndProvider clientId="playgroundKey">
        <Component {...pageProps} />
      </PagebloxDndProvider>
    )
  }
`;

function Integrations() {

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <section className="relative">
      {/* Bottom vertical line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-800 flex flex-col lg:flex-row justify-between">
          {/* Section header */}
          <div className="mx-auto text-center">
            <h2 className="h4 text-left font-hkgrotesk">Install & use developer-friendly SDK in minutes</h2>
            <p className="text-xl text-left text-slate-500 my-5">
              Turn your app into a reviewable interface with just a couple lines of code.
            </p>
            <div className="sm:text-left text-center">
              <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="https://docs.pageblox.io" target="_blank" rel="noopener noreferrer">
                Read the Docs {' '}
                <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
          </div>
          <div className="py-2 pt-5 lg:pt-0">
            <pre>
              <code className='language-javascript rounded-lg'>{markdown}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrations;
