import React from 'react';
import {Inertia} from "@inertiajs/inertia";
import route, {RouteParam, RouteParamsWithQueryOverload} from "ziggy-js";
import {Title} from "../../types/CategoryType";
import {Button as AntButton, Image} from "antd";
import {NewMediaProps} from "../../types/products";
import {Color} from "../../types/VariationType";

interface Props {
  media: NewMediaProps[]
  deleteURL: string
  params?: RouteParamsWithQueryOverload | RouteParam,
  variationColor?: Color,
}

export default function MediaProductCollection({deleteURL, media, params, variationColor}: Props) {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleMediaDelete = (mediaId: number) => {
    Inertia.post(route(deleteURL, params), {id: mediaId})
  }

  const handleColorDelete = (mediaId: number | undefined) => {
    if (mediaId) {
      Inertia.post(route(deleteURL, params), {id: mediaId})
    }
  }

  return (
    <div className={'flex flex-wrap my-2'}>
      <Image.PreviewGroup>
        {media?.map((item, index) => (
          <div key={item.id} className='flex-[1_1_60px] my-1'>
            <Image src={item.big_banner || item.mobile_banner || item.thumbnail}
                   className='px-1 aspect-[2/3] w-[60px] h-[90px] md:w-[120px] md:h-[180px] object-contain'/>
            <AntButton type="dashed" danger className='flex' onClick={e => handleMediaDelete(item.id)}>
              Delete
            </AntButton>
          </div>
        ))}
        {variationColor &&
        <div key={variationColor?.id} className='flex-[1_1_60px] my-1'>
          <Image src={variationColor?.color}
                 className='px-1 aspect-[2/3] w-[60px] h-[90px] md:w-[120px] md:h-[180px] object-contain'/>
          <AntButton type="dashed" danger className='flex' onClick={e => handleColorDelete(variationColor?.id)}>
            Delete
          </AntButton>
        </div>}
      </Image.PreviewGroup>
    </div>
  )
}
