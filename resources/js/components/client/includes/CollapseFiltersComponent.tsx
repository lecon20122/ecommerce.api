import React, {useEffect, useState} from 'react';
import {Collapse} from "antd-mobile";
import {AddOutline, MinusOutline} from "antd-mobile-icons";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {Filters} from "../../../Pages/Client/ShopByCategory";
import {Category} from "../../../types/CategoryType";

interface IFormProps {
  [key: string]: string[]
}

interface Props {
  filters: Filters
  category: Category
}

function CollapseFilters({filters, category}: Props) {
  const [selectedFilters, setSelectedFilters] = useState<IFormProps>({color: [], size: [], style: []})
  console.log(filters)
  useEffect(() => {
    Inertia.post(route('shop.by.category.post', category), selectedFilters)
  }, [selectedFilters])

  const handleSelectedFilterChange = (event: React.FormEvent<HTMLUListElement>) => {
    if (event.target.checked) {
      const newState = {
        ...selectedFilters,
        [event.target.name]: [...selectedFilters[event.target.name], event.target.value]
      }
      setSelectedFilters(newState)
    } else {
      const newState = {
        ...selectedFilters,
        [event.target.name]: selectedFilters[event.target.name].filter(prev => prev !== event.target.value)
      };
      setSelectedFilters(newState);
    }
  }

  const SortableFiltersPanels = Object.keys(filters).map((key, index) => { // ['size' , 'color']
    return (
      <Collapse.Panel key={key} title={key} className='capitalize my-2 text-bolder'>
        <ul className="space-x-2 flex items-center flex-row" onChange={handleSelectedFilterChange}>
          {Object.keys(filters[key]).map((item, value) => { // ['black' , '8']
            return (
              <li key={value}>
                <label>
                  <input value={item} name={key} className={`h-4 w-4 ${key === 'color' ? "checkbox-square" : ""}`}
                         style={{backgroundColor: item}} type={'checkbox'}
                  />
                  {key != 'color' &&
                  <span className="ml-2 text-gray-500"> {item}({filters[key][item as any]})</span>
                  }
                </label>
              </li>
            )
          })}
        </ul>
      </Collapse.Panel>
    )
  });

  return (
    <Collapse
      className='border-0'
      defaultActiveKey={['color']}
      arrow={active => (active ? <MinusOutline className='text-black text-bolder'/> :
        <AddOutline className='text-black text-bolder'/>)}
    >
      {SortableFiltersPanels}
    </Collapse>
  );
}

export default CollapseFilters;
