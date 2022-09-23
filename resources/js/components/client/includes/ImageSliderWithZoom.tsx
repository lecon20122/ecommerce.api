import React, {useEffect, useRef, useState} from 'react';
import {NewMediaProps} from "../../../types/products";
import {Col, Image, Row} from 'antd';
import {Button, Space, Swiper, Toast} from 'antd-mobile'
import {SwiperRef} from 'antd-mobile/es/components/swiper'

interface Props {
  media: NewMediaProps[]
  currentMedia: NewMediaProps
}

function ImageSliderWithZoom({media, currentMedia}: Props) {

  const ref = useRef<SwiperRef>(null)

  const handleOnMouseOver = (image: NewMediaProps) => {
    const imageIndex = media.findIndex((img => img.id === image.id))
    ref.current?.swipeTo(imageIndex)
  }

  const sliderList = media?.map((img) => {
    return (
      <div key={img.id} className="mr-1 my-1 lg:my-0 flex">
        <div className='hover:border-black hover:border'>
          <img className='' src={img.small} alt="Product title" onClick={() => handleOnMouseOver(img)}
               onMouseOver={() => handleOnMouseOver(img)}/>
        </div>
      </div>
    )
  })

  const swiperItems = media.map((img, index) => (
    <Swiper.Item key={img.id}>
      <Image className="" preview={{src: img.original}} src={img.big} alt="Product title"
             onMouseOver={() => handleOnMouseOver(img)}/>
    </Swiper.Item>
  ))

  return (
    <div className='flex md:flex-row flex-col basis-3/6'>
      <div className='order-first lg:order-last'>
        <Swiper
          allowTouchMove
          ref={ref}
          className="lg:hidden"
          indicator={() => null}
          trackOffset={0}
          slideSize={100}
        >
          {swiperItems}
        </Swiper>
      </div>
      <div className='basis-14 order-last lg:order-first hidden lg:flex'>
        <div className="space-x-2 text-center whitespace-nowrap">
          {sliderList}
        </div>
      </div>
    </div>
  )

}

export default ImageSliderWithZoom;
