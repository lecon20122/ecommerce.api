import {faFileImage} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button, ImageList, ImageListItem, ImageListItemBar} from '@mui/material';
import React from 'react'
import {useFormContext, UseFormReturn} from 'react-hook-form'
import {Media} from '../../types/products'

interface Props {
  media: Media[],
  // form: UseFormReturn<any, any>,
}

export default function RenderMediaListForForm({media}: Props) {
  const {register, setValue} = useFormContext();
  const handleImageClick = (e: any, imageID: number) => {
    console.log(imageID)
    setValue('image_id', imageID)
  }

  return (
    <ImageList cols={4}>
      {media.map((img) => (
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
                  onClick={(e: any) => handleImageClick(e, img.id)}
                >
                  <FontAwesomeIcon icon={faFileImage}/> <span className='ml-2'>Change Image</span>
                  <input
                    {...register('images')}
                    type="file"
                    name={'images'}
                    // multiple
                    hidden
                  />
                </Button>
              </div>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
