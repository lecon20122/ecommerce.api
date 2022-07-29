import React from 'react'
import CategoriesNavigation from '../../components/client/includes/categoriesNavigation';
import Hero from '../../components/client/includes/hero';
import HomePageCategories from '../../components/client/shards/homePageCategories';
import AppLayout from '../../layouts/client';



export default function HomePage() {
  return (
    <div className='bg-[#EAEDED]'>
      <AppLayout>
        <Hero />
        <CategoriesNavigation />
        <HomePageCategories />
      </AppLayout>
    </div>
  )
}
