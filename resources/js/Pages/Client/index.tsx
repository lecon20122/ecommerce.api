import React, {lazy, Suspense} from 'react'
import {HomePageCategory} from "../../types/CategoryType";
import {ProductWithThumbnail} from "../../types/products";
import MobileNavigation from "../../components/client/includes/MobileNavigation";
import HomePageTabsComponents from "../../components/client/includes/HomePageTabsComponents";

interface Props {
  categories: HomePageCategory[]
  products: ProductWithThumbnail[]
  locale: string
}

export default function HomePage({categories, locale}: Props) {

  const AppLayout = lazy(() => import('../../layouts/client'));

  return (
    <div className='bg-white'>
      <Suspense fallback={<span>loading</span>}>
        <AppLayout>
          <HomePageTabsComponents categories={categories} locale={locale}/>
          <MobileNavigation/>
        </AppLayout>
      </Suspense>
    </div>
  )
}
