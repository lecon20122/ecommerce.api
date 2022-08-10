import React from 'react'
import MapCategoriesChildrenThumbnail from "../../shards/mapCategoriesChildrenThumbnail";
import {ThumbnailProps} from "../../../types/products";

interface Props {
  media: ThumbnailProps,
  header?: string
}

export default function CategoryCard({media, header}: Props) {
  return (
    <div className="bg-white flex justify-center w-[350px] h-[385px] rounded-lg shadow-lg">
      <div className="block w-full text-center">
        <div className="py-2 h-[10%] font-bold">
          {header?.toUpperCase()}
        </div>
        <MapCategoriesChildrenThumbnail media={media}/>
        <a href="" className=''>see more</a>
      </div>
    </div>
  )
}
