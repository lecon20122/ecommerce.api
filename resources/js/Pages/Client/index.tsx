import React, {lazy, Suspense} from 'react'
import {HomePageCategory} from "../../types/CategoryType";
import {ProductWithThumbnail} from "../../types/products";

interface Props {
  categories: HomePageCategory[]
  products : ProductWithThumbnail[]
  locale: string
}

export default function HomePage(props: Props) {
  console.log(props.products)
  const AppLayout = lazy(() => import('../../layouts/client'));
  const CategoriesNavigation = lazy(() => import('../../components/client/includes/categoriesNavigation'));
  const PrimeHero = lazy(() => import("../../components/client/includes/PrimeHero"));
  const MobileNavigation = lazy(() => import("../../components/client/includes/MobileNavigation"));
  const ProductsCarousel = lazy(() => import("../../components/client/includes/ProductsCarousel"));
  const PrimeCategoriesCarousel = lazy(() => import("../../components/client/includes/PrimeCategoriesCarousel"));

  console.log(props)
  return (
    <div className='bg-white'>
      <Suspense fallback={<div><h1>loading...</h1></div>}>
        <AppLayout>
        <CategoriesNavigation/>
          <PrimeHero/>
          <PrimeCategoriesCarousel {...props}/>
          <ProductsCarousel products={props.products} locale={props.locale}/>
        </AppLayout>
      </Suspense>
    </div>
  )
}
