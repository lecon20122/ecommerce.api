import React from 'react';
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {Title} from "../../types/CategoryType";
import {Col, Image, Row} from "antd";

import {Button as AntButton} from 'antd';
import {Image as ImageMobile} from 'antd-mobile';
import {NewMediaProps} from "../../types/products";
import {Variation} from "../../types/VariationType";

interface Props {
  product: Product | Variation
  deleteURL: string
}

interface Product {
  id: number;
  title: Title
  price: string;
  slug: string;
  description: string;
  media: NewMediaProps[];
}

export default function MediaProductCollection({product, deleteURL}: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleMediaDelete = (mediaId: number) => {
    Inertia.post(route(deleteURL, product), {id: mediaId})
  }

  return (
    <div className={'flex flex-wrap my-2'}>
      <Image.PreviewGroup>
        {product.media?.map((item, index) => (
          <div key={item.id} className='flex-[1_1_130px] my-1'>
            <Image src={item.thumbnail} className='px-1'/>
            <AntButton type="dashed" danger className='flex' onClick={e => handleMediaDelete(item.id)}>
              Delete
            </AntButton>
          </div>
        ))}
      </Image.PreviewGroup>
    </div>
  )
}
