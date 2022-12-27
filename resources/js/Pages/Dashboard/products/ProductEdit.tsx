import React from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import {Button, Divider, Form, Input, InputNumber, Select} from 'antd';
import {Inertia} from '@inertiajs/inertia';
import route from 'ziggy-js';
import {usePage} from "@inertiajs/inertia-react";
import {Title} from "../../../types/CategoryType";
import {Variation, VariationTypes, VariationTypesValues} from "../../../types/VariationType";
import VariationList from "../../../components/Lists/VariationList";
import {Category, NewMediaProps} from "../../../types/products";

interface Props {
  currentProduct: Product
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
  locale: string,
  categories: Category[],
}

interface Product {
  id: number;
  title: Title
  price: string;
  slug: string;
  description: string;
  media: NewMediaProps[];
  variations: Variation[],
  categories: Category[],
  store_id: number
}

interface MediaForm {
  images: string
}

export default function ProductEdit({currentProduct, locale, variationTypesValues, variationTypes, categories}: Props) {


  const serverSideErrors = usePage().props.errors

  const onFinishAttachCategories = (values: any) => {
    Inertia.post(route('admin.attach.category.to.product', currentProduct), values, {
      preserveState: false
    })
  }

  const onFinish = (values: any) => {
    Inertia.post(route('admin.products.update', currentProduct), values, {
      preserveState: false
    })
  };

  const handleDetachCategories = (categoryId: number) => {
    Inertia.post(route('admin.detach.category.from.product', currentProduct), {id: categoryId}, {
      preserveState: false
    })
  }

  const currentAttachedCategories = currentProduct.categories.map((category) => {
    return (
      <div className='border border-1 border-black p-1 flex space-x-1 items-center'>
        <h1 className={'text-left '}>{category.title.en}</h1>
        <button className={'cursor text-red-600'} onClick={event => handleDetachCategories(category.id)}>x
        </button>
      </div>
    )
  })

  return (
    <DashboardLayout>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <Form
          name="basic"
          labelCol={{span: 2}}
          wrapperCol={{span: 12}}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Title EN"
            initialValue={currentProduct.title.en}
            name="en"
            rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Title AR"
            name="ar"
            initialValue={currentProduct.title.ar}
            rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Price"
            initialValue={currentProduct.price}
            name="price"
            rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item wrapperCol={{offset: 2, span: 1}}>
            <Button type="default" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Divider/>
        <div className='container py-3 flex space-x-1 items-center'>
          <h1>Currently Attached Categories :</h1>
          {currentAttachedCategories}
        </div>
        <Form className='basis-1/4' onFinish={onFinishAttachCategories} labelCol={{span: 2}}
              wrapperCol={{span: 12}}>
          <Form.Item name="id" label="Attach to Category">
            <Select
              mode="multiple"
              placeholder="Select a category from above"
              allowClear
            >
              {categories.map((category) => (
                <Select.Option
                  key={category.id}
                  value={category.id}>{category.title[locale as keyof typeof category.title]}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item className={'ml-2'}>
            <Button type="default" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Divider/>
        <VariationList variations={currentProduct.variations} storeId={currentProduct.store_id}
                       variationTypes={variationTypes}
                       variationTypesValues={variationTypesValues} productId={currentProduct.id}/>
      </div>
    </DashboardLayout>
  )
}
