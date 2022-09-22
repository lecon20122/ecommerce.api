import React, {useState} from 'react';
import {Filters} from "../../../Pages/Client/ShopByCategory";
import {Category} from "../../../types/CategoryType";
import {Dropdown, Popup, Radio, Space,} from 'antd-mobile'
import {FilterOutline, CloseOutline} from 'antd-mobile-icons'
import {Button} from "antd";
import CollapseFiltersComponent from "./CollapseFiltersComponent";

interface Props {
  filters: Filters
  category: Category
}

function ProductFilterMobile({filters, category}: Props) {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        position='right'
        bodyStyle={{width: '60vw'}}
      >
        <div className='grid grid-cols-2'>
          <button onClick={() => setVisible(false)}>
            <CloseOutline className={'self-center text-lg ml-2'}/>
          </button>
          <h1 className='text-lg my-2 self-center'>Filters</h1>
        </div>
        <CollapseFiltersComponent filters={filters} category={category}/>
      </Popup>
      <Dropdown className='border-b border-b-grey w-full'>
        <Dropdown.Item key='Filter' title='Sort'>
          <div style={{padding: 12}}>
            <Radio.Group defaultValue='default'>
              <Space direction='vertical' block>
                <Radio block value='default'>
                  default
                </Radio>
                <Radio block value='nearest'>
                  nearest
                </Radio>
                <Radio block value='top-rated'>
                  top-rated
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </Dropdown.Item>
        <Dropdown.Item key='color' title='Categories'>
          <div style={{padding: 12}}>
            <Radio.Group defaultValue='default'>
              <Space direction='vertical' block>
                <Radio block value='default'>
                  default
                </Radio>
                <Radio block value='nearest'>
                  nearest
                </Radio>
                <Radio block value='top-rated'>
                  top-rated
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </Dropdown.Item>
        <div className='flex justify-center justify-items-center content-center items-center flex-1'>
          <Button type={'text'} className={'flex  content-center items-center'} onClick={() => setVisible(true)}>
            <FilterOutline/>
            <span className='ml-1'>Filters</span>
          </Button>
        </div>
      </Dropdown>
    </div>

  );
}

export default ProductFilterMobile;
