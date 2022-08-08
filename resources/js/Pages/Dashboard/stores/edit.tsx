import {Container} from '@mui/system'
import React from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import {Inertia} from '@inertiajs/inertia';
import route from 'ziggy-js';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {StoreWithProducts} from "../../../types/globalTypes";
import ProductList from "../../../components/Lists/productList";

interface Props {
  currentStore: StoreWithProducts
  locale: string,
}

interface IFormProps {
  name: string
  description: string
}


export default function StoreEdit({currentStore, locale}: Props) {
  console.log(currentStore)
  const form = useForm<IFormProps>()
  const {register, handleSubmit, formState: {errors}} = form


  const handleUpdateStore: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    console.log(data)
    Inertia.post(route('admin.stores.update', currentStore), resolveData)
  }


  return (
    <DashboardLayout>
      <div className='m-2'>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <FormProvider {...form}>
              <form onSubmit={handleSubmit(handleUpdateStore)}>
                <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <TextField {...register('name')} name={'name'} fullWidth label="Store Name"
                               defaultValue={currentStore.name}/>
                  </div>
                  <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <TextField multiline {...register('description')} name={'description'} fullWidth
                               label="Store Description"
                               defaultValue={currentStore.description} placeholder={currentStore.description}/>
                  </div>
                </div>
                <div className="-mx-3 md:flex mb-6">

                </div>
                <div className='flex gap-2'>
                  <Button type='submit' color="primary" variant='contained'>save changes</Button>
                </div>
              </form>
            </FormProvider>
          </div>
          <ProductList products={currentStore.products} locale={locale}/>
        </div>
    </DashboardLayout>
)
}
