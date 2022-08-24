import React from 'react';
import {HomePageCategory} from "../../../types/CategoryType";
import CategoryCircle from "./CategoryCircle";

interface Props {
  categories: HomePageCategory[]
  locale: string
}


export default function PrimeCategoriesCarousel({categories, locale}: Props) {
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '600px',
      numVisible: 5,
      numScroll: 2
    },
    {
      breakpoint: '480px',
      numVisible: 5,
      numScroll: 2
    }
  ];

  const categoriesItems = categories.map((category) => (
    <CategoryCircle key={category.id}
                    category={category} locale={locale}/>
  ))


  return (
    <section className="pt-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className='text-center uppercase text-3xl mb-[40px]'>Shop by category</h1>
        <nav className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 gap-x-3 gap-y-6 mx-auto justify-content-center">
          {/*<Carousel  value={categories} numVisible={10} numScroll={1} responsiveOptions={responsiveOptions}*/}
          {/*          itemTemplate={productTemplate}/>*/}
          {categoriesItems}
        </nav>
      </div>
    </section>
  );
}
