import React, {useEffect, useState} from 'react';
import {NewMediaProps} from "../../../types/products";
import {Image} from 'antd';
import {Swiper} from "antd-mobile";
import ImageCarouselComponent from "../../ImageCarouselComponent/ImageCarouselComponent";

interface Props {
  media: NewMediaProps[]
}

function ImageSliderWithZoom({media}: Props) {

  const [hoveredImageIndex, setHoveredImageIndex] = useState<number>(0)

  const handleOnMouseOver = (image: NewMediaProps) => {
    const imageIndex = media.findIndex((img => img.id === image.id))
    setHoveredImageIndex(imageIndex)
  }


  const sliderList = media?.map((img, index) => {
    return (
      <div
        className={`hover:p-[2px] hover:drop-shadow-2xl hover:border-black hover:border min mr-[7px] mb-2 ${index === hoveredImageIndex ? 'border-black border drop-shadow-2xl p-[2px]' : ''}`}
        style={{height: "auto", width: "60px"}}
        key={img.id}>
        <img className='' src={img.small} alt="Product title" onClick={() => handleOnMouseOver(img)}
             onMouseOver={() => handleOnMouseOver(img)}/>
      </div>
    )
  })

  const swiperItems = media.map((img, index) => (
    <Swiper.Item key={img.id}
    >
      <Image style={{aspectRatio: "670/892.2", width: "670px", height: "auto"}}
             src={img.big}
             alt="Product title"
      />
    </Swiper.Item>
  ))

  return (
    <div className='flex md:flex-row flex-col basis-[60.83333333333333%]'>
      <div className='order-first md:order-last basis-7/8 mx-auto'>
        <ImageCarouselComponent images={media} imageIndex={hoveredImageIndex}/>
      </div>
      <div className='basis-1/8 order-last md:order-first hidden md:flex'>
        <div className="whitespace-nowrap">
          {sliderList}
        </div>
      </div>
    </div>
  )

}

export default ImageSliderWithZoom;
