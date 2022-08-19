import {faFileImage} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button, ImageList, ImageListItem, ImageListItemBar} from '@mui/material';
import React from 'react'
import {useFormContext} from 'react-hook-form'
import {CategoryWithThumbnail} from '../../types/products'

interface Props {
  currentCategory: CategoryWithThumbnail,
  // form: UseFormReturn<any, any>,
}

export default function RenderMediaListForForm({currentCategory}: Props) {
  const {register, setValue} = useFormContext();
  const handleImageClick = (e: any, imageID: number) => {
    setValue('image_id', imageID)
  }
  if (currentCategory.thumbnail) {
    return (
      <ImageList className='ml-5' cols={1}>
        {currentCategory.thumbnail &&
        <ImageListItem>
          <img
            src={currentCategory.thumbnail.thumbnail}
            alt={currentCategory.thumbnail.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={currentCategory.thumbnail.name}
            actionIcon={
              <div>
                <Button
                  variant="contained"
                  size={'small'}
                  component="label"
                  onClick={(e: any) => handleImageClick(e, currentCategory.thumbnail.id)}
                >
                  <FontAwesomeIcon icon={faFileImage}/> <span className='ml-2'>Change Image</span>
                  <input
                    {...register('images')}
                    type="file"
                    name={'images'}
                    hidden
                  />
                </Button>
              </div>
            }
          />
        </ImageListItem>}
      </ImageList>
    )
  } else {
    return (
      <Button
        variant="contained"
        component="label"
      >
        <input
          {...register('images')}
          type="file"
          name='images'
        />
      </Button>
    )
  }

}
