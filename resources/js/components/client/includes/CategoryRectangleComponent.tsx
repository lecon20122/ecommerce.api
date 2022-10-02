import React from 'react';
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {Category} from "../../../types/products";

interface Props {
  categories: Category[]
  locale: string
  secondaryColor: string
  primaryColor: string

}


export default function CategoryRectangleComponent({categories, locale, secondaryColor, primaryColor}: Props) {

  const onClickHandle = (category: Category) => {
    Inertia.get(route('shop.by.category', category))
  }

  const categoriesItems = categories.map((category) => (
    <div
      key={category.id}
      className={`w-[110px] h-[44px] lg:w-[240px] lg:h-[88px] bg-[${secondaryColor}] m-1 lg:flex-[1_1_240px] flex-[1_1_28%] cursor-pointer`}
      onClick={(e) => onClickHandle(category)}
    >
      <div className='flex items-center justify-center h-full'>
        <h6 className={'lg:text-2xl uppercase'}>{category.title.en}</h6>
      </div>
    </div>
  ))


  return (
    <section className={`container max-w-[1280px] mx-auto bg-[${primaryColor}] p-1`}>
      <div className="flex flex-wrap mx-auto">
        {categoriesItems}
      </div>
    </section>
  );
}
