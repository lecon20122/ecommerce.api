import React, {useState} from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import TextField from '@mui/material/TextField';
import {Button, Divider, Form, Input, InputNumber, Select, Upload} from 'antd';
import {Inertia} from '@inertiajs/inertia';
import route from 'ziggy-js';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {usePage} from "@inertiajs/inertia-react";
import Alert from "../../../components/shards/alert";
import MediaProductCollection from "../../../components/Lists/MediaProductCollection";
import {Title} from "../../../types/CategoryType";
import {Variation, VariationTypes, VariationTypesValues} from "../../../types/VariationType";
import VariationList from "../../../components/Lists/VariationList";
import {Category, NewMediaProps} from "../../../types/products";
import {PlusOutlined} from "@ant-design/icons";
import {UploadChangeParam, UploadFile} from "antd/es/upload/interface";
import Helpers from "../../../utils/Helpers";
import UploadImageComponent from "../../../components/Forms/UploadImageComponent";

interface Props {
  currentProduct: Product
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
  locale: string,
  categories: Category[],
}

interface IFormProps {
  ar: string
  en: string
  description: string
  price: number
  images: string
  store_id: number
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
}

interface MediaForm {
  images: string
}

export default function ProductEdit({currentProduct, locale, variationTypesValues, variationTypes, categories}: Props) {
  console.log(currentProduct)
  const form = useForm<IFormProps>({mode: "onChange"})
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const helpers = new Helpers()

  const {register, handleSubmit, formState: {errors, isDirty, isValid}, getValues, reset} = form
  const {
    register: register2,
    formState: {errors: errors2},
    handleSubmit: handleSubmit2,
  } = useForm<MediaForm>();

  const serverSideErrors = usePage().props.errors
  console.log(serverSideErrors)
  const handleUpdateProduct: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    Inertia.post(route('admin.products.update', currentProduct), resolveData, {
      preserveState: false
    })
    reset(getValues())
  }

  const onFinishAttachCategories = (values: any) => {
    Inertia.post(route('admin.attach.category.to.product', currentProduct), values, {
      preserveState: false
    })
  }

  const onFinish = (values: any) => {
    console.log(values)
  };

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
            label="Description"
            initialValue={currentProduct.description}
            name="description"
            rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Price"
            initialValue={currentProduct.price}
            name="price"
            rules={[{required: true, type: "integer", min: 0, max: 100000}]}
          >
            <InputNumber/>
          </Form.Item>
          <Form.Item wrapperCol={{offset: 2, span: 1}}>
            <Button type="default" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Divider/>
        <div>
          <MediaProductCollection media={currentProduct.media} deleteURL={'admin.delete.media.of.product'} params={currentProduct}/>
          <UploadImageComponent buttonLabel={'UPLOAD'} routeName={'admin.add.media.to.product'}
                                params={currentProduct}/>
        </div>
        <Divider/>
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
        <VariationList variations={currentProduct.variations} variationTypes={variationTypes}
                       variationTypesValues={variationTypesValues} productId={currentProduct.id}/>
      </div>
    </DashboardLayout>
  )
}
