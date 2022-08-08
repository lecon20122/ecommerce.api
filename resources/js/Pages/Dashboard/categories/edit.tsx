import {Container} from '@mui/system'
import React from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import TextField from '@mui/material/TextField';
import {Category, CategoryWithMedia} from '../../../types/products';
import {Button, MenuItem, Select} from '@mui/material';
import {Inertia} from '@inertiajs/inertia';
import route from 'ziggy-js';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import RenderMediaListForForm from '../../../components/shards/renderMediaListForForm';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImage} from "@fortawesome/free-solid-svg-icons";

interface Props {
  currentCategory: CategoryWithMedia
  locale: string,
  categories: Category[]
}

interface IFormProps {
  parent_id?: string,
  en: string,
  ar: string,
  images: string
  image_id: number,
  new_images: string
}


export default function CategoryEdit({currentCategory, locale, categories}: Props) {
  const form = useForm<IFormProps>()
  const {register, handleSubmit, formState: {errors}} = form

  const selectParentMenuItems = categories.map((category) => {
    return (
      <MenuItem value={category.id} key={category.id}>{category.title[locale as keyof typeof category.title]}</MenuItem>
    )
  })


  const handleUpdateCategory: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    console.log(data)
    Inertia.post(route('admin.categories.update', currentCategory), resolveData)
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
                          defaultValue={currentCategory.parent_id ?? ''}>
                    {selectParentMenuItems}
                  </Select>
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <RenderMediaListForForm media={currentCategory.media}/>
              </div>
              <div className='flex gap-2'>
                <Button type='submit' color="primary" variant='contained'>save changes</Button>
                <Button
                  variant="contained"
                  component="label"
                >
                  <FontAwesomeIcon icon={faFileImage}/> <span className='ml-2'>Add Image</span>
                  <input
                    {...register('new_images')}
                    type="file"
                    name='new_images'
                    multiple
                    hidden
                  />
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Container>
    </DashboardLayout>
  )
}
