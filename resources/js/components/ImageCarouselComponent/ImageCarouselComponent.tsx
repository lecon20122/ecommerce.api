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
    <section className='slider'>
      <div className='md:hidden'>
        <div className='left-arrow' onClick={prevSlide}> left</div>
        <div className='right-arrow' onClick={nextSlide}> right</div>
        <div style={{aspectRatio: "670/892.2", width: "370px", height: "auto"}}>
          {images.map((image, index) => {
            return (
              <div>
                {index === current &&
                <img alt={image.name} src={image.big}
                     style={{aspectRatio: "670/892.2", width: "360px", height: "auto"}}/>
                }
              </div>
            )
          })}
        </div>
      </div>
      <div className={'aspect-[670/892.2] w-[670px] hidden md:flex'}>
        <div>
          {images[imageIndex] != null ? <img alt={images[imageIndex].name} src={images[imageIndex].big}
                                             className='w-[670px] aspect-[670/892.2]'/> :
            <img alt={images[0].name} src={images[0].big}
                 className='w-[670px] aspect-[670/892.2]'/>}

        </div>
      </div>
    </section>
  );
}

export default ImageCarouselComponent;
