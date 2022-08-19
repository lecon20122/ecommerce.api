import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { InertiaLink } from '@inertiajs/inertia-react';
import route from 'ziggy-js';
import NavBarLinks from '../shards/NavBarLinks';



export default function Navbar() {
  return (
    <div>
      <header className="bg-white py-3">
        <div className="px-4">
          <div className="flex flex-wrap items-center">
            {/* Brand  */}
            <div className="flex-shrink-0 mr-auto ml-5">
              <InertiaLink href={route('home')}>
                <img src="https://freepngclipart.com/download/clothing/13219-clothing-baby-clothes-2-image-png-image.png" height={38} width={38} alt="Brand" />
              </InertiaLink>
            </div>
            {/* Brand .//end */}

            {/* Search  */}
            <div className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-[60%]">
              <input className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" type="text" placeholder="Search" />
              <button type="button" className="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 rounded-md hover:bg-blue-700">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            {/* <!-- Search .//end --> */}

            {/* <!-- Actions --> */}
            <div className="flex items-start space-x-2 ml-auto xl:ml-11">
              <NavBarLinks />
            </div>
            {/* <!-- Actions .//end --> */}

            {/* <!-- mobile-only --> */}
            <div className="lg:hidden ml-2">
              <button type="button" className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent">
                <span className="sr-only">Open menu</span>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            {/* <!-- mobile-only //end  --> */}

          </div>{/* <!-- flex grid //end --> */}
        </div>  {/*<!-- container //end --> */}
      </header>
    </div>
  )
}
