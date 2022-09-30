import React, {useState, useEffect} from 'react';
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

  const formFilterKeys = () => {
    let keys: any = []
    Object.keys(filters).map((key) => {
      keys[key] = []
    })
    return keys
  }

  const [selectedFilters, setSelectedFilters] = useState<IFormProps>(formFilterKeys())

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

  const onClick = (name: string, value: string) => {

    if (selectedFilters[name].includes(value)) {
      const newState = {
        ...selectedFilters,
        [name]: selectedFilters[name].filter(prev => prev !== value)
      };
      setSelectedFilters(newState);
    } else {
      const newState = {
        ...selectedFilters,
        [name]: [...selectedFilters[name], value]
      }
      setSelectedFilters(newState)
    }
  }

  const filterFactory = (key: string) => {
    if (key === 'color') {
      return (
        <div>
          {Object.keys(filters[key]).map((item, value) => { // ['black' , '8']
            return (
              <button
                className={`${selectedFilters[key].includes(item) ? 'w-[67px] h-[35px] border-black inline-flex items-center justify-center border p-1' : 'w-[67px] h-[35px] hover:border-black border inline-flex items-center justify-center p-1'}`}
                key={value} name={key} value={item}
                onClick={(e) => onClick(key, item)}>
                <div className='w-[15px] h-[15px] rounded-full border-black border mr-1'
                     style={{backgroundColor: item}} onClick={(e) => onClick(key, item)}/>
                <span className='text-black' onClick={(e) => onClick(key, item)}>{item}</span>
              </button>
            )
          })}
        </div>
      )
    } else {
      return (
        <ul className="space-x-2 flex items-center flex-row" onChange={handleSelectedFilterChange}>
          {Object.keys(filters[key]).map((item, value) => { // ['black' , '8']
            return (
              <li key={value}>
                <label>
                  <input value={item} name={key} className={`h-4 w-4 ${key === 'color' ? "checkbox-square" : ""}`}
                         style={{backgroundColor: item}} type={'checkbox'}
                  />
                  {key != 'color' &&
                  <span
                    className={`${key === 'size' ? 'ml-2 text-gray-500 uppercase' : 'ml-2 text-gray-500 capitalize'}`}> {item}</span>
                  }
                </label>
              </li>
            )
          })}
        </ul>
      )

    }
  }

  const SortableFiltersPanels = Object.keys(filters).map((key, index) => { // ['size' , 'color']
    return (
      <Collapse.Panel key={key} title={key} className='capitalize text-bolder flex flex-wrap flex-[1_1_21%]'>
        {filterFactory(key)}
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
