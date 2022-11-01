import React from "react";
import {InertiaLink, usePage} from '@inertiajs/inertia-react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAlt} from '@fortawesome/free-solid-svg-icons';
import route from 'ziggy-js';

export default function Aside() {

  const {auth}: any = usePage().props

  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");

  const hide_sidebar = () => {
    sidebar?.classList.add("-left-full");
    backdrop?.classList.add("hidden");
  };
  const open_sidebar = () => {
    sidebar?.classList.remove('-left-full');
    backdrop?.classList.remove('hidden');
  };

  return (
    <aside
      id="sidebar"
      className="fixed -left-full top-0 bottom-0 md:static z-40 w-60 overflow-y-auto bg-blue-800 flex-shrink-0 "
    >
      <header className="flex items-center h-14 px-4 py-2 mb-2 border-b border-blue-700">
        <a className="inline-block" href="https://tailwind-ecommerce.com">
          {/* <img
            src="images/logo-white.png"
            height="36"
            className="max-h-9 hover:opacity-70"
          /> */}
        </a>
        <h3 className="text-white text-left"><FontAwesomeIcon icon={faUserAlt}/> {auth.name}</h3>
        <button
          onClick={() => hide_sidebar()}
          className="md:hidden float-right appearance-none border border-transparent bg-transparent text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </header>

      <ul>
        <li className="hover:bg-blue-100 relative">
          <InertiaLink
            href={route('dashboard.index')}
            className="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
          >
            <span aria-hidden="true">
              <svg
                className="text-white opacity-50"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </span>
            <span className="ml-3">Dashboard</span>
          </InertiaLink>
        </li>

        <li className="hover:bg-blue-100 relative">
          <InertiaLink
            href={route('admin.categories.index')}
            className="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
          >
            <span aria-hidden="true">
              <svg
                className="text-white opacity-50"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </span>
            <span className="ml-3">Categories</span>
          </InertiaLink>
        </li>

        <li className="hover:bg-blue-100 relative">
          <InertiaLink
            href={route('admin.stores.index')}
            className="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
          >
            <span aria-hidden="true">
              <svg
                className="text-white opacity-50"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </span>
            <span className="ml-3">Stores</span>
          </InertiaLink>
        </li>

        <li className="hover:bg-blue-100 relative">
          <InertiaLink
            href={route('admin.users')}
            className="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
          >
            <span aria-hidden="true">
              <svg
                className="text-white opacity-50"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </span>
            <span className="ml-3">Customers</span>
          </InertiaLink>
        </li>

        <li className="hover:bg-blue-100 relative">
          <InertiaLink
            href={route('admin.variations.type.index')}
            className="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
          >
            <span aria-hidden="true">
              <svg
                className="text-white opacity-50"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3"/>
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </span>
            <span className="ml-3">Variations Settings</span>
          </InertiaLink>
        </li>
        <li className="hover:bg-blue-100 relative">
          <InertiaLink
            href={route('admin.index.attribute')}
            className="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
          >
            <span aria-hidden="true">
              <svg
                className="text-white opacity-50"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3"/>
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </span>
            <span className="ml-3">Product Attributes Settings</span>
          </InertiaLink>
        </li>


        <li className="relative">
          <a
            href="#"
            className="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
          >
            <span aria-hidden="true">
              <svg
                className="text-white opacity-50"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                <polyline points="13 2 13 9 20 9"/>
              </svg>
            </span>
            <span className="ml-3">More pages</span>
            <span>
              <svg
                className="text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                {" "}
                <path fill="currentColor" d="M7 10l5 5 5-5H7z"/>
              </svg>
            </span>
          </a>
          <div className="submenu pb-3">
            <a
              href="#"
              className="pl-14 py-1 block text-white hover:bg-blue-700"
            >
              Submenu one
            </a>
            <a
              href="#"
              className="pl-14 py-1 block text-white hover:bg-blue-700"
            >
              Submenu two
            </a>
          </div>
        </li>

      </ul>

      <hr className="border-blue-600"/>

      <div className="px-5 my-6">
        <button
          className="inline-block w-full text-left px-4 py-2 text-black bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500">
          Create account
          <span className="float-right" aria-hidden="true">
            +
          </span>
        </button>
      </div>
    </aside>
  );
}
