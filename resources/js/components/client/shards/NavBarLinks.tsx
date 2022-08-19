import React from 'react'
import LoggedInNav from './loggedInNav'
import NotLoggedIn from './notLoggedIn'

export default function NavBarLinks() {
  // if (user !== null) {
  //   return <LoggedInNav user={user} />
  // }
  return <NotLoggedIn />
}
