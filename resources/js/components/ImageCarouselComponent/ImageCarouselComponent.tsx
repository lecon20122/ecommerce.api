import React, {useState} from 'react';
import {NewMediaProps} from "../../types/products";
import './ImageCarouselComponentStyles.css';

interface Props {
  images: NewMediaProps[],
  imageIndex: number
}

function ImageCarouselComponent({images, imageIndex}: Props) {
  const [current, setCurrent] = useState<number>(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className={'relative'}>
      <div className='mobile-carousel flex md:hidden'>
        {images.map((image, index) => {
          return (
            <div className='w-full item relative' key={image.id}>
              <img alt={image.name} src={image.big}
                   style={{aspectRatio: "670/892.2", height: "auto"}}/>
              <span
                style={{background: "rgba(0,0,0,.3)"}}
                className='absolute top-[6px] right-[6px] text-[#fff] text-sm py-[4px] px-[8px] rounded-lg'>{`${index + 1} / ${length}`}</span>
            </div>
          )
        })}
      </div>
      <section className='slider'>
        <div className={'aspect-[670/892.2] w-[670px] hidden md:flex'}>
          <div>
            {images[imageIndex] != null ? <img alt={images[imageIndex].name} src={images[imageIndex].big}
                                               className='w-[670px] aspect-[670/892.2]'/> :
              <img alt={images[0].name} src={images[0].big}
                   className='w-[670px] aspect-[670/892.2]'/>}

          </div>
        </div>
      </section>
    </div>
  );
}

export default ImageCarouselComponent;
