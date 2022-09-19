import React from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import TextField from '@mui/material/TextField';
import {Button, Form, Select} from 'antd';
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
  const {register, handleSubmit, formState: {errors, isDirty, isValid}, getValues, reset} = form
  const {
    register: register2,
    formState: {errors: errors2},
    handleSubmit: handleSubmit2,
  } = useForm<MediaForm>();

  const serverSideErrors = usePage().props.errors

  const handleUpdateProduct: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    Inertia.post(route('admin.products.update', currentProduct), resolveData, {
      preserveState: false
    })
    reset(getValues())
  }
  const handleAddMediaToProduct: SubmitHandler<MediaForm> = (data) => {
    const resolveData = {...data}
    Inertia.post(route('admin.add.media.to.product', currentProduct), resolveData)
    console.log(data)
  }

  const onFinishAttachCategories = (values: any) => {
    // console.log(values)
    Inertia.post(route('admin.attach.category.to.product', currentProduct), values, {
      preserveState: false
    })
  }
  return (
    <DashboardLayout>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(handleUpdateProduct)} encType={'multipart/form-data'} className='mb-3'>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                <TextField {...register('ar')} name={'ar'} fullWidth label="Product Title AR"
                           defaultValue={currentProduct.title.ar}/>
                {serverSideErrors.title && <Alert text={serverSideErrors.title} type={"red"}/>}
              </div>
              <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                <TextField {...register('en')} name={'en'} fullWidth label="Product Title EN"
                           defaultValue={currentProduct.title.en}/>
                {serverSideErrors.title && <Alert text={serverSideErrors.title} type={"red"}/>}
              </div>
              <div className="md:w-1/4 px-3">
                <TextField type={'number'} {...register('price', {valueAsNumber: true})} name={'price'} fullWidth
                           label="Price"
                           defaultValue={currentProduct.price}/>
                {serverSideErrors.price && <Alert text={serverSideErrors.price} type={"red"}/>}
              </div>
              <div className="md:w-1/4 px-3">
                <TextField {...register('description')} name={'description'} fullWidth label="Description"
                           defaultValue={currentProduct.description}/>
                {serverSideErrors.description && <Alert text={serverSideErrors.description} type="red"/>}
              </div>
            </div>
            <div className='flex gap-2'>
              <Button disabled={!isDirty || !isValid} htmlType="submit" type="default">SAVE CHANGES</Button>
            </div>
          </form>
        </FormProvider>
        <form onSubmit={handleSubmit2(handleAddMediaToProduct)} className={'flex'}>
          <input multiple type={'file'} {...register2('images')}/>
          <Button type="default" htmlType="submit">
            upload
          </Button>
        </form>
        <Form className={'flex py-3'} onFinish={onFinishAttachCategories}>
          <Form.Item name="id" label="Attach to Category" style={{width: '30%'}}>
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
        <MediaProductCollection product={currentProduct} deleteURL={'admin.delete.media.of.product'}/>
        <VariationList variations={currentProduct.variations} variationTypes={variationTypes}
                       variationTypesValues={variationTypesValues} productId={currentProduct.id}/>
      </div>
    </DashboardLayout>
  )
}
