import { faUser, faHeart, faCartShopping, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { GetUser } from '../../../types/auth';



export default function LoggedInNav({ user }: GetUser) {
  const handleLogout = (event: React.FormEvent) => {
    event.preventDefault();

  }

  return (
    <div>
      <h3 className="nav-link font-bold">
        <FontAwesomeIcon className="text-black w-5 font-bold" icon={faUser} />
        <span className="hidden lg:inline ml-1 font-bold">Hello , {user?.name} </span>
      </h3>
      <a className="nav-link" href="#">
        <FontAwesomeIcon className="text-gray-400 w-5" icon={faHeart} />
        <span className="hidden lg:inline ml-1">Wishlist</span>
      </a>
      <a className="nav-link" href="#">
        <FontAwesomeIcon className="text-gray-400 w-5" icon={faCartShopping} />
        <span className="hidden lg:inline ml-1">My cart</span>
      </a>
      <button onClick={handleLogout} className="nav-link">
        <FontAwesomeIcon className="text-gray-400 w-5" icon={faSignOut} />
        <span className="hidden lg:inline ml-1">sign out</span>
      </button>
    </div>
  )
}
