import React from 'react';
import {Carousel} from "primereact/carousel";

export default function PrimeHero() {
  const responsiveOptions = [
    {
      breakpoint: '2000px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const images = [
    {
      image: 'https://img.ltwebstatic.com/images3_ach/2022/08/19/1660897732282ad9c5a8e608526fd711f82e180162.webp',
    },
    {
      image: 'https://img.ltwebstatic.com/images3_ach/2022/08/20/16609632771dbb082916844844a15cbcc6b58f736d.webp',
    },
  ]


  const productTemplate = (images: { image: string | undefined; }) => {
    return (
      <div>
        <img className='' src={images.image} alt=""/>
      </div>
    );
  }

  return (
    <Carousel value={images} containerClassName={'hide-navigator'} numVisible={2} numScroll={1}
              responsiveOptions={responsiveOptions}
              itemTemplate={productTemplate} circular indicatorsContentClassName='hidden' autoplayInterval={3000}/>
  );
}
