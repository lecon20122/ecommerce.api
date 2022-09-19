import React, {useRef} from 'react';
import AppLayout from "../../layouts/client";
import ProductsFilter from "../../components/client/includes/ProductsFilter";
import {ProductWithThumbnail} from "../../types/products";
import {Category} from "../../types/CategoryType";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import ProductFilterMobile from "../../components/client/includes/ProductFilterMobile";
import ProductWithVariationsList from "../../components/client/includes/ProductWithVariationsList";

interface Props {
  products: ProductWithThumbnail[]
  locale: string
  filters: Filters
  category: Category
}

export interface Filters {
  [key: string]: {
    [key: string]: number
  }[],
}

export default function ShopByCategory({products, locale, filters, category}: Props) {

  const handleClickOnProduct = (product: ProductWithThumbnail) => {
    Inertia.get(route('shop.product.detail', product))
  }

  const ProductList = products.map((product) => {
    return (
      <ProductWithVariationsList product={product} locale={locale} key={product.id}/>
    )
  })


  return (
    <AppLayout>
      <div className='md:hidden'>
        <ProductFilterMobile filters={filters} category={category}/>
      </div>
      <section className="py-12">
        <div className="">
          <div className="flex flex-col md:flex-row">
            <ProductsFilter filters={filters} category={category}/>
            <main className="mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
                {ProductList}
                <div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
