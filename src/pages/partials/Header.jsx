import React from 'react';
import Link from 'next/link';
import * as ga from '../../lib/google-analytics'

function Header() {

  const onBetaAccess = (event) => {
    ga.event({
      action: "get-beta-access"
    })
  }

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="flex items-center gap-5" href="/" aria-label="Cruip">
              <img src='/images/pageblox-logo.svg' height={35} width={35} />
              <h2 className='h5 font-inter uppercase font-bold'>Pageblox</h2>
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-3">
                <Link className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" href="https://289qfe92z29.typeform.com/to/LJNGDV6f" target="_blank" rel="noopener noreferrer" onClick={onBetaAccess}>
                  Get Started <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
