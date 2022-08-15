import {ImageList, ImageListItem} from '@mui/material';
import React from 'react'
import {ThumbnailProps} from '../../types/products'

interface Props {
  thumbnail: Thumbnail,
}

export interface Thumbnail {
  id:        number;
  name:      string;
  file_name: string;
  mime_type: string;
  thumbnail: string;
}

export default function CategoriesThumbnail({thumbnail}: Props) {
  return (
    <ImageList
      className='mx-auto'
      cols={1}
      sx={{height: 310, width: 303}}
    >
      <ImageListItem>
        <img
          className='w-full'
          src={thumbnail?.thumbnail}
          alt={thumbnail?.name}
          loading="lazy"
        />
      </ImageListItem>
    </ImageList>
  )
}
