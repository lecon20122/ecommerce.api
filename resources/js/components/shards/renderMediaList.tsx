import { faFileImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, ImageListItem, ImageListItemBar, ImageList } from '@mui/material';
import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Media } from '../../types/products'

interface Props {
  media: Media[],
  form: UseFormReturn<any, any>,
}

export default function RenderMediaList({ media, form }: Props) {

  const handleImageClick = (e: any, imageID: number) => {
    form.setValue('image_id', imageID)
  }

  if (media.length) {
    return (
      <ImageList>
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
                    <FontAwesomeIcon icon={faFileImage} /> <span className='ml-2'>Change Image</span>
                    <input
                      {...form.register('images')}
                      type="file"
                      name='images'
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
  } else {
    return (
      <Button
        variant="contained"
        component="label"
      >
        <FontAwesomeIcon icon={faFileImage} /> <span className='ml-2'>Add Image</span>
        <input
          {...form.register('images')}
          type="file"
          name='images'
          hidden
        />
      </Button>
    )
  }
}
