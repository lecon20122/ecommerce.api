import React, {useEffect, useState} from 'react';
import {NewMediaProps, ProductWithThumbnail} from "../../types/products";
import AppLayout from "../../layouts/client";
import ImageSliderWithZoom from "../../components/client/includes/ImageSliderWithZoom";
import {Variation} from "../../types/VariationType";
import {Radio} from "antd";
import ColoredCircleButton from "../../components/client/shards/ColoredCircleButton";

interface Props {
  product: ProductWithThumbnail
  locale: string
}

function ProductDetails({product, locale}: Props) {
  const [currentMedia, setCurrentMedia] = useState<NewMediaProps[]>(product.media)
  const [currentVariation, setCurrentVariation] = useState<Variation>(product.variations[0])
  const [currentImage, setCurrentImage] = useState<NewMediaProps>({...product.variations[0].media[0]})

  const handleClickVariationColors = (variation: Variation) => {
    setCurrentMedia(variation.media)
    setCurrentImage({...variation.media[0]})
    setCurrentVariation(variation)
  }

  useEffect(() => {
      if (Array.isArray(product.variations) && product.variations.length) {
        setCurrentMedia(product.variations[0].media)
      } else {
        setCurrentMedia(product.media)
      }
    }, []
  )

  const variationColorsList = product.variations.map((variation) => {
    if (variation.type === 'color') {
      return (
        <ColoredCircleButton onMouseOver={() => handleClickVariationColors(variation)} key={variation.id}
                             backgroundColor={variation.title} backgroundImage={variation.color?.color}/>
      )
    }
  })
  const variationSizeList = currentVariation.children.map((variation) => {
    if (variation.type === 'size') {
      return (
        <Radio.Button key={variation.id} value={variation.id}>{variation.title}</Radio.Button>
      )
    }
  })

  return (
    <AppLayout>
      <div>
        <div className="bg-white lg:py-10">
          <div className="max-w-screen-xl lg:mx-auto px-4">
            {/*<div className="grid grid-cols-1 sm:grid-cols-2 gap-2"  > */}
            <div className="flex md:flex-row flex-col">
              <ImageSliderWithZoom media={currentMedia} currentMedia={currentImage}/>
              <main className='container basis-3/6'>
                <div className='mx-auto'>
                  <h2 className="font-semibold text-2xl mb-4">
                    {product.title[locale as keyof typeof product.title]}
                  </h2>
                  <div className="flex flex-wrap items-center space-x-2 mb-2">
                    <span className="text-yellow-500">9.3</span>

                    <svg width="6px" height="6px" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="3" cy="3" r="3" fill="#DBDBDB"/>
                    </svg>

                    <span className="text-gray-400">
							<i className="fa fa-shopping-bag mr-2"/> 154 orders
						</span>

                    <svg width="6px" height="6px" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="3" cy="3" r="3" fill="#DBDBDB"/>
                    </svg>

                    <span className="text-green-500">Verified</span>

                  </div>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      {variationColorsList}
                    </div>
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Size</span>
                      <Radio.Group defaultValue="a" buttonStyle="solid">
                        {variationSizeList}
                      </Radio.Group>
                    </div>
                  </div>
                  <p className="mb-4 font-semibold text-2xl">EGP {product.price}

                  </p>

                  <p className="mb-4 text-gray-500">
                    {product.description}
                  </p>
                  <ul className="mb-5">
                    <li className="mb-1"><b className="font-medium w-36 inline-block">Model#:</b>
                      <span className="text-gray-500">Odsy-1000</span>
                    </li>
                    <li className="mb-1"><b className="font-medium w-36 inline-block">Color:</b>
                      <span className="text-gray-500">Brown</span>
                    </li>
                    <li className="mb-1"><b className="font-medium w-36 inline-block">Delivery:</b>
                      <span className="text-gray-500">Russia, USA & Europe</span></li>
                    <li className="mb-1"><b className="font-medium w-36 inline-block">Color:</b>
                      <span className="text-gray-500">Brown</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    <a
                      className="px-4 py-2 inline-block text-white bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600"
                      href="#">
                      Buy now
                    </a>
                    <a
                      className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                      href="#">
                      <i className="fa fa-shopping-cart mr-2"/>
                      Add to cart
                    </a>
                    <a
                      className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100"
                      href="#">
                      <i className="fa fa-heart mr-2"/>
                      Save for later
                    </a>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        <section className="bg-white py-10">
          <div className="container max-w-screen-xl mx-auto px-4">

            <div className="flex flex-wrap -mx-2">
              <div className="lg:w-3/4 px-2">

                <article className="border border-gray-200 shadow-sm rounded bg-white">
                  <nav className="border-b px-4">
                    <a href="#"
                       className="px-3 py-4 mx-1 inline-block border-b border-blue-600 text-blue-600 hover:border-blue-600 hover:text-blue-500">Overview</a>
                    <a href="#"
                       className="px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500">Specification</a>
                    <a href="#"
                       className="px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500">Delivery</a>
                    <a href="#" className="px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500">Payment
                      info</a>
                    <a href="#" className="px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500">Seller
                      profile</a>
                  </nav>
                  <div className="p-5 text-gray-700">
                    <p className="mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. <br/> Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="mb-3">
                      Dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. <br/> Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="mb-3">
                      Consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </article>
              </div>
              <aside className="lg:w-1/4 px-2">

                <article className="border border-gray-200 shadow-sm rounded bg-white p-4">
                  <h3 className="mb-5 text-lg font-semibold">Similar products</h3>

                  <figure className="flex flex-row mb-4">
                    <div>
                      <a href="#" className="block w-20 h-20 rounded border border-gray-200 overflow-hidden">
                        <img src="images/items/8.jpg" alt="Title"/>
                      </a>
                    </div>
                    <figcaption className="ml-3">
                      <p><a href="#" className="text-gray-600 hover:text-blue-600">Travel Bag Jeans Blue Color
                        Modern</a>
                      </p>
                      <p className="mt-1 font-semibold">$712.00</p>
                    </figcaption>
                  </figure>

                  <figure className="flex flex-row mb-4">
                    <div>
                      <a href="#" className="block w-20 h-20 rounded border border-gray-200 overflow-hidden">
                        <img src="images/items/9.jpg" alt="Title"/>
                      </a>
                    </div>
                    <figcaption className="ml-3">
                      <p><a href="#" className="text-gray-600 hover:text-blue-600">Apple Watch Series 4 - Space Gray</a>
                      </p>
                      <p className="mt-1 font-semibold">$12.99</p>
                    </figcaption>
                  </figure>

                  <figure className="flex flex-row mb-4">
                    <div>
                      <a href="#" className="block w-20 h-20 rounded border border-gray-200 overflow-hidden">
                        <img src="images/items/10.jpg" alt="Title"/>
                      </a>
                    </div>
                    <figcaption className="ml-3">
                      <p><a href="#" className="text-gray-600 hover:text-blue-600">Apple Watch Series 4 - Space Gray</a>
                      </p>
                      <p className="mt-1 font-semibold">$12.99</p>
                    </figcaption>
                  </figure>

                  <figure className="flex flex-row mb-4">
                    <div>
                      <a href="#" className="block w-20 h-20 rounded border border-gray-200 overflow-hidden">
                        <img src="images/items/11.jpg" alt="Title"/>
                      </a>
                    </div>
                    <figcaption className="ml-3">
                      <p><a href="#" className="text-gray-600 hover:text-blue-600">Apple Watch Series 4 - Space Gray</a>
                      </p>
                      <p className="mt-1 font-semibold">$12.99</p>
                    </figcaption>
                  </figure>
                </article>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>

  );
}

export default ProductDetails;
