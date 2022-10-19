import React from 'react';
import {Filters} from "../../../Pages/Client/ShopByCategory";
import {Category} from "../../../types/CategoryType";
import CollapseFiltersComponent from "./CollapseFiltersComponent";

interface Props {
  filters: Filters
  category: Category
  maxPrice: number
}

interface IFormProps {
  [key: string]: string[]
}

function ProductsFilter({filters, category, maxPrice}: Props) {

  return (
    <aside className="px-4 hidden lg:block col-span-1">
      <div className="px-6 py-4 border border-gray-200 bg-white rounded shadow-sm w-full">
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
        <CollapseFiltersComponent filters={filters} category={category} maxPrice={maxPrice}/>
      </div>
    </aside>
  );
}

export default ProductsFilter;
