import {Container} from '@mui/system'
import React, {useState} from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import TextField from '@mui/material/TextField';
import {Category, CategoryWithMedia, CategoryWithThumbnail} from '../../../types/products';
import {Button, MenuItem, Select} from '@mui/material';
import {Inertia} from '@inertiajs/inertia';
import route from 'ziggy-js';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import RenderMediaListForForm from '../../../components/shards/renderMediaListForForm';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImage} from "@fortawesome/free-solid-svg-icons";

interface Props {
  currentCategory: CategoryWithThumbnail
  locale: string,
  categories: Category[]
}

interface IFormProps {
  parent_id?: string,
  en: string,
  ar: string,
  images: string
  image_id: number,
}


export default function CategoryEdit({currentCategory, locale, categories}: Props) {
  const form = useForm<IFormProps>({mode : "onChange"})
  const {register, handleSubmit, formState: {errors , isDirty , isValid} , getValues , reset } = form
  const [disabled, setDisabled] = useState(true);

  const selectParentMenuItems = categories.map((category) => {
    return (
      <MenuItem value={category.id} key={category.id}>{category.title[locale as keyof typeof category.title]}</MenuItem>
    )
  })


  const handleUpdateCategory: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    Inertia.post(route('admin.categories.update', currentCategory), resolveData)
    reset(getValues())
  }


  return (
    <DashboardLayout>
      <Container fixed>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <FormProvider {...form}>
            <form onSubmit={handleSubmit(handleUpdateCategory)} encType={'multipart/form-data'}>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <TextField {...register('ar')} name={'ar'} fullWidth label="Category Title AR"
                             defaultValue={currentCategory.title.ar}/>
                </div>
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <TextField {...register('en')} name={'en'} fullWidth label="Category Title EN"
                             defaultValue={currentCategory.title.en} placeholder={currentCategory.title.en}/>
                </div>
                <div className="md:w-1/3 px-3">
                  <Select margin="dense"
                          {...register('parent_id')}
                          name='parent_id'
                          fullWidth
                          autoFocus
                          onChange={(e) => setDisabled(true)}
                          defaultValue={currentCategory.parent_id ?? ''}>
                    {selectParentMenuItems}
                  </Select>
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                 <RenderMediaListForForm currentCategory={currentCategory}/>
              </div>
              <div className='flex gap-2'>
                <Button disabled={!isDirty || !isValid} type='submit' color="primary" variant='contained'>save changes</Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Container>
    </DashboardLayout>
  )
}
