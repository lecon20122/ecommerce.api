import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#F6F6F6] text-black">
      <section className="py-10 text-black">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap">
            <aside className="w-full md:w-1/3 lg:w-1/4 mb-5">
              {/* <img src="images/logo-white.png" height="38" alt="Company name" /> */}
              <p className="my-4">
                Company name. <br/>
                © 2018- 2021 Templatemount. <br/>
                All rights reserved.
              </p>
            </aside>
            {/* <!-- col .// --> */}
            <aside className="w-1/2 sm:w-auto flex-auto mb-5">
              <h3 className="font-semibold">Store</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Join us </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Find store </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Categories </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Partnership </a>
                </li>
              </ul>
            </aside>
            <aside className="w-1/2 sm:w-auto flex-auto mb-5">
              <h3 className="font-semibold">About</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> About us </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Our history </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Our team </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Offices </a>
                </li>
              </ul>
            </aside>
            {/* <!-- col .// --> */}
            <aside className="w-1/2 sm:w-auto flex-auto mb-5">
              <h3 className="font-semibold">Help</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Contact us </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Submit ticket </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> FAQs </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Refunds </a>
                </li>
              </ul>
            </aside>
            {/* <!-- col .// --> */}
            <aside className="w-1/2 sm:w-auto flex-auto mb-5">
              <h3 className="font-semibold">Links</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Our terms </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Privacy setting</a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100"> Sign up </a>
                </li>
              </ul>
            </aside>
            {/* <!-- col .// --> */}
            <aside className="w-1/2 sm:w-auto lg:w-40 mb-5">
              <h3 className="font-semibold">Apps</h3>
              <a href="#" className="mt-3 inline-block">
                {/* <img className="h-10" src="images/misc/btn-appstore.png" height="38" /> */}
              </a>
              <a href="#" className="inline-block">
                {/* <img className="h-10" src="images/misc/btn-market.png" height="38" /> */}
              </a>
            </aside>
            {/* <!-- col .// --> */}
          </div>
          {/* <!-- grid .// --> */}
        </div>
        {/* <!-- container .// --> */}
      </section>
      <section className="text-black">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="lg:flex justify-between">
            <div className="mb-3">
              {/* <img src="images/misc/payments.png" height="24" className="h-6" alt="Payment methods" /> */}
            </div>
            {/* <!-- col .// --> */}
            <div className="space-x-6">
              <nav className="text-sm space-x-4">
                <a href="#" className="opacity-70 hover:opacity-100">
                  Support
                </a>
                <a href="#" className="opacity-70 hover:opacity-100">
                  Privacy &amp; Cookies
                </a>
                <a href="#" className="opacity-70 hover:opacity-100">
                  Accessibility
                </a>
              </nav>
            </div>
            {/* <!-- col .// --> */}
          </div>
          {/* <!-- grid .// --> */}
        </div>
        {/* <!-- container .// --> */}
      </section>
      {/* <!-- section footer bottom  end --> */}
    </footer>

  )
}
