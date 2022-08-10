import {ImageList, ImageListItem} from '@mui/material';
import React from 'react'
import {ThumbnailProps} from '../../types/products'

interface Props {
  media: ThumbnailProps,
}

export default function MapCategoriesChildrenThumbnail({media}: Props) {
  // const defineColumnNumber = () => {
  //   if (media.length > 3) {
  //     return 3
  //   }
  //   if (media.length == 2) {
  //     return 2
  //   }
  //   if (media.length == 1) {
  //     return 1
  //   }
  // }
  return (
    <ImageList
      className='mx-auto'
      cols={1}
      sx={{height: 310, width: 303}}
    >
      {/*{media.map((img) => (*/}
      <ImageListItem>
        <img
          className='w-full'
          src={media?.thumb}
          alt={media?.name}
          loading="lazy"
        />
      </ImageListItem>
      {/*))}*/}
    </ImageList>
  )
}
