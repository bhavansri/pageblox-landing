import React, { useState } from 'react';
import Link from 'next/link';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../utils/firebase-config';

function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(firstName, lastName, email, message)
    await addDoc(collection(database, "signups"), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    })

    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden font-inter antialiased text-slate-200 tracking-tight">
      {/* Site header */}
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="flex items-center gap-5" href="/" aria-label="Cruip">
                <img src='/images/pageblox-logo.svg' className="max-w-none" width="35" height="35" alt="Page Illustration" />
                <h2 className='h5 font-inter uppercase font-bold'>Pageblox</h2>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="grow">
        <section className="relative">
          {/* Illustration */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <img src='/images/auth-illustration.svg' className='max-w-none' width="1440" height="332" alt="Page Illustration" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="lg:flex lg:space-x-20">
                {/* Left side */}
                <div className="grow lg:mt-20 mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
                  {/* Headline */}
                  <h1 className="h2 font-hkgrotesk mb-5 text-center lg:text-left">Get beta access for $7/month</h1>
                  <p className='mb-8 text-gray-400 italic text-lg'>60-day full money back guarantee, cancel your subscription anytime.</p>
                  {/* List */}
                  <ul className="inline-flex flex-col text-lg text-slate-200 space-y-3">
                  <li>
                      <span>📈 Use on unlimited projects, with no restrictions on reviewers</span>
                    </li>
                    <li>
                      <span>⚡️ Fast, responsive and personalized customer support</span>
                    </li>
                    <li>
                      <span>💡 We work closely with you to build fast follow solutions</span>
                    </li>
                  </ul>
                </div>
                {/* Right side */}
                <div className="relative w-full max-w-md mx-auto">
                  {/* Bg gradient */}
                  <div className="absolute inset-0 opacity-40 bg-gradient-to-t from-transparent to-slate-800 -z-10" aria-hidden="true" />
                  <div className="p-6 md:p-8">
                    <div className="font-hkgrotesk text-xl font-bold mb-6">Let's talk</div>
                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                          <div className="sm:w-1/2">
                            <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="name">
                              First Name <span className="text-rose-500">*</span>
                            </label>
                            <input id="name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className="form-input text-sm py-2 w-full" type="text" required />
                          </div>
                          <div className="sm:w-1/2">
                            <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="lastname">
                              Last Name <span className="text-rose-500">*</span>
                            </label>
                            <input id="lastname" value={lastName} onChange={(e) => { setLastName(e.target.value) }} className="form-input text-sm py-2 w-full" type="text" required />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="email">
                            Email <span className="text-rose-500">*</span>
                          </label>
                          <input id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-input text-sm py-2 w-full" type="email" required />
                        </div>
                        <div>
                          <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="message">
                            Message <span className="text-rose-500">*</span>
                          </label>
                          <textarea id="message" value={message} onChange={(e) => { setMessage(e.target.value) }} className="form-textarea text-sm py-2 w-full" rows="4" required />
                        </div>
                      </div>
                      <div className="mt-6">
                        {
                          submitted ?
                            <button className='btn-sm text-sm text-white bg-green-500 hover:bg-green-600 w-full shadow-sm group'>
                              Submitted!
                            </button> :
                            <button type="submit" className="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                              Send Message{' '}
                              <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                -&gt;
                              </span>
                            </button>}
                        {submitted && <p className='text-gray-400 w-full text-sm mt-2'>
                          Thanks! We'll be in touch with you shortly.
                        </p> }
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUp;