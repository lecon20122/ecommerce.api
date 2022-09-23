import React, {useEffect, useState} from 'react';
import {NewMediaProps, ProductWithThumbnail} from "../../../types/products";
import {HeartOutline} from "antd-mobile-icons";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import ColoredCircleButton from "../shards/ColoredCircleButton";
import {Variation} from "../../../types/VariationType";

interface Props {
  product: ProductWithThumbnail
  locale: string
}

function ProductWithVariationsList({product, locale}: Props) {

  const handleClickOnProduct = (product: ProductWithThumbnail) => {
    Inertia.get(route('shop.product.detail', product))
  }
  const [availableMedia, setAvailableMedia] = useState<string>()

  useEffect(() => {
      if (Array.isArray(product.variations) && product.variations.length) {
        setAvailableMedia(product.variations[0 as keyof typeof product.variations].media[0]?.thumbnail)
      } else {
        setAvailableMedia(product.media[0 as keyof typeof product.media]?.thumbnail)
      }
    }, []
  )

  const handleClickVariationColors = (variation: Variation) => {
    setAvailableMedia(variation.media[0].thumbnail)
  }

  const variationColorsList = product.variations.map((variation) => {
    if (variation.type === 'color') {
      return (
        <div className='inline-flex mr-1' key={variation.id} onClick={() => handleClickVariationColors(variation)}>
          <ColoredCircleButton key={variation.id} backgroundColor={variation.title}
                               backgroundImage={variation.color?.color}
                               onClick={() => handleClickVariationColors(variation)}/>
        </div>
      )
    }
  })

  return (
    <div key={product.id}>
      <a onClick={(() => handleClickOnProduct(product))}>
        {product.media &&
        <img src={availableMedia ? availableMedia : 'https://singlecolorimage.com/get/a0aab0/405x539'}
             className="aspect-[61/81]"
             loading={"lazy"}
             alt={product.title[locale as keyof typeof product.title]}/>}
      </a>

      <div className="">
        <a href="#" className="text-gray-600">
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
        {variationColorsList}
      </div>
    </div>
  );
}

export default ProductWithVariationsList;
