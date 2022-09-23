import React from 'react'
import Footer from '../components/client/includes/footer'
import Navbar from '../components/client/includes/navbar'
import MobileNavigation from "../components/client/includes/MobileNavigation";
import CategoriesNavigation from "../components/client/includes/categoriesNavigation";

// import CategoriesNavigation from "../components/client/includes/categoriesNavigation";

interface IAppLayout {
  children: React.ReactNode
}

export default function AppLayout({children}: IAppLayout) {
  return (
    <div className={'overflow-hidden'}>
      <Navbar/>
      <CategoriesNavigation/>
      {children}
      <Footer/>
    </div>
  )
}
