import React, {lazy, Suspense} from 'react'
import {HomePageCategory} from "../../types/CategoryType";
import {Category, ProductWithThumbnail} from "../../types/products";
import MobileNavigation from "../../components/client/includes/MobileNavigation";
import HomePageTabsComponents from "../../components/client/includes/HomePageTabsComponents";

interface Props {
  categories: Category[]
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
