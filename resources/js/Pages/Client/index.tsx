import React, { lazy, Suspense } from 'react'

export default function HomePage() {

  const AppLayout = lazy(() => import('../../layouts/client'));
  const CategoriesNavigation = lazy(() => import('../../components/client/includes/categoriesNavigation'));
  const Hero = lazy(() => import('../../components/client/includes/hero'));
  const HomePageCategories = lazy(() => import('../../components/client/shards/homePageCategories'));


  return (
    <div className='bg-[#EAEDED]'>
      <Suspense fallback={<div><h1>loading...</h1></div>}>
        <AppLayout>
          <Hero />
          <CategoriesNavigation />
          <HomePageCategories />
        </AppLayout>
      </Suspense>
    </div>
  )
}
