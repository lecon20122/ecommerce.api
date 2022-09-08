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
  const [currentImage, setCurrentImage] = useState<NewMediaProps>({...currentMedia})
  const ref = useRef<SwiperRef>(null)
  const handleOnMouseOver = (image: NewMediaProps) => {
    // setCurrentImage(image)
    const imageIndex = media.findIndex((img => img.id === image.id))
    ref.current?.swipeTo(imageIndex)
  }

  const sliderList = media?.map((img) => {
    return (
      <div key={img.id} className="p-1 hover:border-black hover:border hidden lg:flex">
        <img className="w-14 h-14" src={img.small} alt="Product title" onMouseOver={() => handleOnMouseOver(img)}/>
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
    <Row>
      <Col span={2}>
        <div className="space-x-2 text-center whitespace-nowrap">
          {sliderList}
        </div>
      </Col>
      <Col span={24} lg={{span: 22}}>
        {/*<div className="lg:px-2 hidden lg:flex">*/}
        {/*  <Image preview={{src: currentImage?.original}} src={currentImage?.big}*/}
        {/*         alt="Product title"/>*/}
        {/*</div>*/}
        <Swiper
          allowTouchMove
          ref={ref}
          className="lg:hidden"
          // slideSize={80}
        >
          {swiperItems}
        </Swiper>
      </Col>
    </Row>
  )

}

export default ImageSliderWithZoom;
