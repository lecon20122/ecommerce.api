import {HomePageCategory} from "../../../types/CategoryType";
import React from "react";
import route from "ziggy-js";

interface Props {
  category: HomePageCategory
  locale: string
}

export default function CategoryCircle({category, locale}: Props) {
  return (
    <a href={route('shop.by.category',category)} className="group">
      <div
        style={{
          backgroundImage: `url(${category.thumbnail?.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="flex items-center justify-center w-16 h-16 md:w-[175px] md:h-[175px]  mx-auto mb-2 rounded-full bg-blue-100 group-hover:bg-blue-200">
        {/*<img width="32" height="32" src={category.thumbnail?.thumbnail}*/}
        {/*     alt={category.title[locale as keyof typeof category.title]}/>*/}
      </div>
      <p
        className="text-center text-gray-600 group-hover:text-blue-600">{category.title[locale as keyof typeof category.title]}</p>
    </a>
  );
}
