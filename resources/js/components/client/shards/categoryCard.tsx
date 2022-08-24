import React from 'react'
import CategoriesThumbnail from "../../shards/categoriesThumbnail";
import {ThumbnailProps} from "../../../types/products";

interface Props {
  media: Thumbnail,
  header?: string
}

export interface Thumbnail {
  id:        number;
  name:      string;
  file_name: string;
  mime_type: string;
  thumbnail: string;
}

export default function CategoryCard({media, header}: Props) {
  return (
    <div className="bg-white flex justify-center  lg:w-[350px] lg:h-[385px]  rounded-lg shadow-lg">
      <div className="block w-full text-center">
        <div className="py-2 h-[10%] font-bold">
          {header?.toUpperCase()}
        </div>
        <CategoriesThumbnail  thumbnail={media}/>
        <a href="" className=''>see more</a>
      </div>
    </div>
  )
}
