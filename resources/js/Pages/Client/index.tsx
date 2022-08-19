import React, {lazy, Suspense} from 'react'
import {Category, CategoryWithMedia, CategoryWithThumbnail} from "../../types/products";
import HomePageCategories from "../../components/client/shards/homePageCategories";
import {HomePageCategory} from "../../types/CategoryType";

interface Props {
  categories: HomePageCategory[]
  locale: string
}

export default function HomePage(props: Props) {

  const AppLayout = lazy(() => import('../../layouts/client'));
  const CategoriesNavigation = lazy(() => import('../../components/client/includes/categoriesNavigation'));
  const Hero = lazy(() => import('../../components/client/includes/hero'));
  const HomePageCategories = lazy(() => import('../../components/client/shards/homePageCategories'));


  return (
    <div className='bg-[#EAEDED]'>
      <Suspense fallback={<div><h1>loading...</h1></div>}>
          <CategoriesNavigation/>
        <AppLayout>
          <Hero/>
          <HomePageCategories {...props}/>
        </AppLayout>
      </Suspense>
    </div>
  )
}
