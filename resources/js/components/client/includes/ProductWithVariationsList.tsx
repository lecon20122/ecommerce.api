import React, {useEffect, useState} from 'react';
import {ProductWithThumbnail} from "../../../types/products";
import {HeartOutline} from "antd-mobile-icons";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import ColoredCircleButton from "../shards/ColoredCircleButton";
import {Variation} from "../../../types/VariationType";
import {Swiper, SwiperSlide} from "swiper/react";
import {DotLoading} from "antd-mobile";

interface Props {
  product: ProductWithThumbnail
  locale: string
}

function ProductWithVariationsList({product, locale}: Props) {

  const handleClickOnProduct = (product: ProductWithThumbnail) => {
    Inertia.get(route('shop.product.detail', product))
  }
  const [availableMedia, setAvailableMedia] = useState<string>()
  const [srcLoaded, setSrcLoaded] = useState(false)
  const [currentVariationSelected, setCurrentVariationSelected] = useState(0)

  useEffect(() => {
      if (Array.isArray(product.variations) && product.variations.length) {
        setAvailableMedia(product.variations[0 as keyof typeof product.variations]?.media[0]?.thumbnail)
        setCurrentVariationSelected(product.variations[0].id)
      } else {
        setAvailableMedia(product.media[0 as keyof typeof product.media]?.thumbnail)
      }
    }, []
  )

  const handleClickVariationColors = (variation: Variation) => {
    setCurrentVariationSelected(variation.id)
    setSrcLoaded(false)
    setAvailableMedia(variation.media[0].thumbnail)
  }

  const isVariationButtonChecked = (variationID: any) => {
    return variationID === currentVariationSelected;
  }

  const variationColorsList = product.variations.map((variation, index) => {
    if (variation.type === 'color' && product.variations.length > 1) {
      return (
        <SwiperSlide key={variation.id} style={{width: "24px"}}>
          <div className='mr-6' onClick={() => handleClickVariationColors(variation)}>
            <ColoredCircleButton
              active={isVariationButtonChecked(variation.id)}
              backgroundImage={variation.color?.color}
              color={variation.title}
            />
          </div>
        </SwiperSlide>
      )
    }
  })

  return (
    <div key={product.id} className='lg:flex-[0_1_19%] flex-[0_1_45%] md:flex-[0_1_30%]'>
      {!srcLoaded &&
      <div
        className="flex items-center justify-center aspect-[61/81] w-[300px] h-[389] bg-grey-600">
        <DotLoading style={{fontSize: 24}}/>
      </div>
      }

      <img src={availableMedia ? availableMedia : 'https://singlecolorimage.com/get/a0aab0/405x539'}
           className={`aspect-[61/81] w-[300px] h-[389] cursor-pointer ${srcLoaded ? "block" : "hidden"} `}
           onLoad={() => setSrcLoaded(true)}
           onClick={(() => handleClickOnProduct(product))}
           alt={product.title[locale as keyof typeof product.title]}/>

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
