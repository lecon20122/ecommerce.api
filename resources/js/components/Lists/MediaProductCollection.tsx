import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Backdrop, Button, ImageListItemBar} from "@mui/material";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {Title} from "../../types/CategoryType";

interface Props {
  product: Product
}

interface Product {
  id: number;
  title :Title
  price: string;
  slug: string;
  description: string;
  media: Media[];
}

interface Media {
  id: number;
  name: string;
  file_name: string;
  mime_type: string;
  thumbnail: string;
  big: string;
}

export default function MediaProductCollection({product}: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleMediaDelete = (mediaId: number) => {
    Inertia.post(route('admin.delete.media.of.product', product), {id: mediaId})
  }

  return (
    <ImageList cols={4} className='mx-auto'>
      {product.media?.map((item, index) => (
        <ImageListItem key={item.id} sx={{height: '100% !important'}}>
          <img
            src={item.thumbnail}
            alt={item.name}
            loading="lazy"
            onClick={handleToggle}
          />
          <ImageListItemBar
            actionIcon={
              <div>
                <Button onClick={e => handleMediaDelete(item.id)} color={'error'}>delete</Button>
              </div>
            }
          />
          <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={open}
            onClick={handleToggle}
          >
            <img src={item.big} alt="" loading="lazy"/>
          </Backdrop>
        </ImageListItem>
      ))
      }
    </ImageList>
  )
}
