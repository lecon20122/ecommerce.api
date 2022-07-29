import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { InertiaLink } from '@inertiajs/inertia-react';
import route from 'ziggy-js';

export default function NotLoggedIn() {
  return (
    <div>
      <InertiaLink href={route('client.login')} className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300">
        <FontAwesomeIcon className="text-gray-400 w-5" icon={faUser} />
        <span className="hidden lg:inline ml-1">Sign in</span>
      </InertiaLink>
      <InertiaLink href={route('client.login')} className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300">
        <FontAwesomeIcon className="text-gray-400 w-5" icon={faUser} />
        <span className="hidden lg:inline ml-1">Register</span>
      </InertiaLink>
      <InertiaLink href={route('client.login')} className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300">
        <FontAwesomeIcon className="text-gray-400 w-5" icon={faUser} />
        <span className="hidden lg:inline ml-1">Sell with us</span>
      </InertiaLink>
    </div>
  )
}
