import React, {useState} from 'react';
import {Filters} from "../../../Pages/Client/ShopByCategory";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {Category} from "../../../types/CategoryType";

interface Props {
  filters: Filters
  category: Category
}

interface IFormProps {
  [key: string]: string[]
}

function ProductsFilter({filters, category}: Props) {
  console.log(filters)
  const {register, handleSubmit, formState: {errors}, reset, setValue, watch} = useForm<IFormProps>()
  const [checked, setchecked] = useState<any>([])

  const handleSubmitFiltersForm: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    console.log(data)
    Inertia.post(route('shop.by.category.post', category), resolveData)
  }


  const SortableFilters = Object.keys(filters).map((key, index) => { // ['size' , 'color']
    return (
      <div key={index} className='py-3'>
        <h5 className="font-semibold mb-2">{key.toUpperCase()}</h5>
        <ul className="space-y-1">
          {Object.keys(filters[key]).map((item, value) => { // ['black' , '8']
            return (
              <li key={value}>
                <label className="flex items-center">
                  <input {...register(key)} value={item} className="h-4 w-4" type={'checkbox'}
                  />
                  <span className="ml-2 text-gray-500"> {item}({filters[key][item as any]})</span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  });

  return (
    <aside className="md:w-1/3 lg:w-1/5 px-4">
      <a
        className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
        href="#">
        Filter by
      </a>
      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
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
        <form onSubmit={handleSubmit(handleSubmitFiltersForm)}>
          {SortableFilters}
          <button className='btn btn-outline-dark' type='submit'>Apply Filters</button>
        </form>

      </div>
    </aside>
  );
}

export default ProductsFilter;
