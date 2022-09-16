import React, {lazy, Suspense} from 'react'
import {HomePageCategory} from "../../types/CategoryType";
import {ProductWithThumbnail} from "../../types/products";

interface Props {
  categories: HomePageCategory[]
  products: ProductWithThumbnail[]
  locale: string
}

export default function HomePage(props: Props) {
  console.log(props.products)
  const AppLayout = lazy(() => import('../../layouts/client'));
  const PrimeHero = lazy(() => import("../../components/client/includes/PrimeHero"));
  const ProductsCarousel = lazy(() => import("../../components/client/includes/ProductsCarousel"));
  const PrimeCategoriesCarousel = lazy(() => import("../../components/client/includes/PrimeCategoriesCarousel"));

  console.log(props)
  return (
    <div className='bg-white'>
      <Suspense fallback={<span>loading</span>}>
        <AppLayout>
          <PrimeHero/>
          <PrimeCategoriesCarousel {...props}/>
          {/*<ProductsCarousel products={props.products} locale={props.locale}/>*/}
        </AppLayout>
      </Suspense>
    </div>
  )
}
