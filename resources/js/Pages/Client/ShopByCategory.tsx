import React from 'react';
import AppLayout from "../../layouts/client";
import ProductsFilter from "../../components/client/includes/ProductsFilter";
import {ProductWithThumbnail} from "../../types/products";
import {Category} from "../../types/CategoryType";

interface Props {
  products: ProductWithThumbnail[]
  locale: string
  filters: Filters
  category : Category
}

export interface Filters {
  [key: string]: {
    [key: string]: number
  }[],
}

export default function ShopByCategory({products, locale, filters , category}: Props) {
  const ProductList = products.map((product) => {
    return (
      <div key={product.id}>
        <a href="#">
          {product.media &&
          <img src={product.media[0 as keyof typeof product.media].thumbnail} className="aspect-[61/81]"
               alt={product.title[locale as keyof typeof product.title]}/>}
        </a>
        <div className="">
          <a href="#" className="text-gray-600">
            {product.title[locale as keyof typeof product.title]}
          </a>
          <div className='grid grid-cols-5'>
            <p className="font-semibold col-span-4">EGP {product.price}</p>
            <div className='ml-auto'>
              <a
                className="text-blue-600 col-end-1"
                href="#">
                <i className="pi pi-heart text-black"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <AppLayout>
      <section className="py-12">
        <div className="">
          <div className="flex flex-col md:flex-row">

            <ProductsFilter filters={filters} category={category}/>
            <main className="mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
                {ProductList}
                <div>
                  {/*product start*/}
                  {/*product end*/}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
