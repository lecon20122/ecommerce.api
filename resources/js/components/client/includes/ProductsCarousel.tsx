import React, {useState} from 'react';
import {Carousel} from 'primereact/carousel';
import {ProductWithThumbnail} from "../../../types/products";

interface Props {
  products: ProductWithThumbnail[]
  locale: string
}

export default function ProductsCarousel({products, locale}: Props) {
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const productTemplate = (product: ProductWithThumbnail) => {
    return (
      <div>
        <article className="shadow-sm rounded bg-white border border-gray-200 mb-5">
          <div className="relative p-1">
            <img src={product.thumbnail} className="mx-auto"
                 alt={product.title[locale as keyof typeof product.title]}/>
          </div>
          <div className="p-4 border-t border-t-gray-200">
            <h6>
              <a href="#"
                 className="text-gray-600 hover:text-blue-500">{product.title[locale as keyof typeof product.title]}</a>
            </h6>
            <span className="font-semibold text-gray-800">{product.price}</span>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div>
      <h1 className='text-center uppercase text-3xl my-[40px]'>New Arrivals</h1>
    <Carousel value={products} numVisible={3} containerClassName={'container mx-auto'} numScroll={1} responsiveOptions={responsiveOptions}
               circular
              autoplayInterval={3000} itemTemplate={productTemplate}
    />
    </div>
  );
}
