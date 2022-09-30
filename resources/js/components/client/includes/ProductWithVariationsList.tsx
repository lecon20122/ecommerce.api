import React, {useEffect, useState} from 'react';
import {NewMediaProps, ProductWithThumbnail} from "../../../types/products";
import {HeartOutline} from "antd-mobile-icons";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import ColoredCircleButton from "../shards/ColoredCircleButton";
import {Variation} from "../../../types/VariationType";
import {SwiperSlide, Swiper} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {Head} from "@inertiajs/inertia-react";

interface Props {
  product: ProductWithThumbnail
  locale: string
}

function ProductWithVariationsList({product, locale}: Props) {
  console.log(product.variations[0])
  const handleClickOnProduct = (product: ProductWithThumbnail) => {
    Inertia.get(route('shop.product.detail', product))
  }
  const [availableMedia, setAvailableMedia] = useState<string>()
  const [srcLoaded, setSrcLoaded] = useState(false)

  useEffect(() => {
      if (Array.isArray(product.variations) && product.variations.length) {
        setAvailableMedia(product.variations[0 as keyof typeof product.variations]?.media[0]?.thumbnail)
      } else {
        setAvailableMedia(product.media[0 as keyof typeof product.media]?.thumbnail)
      }
    }, []
  )

  const handleClickVariationColors = (variation: Variation) => {
    setSrcLoaded(false)
    setAvailableMedia(variation.media[0].thumbnail)
  }

  const variationColorsList = product.variations.map((variation, index) => {
    if (variation.type === 'color' && product.variations.length > 1) {
      return (
        <SwiperSlide key={variation.id} style={{width: "24px"}}>
          <div className='mr-6' onClick={() => handleClickVariationColors(variation)}>
            <ColoredCircleButton key={variation.id}
                                 backgroundImage={variation.color?.color}
                                 color={variation.title}
                                 onClick={() => handleClickVariationColors(variation)}/>
          </div>
        </SwiperSlide>
      )
    }
  })

  return (
    <div key={product.id}>
      <a onClick={(() => handleClickOnProduct(product))}>
        {!srcLoaded &&
        <div
          className="flex items-center justify-center aspect-[61/81] lg:w-[300px] xl:h-[398px] w-[187px] h-[248px] bg-grey-600">
          <h3 className={'justify-self-center'}>loading...</h3>
        </div>
        }

        {product.media &&
        <img src={availableMedia ? availableMedia : 'https://singlecolorimage.com/get/a0aab0/405x539'}
             className={`aspect-[61/81] lg:w-[300px] xl:h-[398px] w-[187px] h-[248px] ${srcLoaded ? "block" : "hidden"} `}
             onLoad={() => setSrcLoaded(true)}
             alt={product.title[locale as keyof typeof product.title]}/>}
      </a>
      <div>
        <a className="text-gray-600">
          {product.title[locale as keyof typeof product.title]}
        </a>
        <div className='grid grid-cols-5'>
          <p className="font-semibold col-span-4">EGP {product.price}</p>
          <div className='ml-auto'>
            <a
              className="text-blue-600 col-end-1"
              href="#">
              <HeartOutline className="text-black text-lg"/>
            </a>
          </div>
        </div>
        <Swiper className='flex' spaceBetween={6} slidesPerView={'auto'}>
          {variationColorsList}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductWithVariationsList;
