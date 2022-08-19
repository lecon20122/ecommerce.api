import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react';
import route from 'ziggy-js';

export default function Navbar() {
  const sidebar = document.getElementById('sidebar')
  const backdrop = document.getElementById('backdrop')

  const open_sidebar = () => {
    sidebar?.classList.remove('-left-full');
    backdrop?.classList.remove('hidden');
  }

  return (
    <header className="h-14 z-10 py-3 bg-white shadow-sm border-b border-gray-200">
      <div className="container h-full flex items-center justify-between px-6 mx-auto">

        {/* <!-- Mobile hamburger --> */}
        <button onClick={() => open_sidebar()} className="p-1 mr-5  md:hidden focus:outline-none focus:shadow-outline-purple">
          <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="currentColor">
            <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>

        {/* <!-- Search input --> */}
        <form>
          <div className="relative">
            <input className="appearance-none border border-transparent bg-transparent rounded-md py-1 px-2 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Search for " aria-label="Search" />
          </div>
        </form>
        <ul className="flex items-center flex-shrink-0 space-x-2">
          {/* <li>
            <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-200" aria-label="Button name">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" /></svg>
            </button>
          </li>
          <li>
            <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-200" aria-label="Button name">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z"></path></svg>
            </button>
          </li>
          <li>
            <button className="w-10 h-10 flex items-center justify-center bg-gray-200 border border-transparent rounded-full hover:border-blue-400 overflow-hidden" aria-label="Button name">
              <img src="images/avatars/avatar.jpg" width="32" height="32" className="w-10 h-10 rounded-full" />
            </button>
          </li> */}
          <li>
            <InertiaLink href={route('admin.logout')} className="w-10 h-10 flex items-center justify-center bg-gray-200 border border-transparent rounded-full hover:border-blue-400 overflow-hidden logout" aria-label="Button name">
              <FontAwesomeIcon icon={faSignOutAlt} /></InertiaLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
