import { Container } from '@mui/system'
import React, { MouseEvent } from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import TextField from '@mui/material/TextField';
import { Category, CategoryWithMedia } from '../../../types/products';
import { Button, IconButton, ImageList, ImageListItem, ImageListItemBar, InputLabel, ListSubheader, MenuItem, Select } from '@mui/material';
import { Inertia } from '@inertiajs/inertia';
import route from 'ziggy-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage, faSave } from '@fortawesome/free-solid-svg-icons';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  currentCategory: CategoryWithMedia
  locale: string,
  categories: Category[]
}

interface IFormProps {
  parent_id?: string,
  title: string,
  images: string
}


export default function CategoryEdit({ currentCategory, locale, categories }: Props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormProps>()

  const imageListItems = currentCategory.media?.map((img) => (
    <ImageListItem key={img.id}>
      <img
        src={img.original_url}
        alt={img.name}
        loading="lazy"
      />
      <ImageListItemBar
        title={img.name}
        actionIcon={
          <div>
            <Button
              variant="contained"
              component="label"
            >
              <FontAwesomeIcon icon={faFileImage} /> <span className='ml-2'>Change Image</span>
              <input
                {...register('images')}
                type="file"
                name='images'
                hidden
              />
            </Button>
          </div>
        }
      />
    </ImageListItem>
  ))

  const selectParentMenuItems = categories.map((category) => {
    return (
      <MenuItem value={category.id} key={category.id}>{category.title[locale as keyof typeof category.title]}</MenuItem>
    )
  })


  const handleUpdateCategory: SubmitHandler<IFormProps> = (data) => {
    const resolveData = { ...data }
    Inertia.post(route('admin.categories.update', currentCategory), resolveData)
  }


  return (
    <DashboardLayout>
      <Container fixed>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <form onSubmit={handleSubmit(handleUpdateCategory)} >
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <TextField {...register('title')} name={'title'} fullWidth label="Category Title" defaultValue={currentCategory.title} />
              </div>
              <div className="md:w-1/2 px-3">
                <Select margin="dense"
                  {...register('parent_id')}
                  name='parent_id'
                  fullWidth
                  autoFocus
                  defaultValue={currentCategory.parent_id ?? ''}>
                  <MenuItem value={currentCategory.parent_id} selected>{currentCategory.title[locale as keyof typeof currentCategory.title]}</MenuItem>
                  {selectParentMenuItems}
                </Select>
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <ImageList>
                {imageListItems}
              </ImageList>
            </div>
            <Button type='submit' color="primary" variant='contained'>save changes</Button>
          </form>
        </div>
      </Container>
    </DashboardLayout>
  )
}
