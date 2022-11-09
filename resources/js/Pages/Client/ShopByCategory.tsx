import React from 'react';
import AppLayout from "../../layouts/client";
import ProductsFilter from "../../components/client/includes/ProductsFilter";
import {ProductWithThumbnail} from "../../types/products";
import {Category} from "../../types/CategoryType";
import ProductFilterMobile from "../../components/client/includes/ProductFilterMobile";
import ProductWithVariationsList from "../../components/client/includes/ProductWithVariationsList";
import {PaginateDataType} from "../../types/globalTypes";
import PaginationComponent from "../../components/client/includes/PaginationComponent";

interface Props {
  products: PaginateDataType<ProductWithThumbnail>
  locale: string
  filters: Filters
  category: Category
  maxPrice: number
}

export interface Filters {
  [key: string]: {
    [key: string]: number
  }[],
}

export default function ShopByCategory({products, locale, filters, category, maxPrice}: Props) {

  const ProductList = products.data.map((product) => {
    return (
      <ProductWithVariationsList product={product} locale={locale} key={product.id}/>
    )
  })

  return (
    <AppLayout>
      <div className='lg:hidden'>
        <ProductFilterMobile filters={filters} category={category}/>
      </div>
      <section className="py-5 sm:py-7 bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2 text-center xl:text-left">Men’s wear</h2>
          <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
            <li className="inline-flex items-center">
              <a className="text-gray-600 hover:text-blue-600" href="#">Home</a>
              <i className="ml-3 text-gray-400 fa fa-chevron-right"/>
            </li>
            <li className="inline-flex items-center" aria-current="page">
              <a className="text-gray-600 hover:text-blue-600" href="#">Clothings</a>
              <i className="ml-3 text-gray-400  fa fa-chevron-right"/>
            </li>
            <li className="inline-flex items-center"> Men’s wear</li>
          </ol>
        </div>
      </section>
      <section className="py-12">
        <div className=''>
          <div className="flex md:flex-row">
            <ProductsFilter filters={filters} category={category} maxPrice={maxPrice}/>
            <main className="mx-auto">
              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-4'>
                {ProductList}
              </div>
              <PaginationComponent links={products.links} meta={products.meta}/>
            </main>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
