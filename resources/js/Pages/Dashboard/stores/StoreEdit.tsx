import React, {useState} from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import {Inertia} from '@inertiajs/inertia';
import route from 'ziggy-js';
import {SubmitHandler, useForm} from 'react-hook-form';
import {StoreWithProducts} from "../../../types/globalTypes";
import ProductList from "../../../components/Lists/productList";
import {VariationTypes, VariationTypesValues} from "../../../types/VariationType";
import {Button, Divider, Form, Input} from "antd";
import CreateProduct from "../products/ProductCreate";

interface Props {
  currentStore: StoreWithProducts
  locale: string,
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
}

interface IFormProps {
  name: string
  description: string
  store_id: number
}

export default function StoreEdit({currentStore, locale, variationTypesValues, variationTypes}: Props) {
  const [openAddDialog, setOpenAddDialog] = useState(false);


  const onFinish = (values: any) => {
    Inertia.post(route('admin.stores.update', currentStore), values)
  };

  const handleAddDialog = () => {
    setOpenAddDialog(!openAddDialog);
  };

  return (
    <DashboardLayout>
      <div className='m-2'>
        <Form
          className={'container mx-auto'}
          scrollToFirstError
          name="basic"
          labelCol={{span: 2}}
          wrapperCol={{span: 6}}
          onFinish={onFinish}
          size={"large"}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            initialValue={currentStore.name}
            name="name"
            rules={[{required: true, message: 'Please fill type in AR!'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            initialValue={currentStore.description}
            label="Description"
            name="description"
            rules={[{required: true, message: 'Please fill type in AR!'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item wrapperCol={{offset: 2, span: 1}}>
            <Button type="default" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={() => setOpenAddDialog(true)}>CREATE NEW PRODUCT</Button>
        <Divider/>
        <ProductList products={currentStore.products} locale={locale} variationTypes={variationTypes}
                     variationTypesValues={variationTypesValues}/>
        <CreateProduct handleAddDialog={handleAddDialog} openAddDialog={openAddDialog} store_id={currentStore.id}/>
      </div>
    </DashboardLayout>
  )
}
