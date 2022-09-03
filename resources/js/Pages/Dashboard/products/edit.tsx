import React from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import {Inertia} from '@inertiajs/inertia';
import route from 'ziggy-js';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {usePage} from "@inertiajs/inertia-react";
import Alert from "../../../components/shards/alert";
import MediaProductCollection from "../../../components/Lists/MediaProductCollection";
import {Title} from "../../../types/CategoryType";
import {Variation, VariationTypes, VariationTypesValues} from "../../../types/VariationType";
import VariationList from "../../../components/Lists/VariationList";
import {NewMediaProps} from "../../../types/products";

interface Props {
  currentProduct: Product
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
  locale: string,
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
  variations: Variation[]
}

interface Media {
  id: number;
  name: string;
  file_name: string;
  mime_type: string;
  thumbnail: string;
  big: string;
}

interface MediaForm {
  images: string
}

export default function ProductEdit({currentProduct, locale, variationTypesValues, variationTypes}: Props) {
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
              <Button disabled={!isDirty || !isValid} type='submit' color="primary" variant='contained'>save
                changes</Button>
            </div>
          </form>
        </FormProvider>
        <form onSubmit={handleSubmit2(handleAddMediaToProduct)}>
          <input multiple type={'file'} {...register2('images')}/>
          <Button type='submit' color="primary" variant='contained'>
            upload
          </Button>
        </form>
        <div className="-mx-3 md:flex mb-6 py-3">
          <MediaProductCollection product={currentProduct}/>
        </div>
        <VariationList variations={currentProduct.variations} variationTypes={variationTypes}
                       variationTypesValues={variationTypesValues} productId={currentProduct.id}/>
      </div>
    </DashboardLayout>
  )
}
