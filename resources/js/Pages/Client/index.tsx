import React, {lazy, Suspense} from 'react'
import {HomePageCategory} from "../../types/CategoryType";
import PrimeHero from "../../components/client/includes/PrimeHero";
import PrimeCategoriesCarousel from "../../components/client/includes/PrimeCategoriesCarousel";
import {ProductWithThumbnail} from "../../types/products";
import ProductsCarousel from "../../components/client/includes/ProductsCarousel";
import {locale} from "primereact/api";

interface Props {
  categories: HomePageCategory[]
  products : ProductWithThumbnail[]
  locale: string
}

export default function HomePage(props: Props) {
  console.log(props.products)
  const AppLayout = lazy(() => import('../../layouts/client'));
  const CategoriesNavigation = lazy(() => import('../../components/client/includes/categoriesNavigation'));
  const Hero = lazy(() => import('../../components/client/includes/hero'));
  const HomePageCategories = lazy(() => import('../../components/client/shards/homePageCategories'));

  console.log(props)
  return (
    <div className='bg-white'>
      <Suspense fallback={<div><h1>loading...</h1></div>}>
        <AppLayout>
        <CategoriesNavigation/>
          <PrimeHero/>
          <PrimeCategoriesCarousel {...props}/>
          <ProductsCarousel products={props.products} locale={props.locale}/>
          {/*<Hero/>*/}
          {/*<HomePageCategories {...props}/>*/}
        </AppLayout>
      </Suspense>
    </div>
  )
}
