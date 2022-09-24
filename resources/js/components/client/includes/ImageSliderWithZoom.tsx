import React, {useRef, useState} from 'react';
import {NewMediaProps} from "../../../types/products";
import {Image} from 'antd';
import {Swiper} from 'antd-mobile'
import {SwiperRef} from 'antd-mobile/es/components/swiper'

interface Props {
  media: NewMediaProps[]
  currentMedia: NewMediaProps
}

function ImageSliderWithZoom({media, currentMedia}: Props) {

  const ref = useRef<SwiperRef>(null)
  const [visible, setVisible] = useState(false)

  const handleOnMouseOver = (image: NewMediaProps) => {
    const imageIndex = media.findIndex((img => img.id === image.id))
    ref.current?.swipeTo(imageIndex)
  }

  const sliderList = media?.map((img) => {
    return (
        <div className='hover:border-black hover:border min mr-[7px] mb-2' style={{height: "auto", width: "60px"}}>
          <img className='' src={img.small} alt="Product title" onClick={() => handleOnMouseOver(img)}
               onMouseOver={() => handleOnMouseOver(img)}/>
        </div>
    )
  })

  const swiperItems = media.map((img, index) => (
    <Swiper.Item key={img.id} onClick={() => setVisible(true)}
    >
      <Image style={{aspectRatio: "670/892.2", width: "670px", height: "auto"}}
             src={img.big}
             alt="Product title"
             preview={false}
             onMouseOver={() => handleOnMouseOver(img)}
      />
    </Swiper.Item>
  ))

  return (
    <div className='flex md:flex-row flex-col basis-[60.83333333333333%]'>
      <div className='order-first lg:order-last basis-7/8'>
        <Swiper
          allowTouchMove
          ref={ref}
          className="lg:hidden"
          indicator={() => null}
          trackOffset={10}
        >
          {swiperItems}
        </Swiper>
      </div>
      <div className='basis-1/8 order-last lg:order-first hidden lg:flex'>
        <div className="whitespace-nowrap">
          {sliderList}
        </div>
      </div>
    </div>
  )

}

export default ImageSliderWithZoom;
