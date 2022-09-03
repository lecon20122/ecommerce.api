import React, {useState} from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import {Inertia} from '@inertiajs/inertia';
import route from 'ziggy-js';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {StoreWithProducts} from "../../../types/globalTypes";
import ProductList from "../../../components/Lists/productList";
import CreateProduct from "../products/create";
import {VariationTypes, VariationTypesValues} from "../../../types/VariationType";

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
  const form = useForm<IFormProps>()
  const {register, handleSubmit, formState: {errors}, reset, setValue, watch} = form
  const [openAddDialog, setOpenAddDialog] = useState(false);


  const handleOnClickAddSProductDialog = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    setValue('store_id', currentStore.id)
    handleAddDialog()
  };

  const handleUpdateStore: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    Inertia.post(route('admin.stores.update', currentStore), resolveData)
  }


  const handleAddDialog = () => {
    setOpenAddDialog(!openAddDialog);
  };

  const formAddSubmitHandler: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    Inertia.post(route('admin.stores.store'), resolveData, {
      preserveState: false
    })
    reset()
  }

  // @ts-ignore
  return (
    <DashboardLayout>
      <div className='m-2'>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <FormProvider {...form}>
            <form onSubmit={handleSubmit(handleUpdateStore)}>
              <input hidden {...register('store_id')} name={'store_id'}/>
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
                <Button color="success" variant='contained'
                        onClick={e => handleOnClickAddSProductDialog(e, currentStore.id)}>add product</Button>
              </div>
            </form>
          </FormProvider>
        </div>
        <ProductList products={currentStore.products} locale={locale} variationTypes={variationTypes}
                     variationTypesValues={variationTypesValues}/>
        <CreateProduct handleAddDialog={handleAddDialog} openAddDialog={openAddDialog} watch={watch}/>
      </div>
    </DashboardLayout>
  )
}
