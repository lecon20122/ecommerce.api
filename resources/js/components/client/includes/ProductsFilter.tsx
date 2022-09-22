import React, {useState} from 'react';
import {Filters} from "../../../Pages/Client/ShopByCategory";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {Category} from "../../../types/CategoryType";
import { Selector } from 'antd-mobile'
import CollapseFiltersComponent from "./CollapseFiltersComponent";

interface Props {
  filters: Filters
  category: Category
}

interface IFormProps {
  [key: string]: string[]
}

function ProductsFilter({filters, category}: Props) {

  return (
    <aside className="md:w-1/3 lg:w-1/5 px-4 hidden lg:block">
      <div className="px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Category</h3>
        <ul className="text-gray-500 space-y-1">
          <li><a className="hover:text-blue-600 hover:underline" href="#">Electronics </a></li>
          <li><a className="hover:text-blue-600 hover:underline" href="#">Watches </a></li>
          <li><a className="hover:text-blue-600 hover:underline" href="#">Cinema </a></li>
          <li><a className="hover:text-blue-600 hover:underline" href="#">Clothes </a></li>
          <li><a className="hover:text-blue-600 hover:underline" href="#">Home items </a></li>
          <li><a className="hover:text-blue-600 hover:underline" href="#">Smartwatches </a></li>
        </ul>
        <hr className="my-4"/>
        <h3 className="font-semibold mb-2">Filter by</h3>
        <ul className="space-y-1">
          <li>
            <label className="flex items-center">
              <input name="" type="checkbox" className="h-4 w-4"/>
              <span className="ml-2 text-gray-500"> Samsung </span>
            </label>
          </li>
        </ul>
        <hr className="my-4"/>
        <CollapseFiltersComponent filters={filters} category={category}/>
      </div>
    </aside>
  );
}

export default ProductsFilter;
