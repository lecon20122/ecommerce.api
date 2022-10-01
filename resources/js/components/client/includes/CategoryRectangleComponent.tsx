import React from 'react';
import {HomePageCategory} from "../../../types/CategoryType";
import CategoryCircle from "./CategoryCircle";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";

interface Props {
  categories: HomePageCategory[]
  locale: string
}


export default function CategoryRectangleComponent({categories, locale}: Props) {

  const onClickHandle = (category: HomePageCategory) => {
    Inertia.get(route('shop.by.category', category))
  }

  const categoriesItems = categories.map((category) => (
    <div
      className='w-[110px] h-[44px] lg:w-[240px] lg:h-[88px] bg-[#F6E4E3] m-1 lg:flex-[1_1_240px] flex-[1_1_28%] cursor-pointer'
      onClick={(e) => onClickHandle(category)}
    >
      <div className='flex items-center justify-center h-full'>
        <h6 className={'lg:text-2xl uppercase'}>{category.title.en}</h6>
      </div>
    </div>
  ))


  return (
    <section className="container max-w-[1280px] mx-auto bg-[#CD867D] p-1">
      <div className="flex flex-wrap mx-auto">
        {categoriesItems}
      </div>
    </section>
  );
}
