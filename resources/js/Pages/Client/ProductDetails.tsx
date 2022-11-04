import React, {useEffect, useState} from 'react';
import {NewMediaProps, ProductWithThumbnail} from "../../types/products";
import AppLayout from "../../layouts/client";
import ImageSliderWithZoom from "../../components/client/includes/ImageSliderWithZoom";
import {Variation} from "../../types/VariationType";
import SquaredColorButton from "../../components/client/shards/SquaredColorButton";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import SizeRadioButtonComponent from "../../components/client/shards/SizeRadioButtonComponent/SizeRadioButtonComponent";

interface Props {
  product: ProductWithThumbnail
  locale: string
}

function ProductDetails({product, locale}: Props) {

  const [currentMedia, setCurrentMedia] = useState<NewMediaProps[]>(product.variations[0].media)
  const [currentVariation, setCurrentVariation] = useState<Variation>(product.variations[0])
  const [currentSizeVariationId, setCurrentSizeVariationId] = useState<number>(0)
  const [selectSizeAlert, setSelectSizeAlert] = useState<boolean>(false)

  const handleClickVariationColors = (variation: Variation) => {
    setCurrentMedia(variation.media)
    setCurrentVariation(variation)
    setCurrentSizeVariationId(0)
  }

  useEffect(() => {
      if (Array.isArray(product.variations) && product.variations.length) {
        setCurrentMedia(product.variations[0].media)
      }
    }, []
  )

  const variationColorsList = product.variations.map((variation) => {
    if (variation.variation_type?.type.en === 'color') {
      return (
        <SquaredColorButton onClick={() => handleClickVariationColors(variation)} key={variation.id}
                            color={variation.variation_type_value?.value.en} backgroundImage={variation.color?.color}/>
      )
    }
  })

  const variationSizeList = currentVariation.children.map((variation) => {
    if (variation.variation_type?.type.en === 'size') {
      return (
        <SizeRadioButtonComponent disabled={variation.stock_count < 1} variation={variation} key={variation.id}
                                  setCurrentSizeVariationId={setCurrentSizeVariationId}/>
      )
    }
  })

  const addToCart = () => {
    if (currentSizeVariationId) {
      setSelectSizeAlert(false)
      const currentSelectedVariation = currentVariation.children.find((child) => child.id === currentSizeVariationId)
      Inertia.post(route('client.add.to.cart'), {
          variation_id: currentSizeVariationId,
          price: currentSelectedVariation?.price as string,
          quantity: 1
        }, {
          preserveState: false,
          preserveScroll: false,
        }
      )
    } else {
      setSelectSizeAlert(true)
    }
  }

  return (
    <AppLayout>
      <div>
        <div className="bg-white lg:py-10">
          <div className="max-w-screen-xl lg:mx-auto px-[12px]  md:px-[40px]">
            {/*<div className="grid grid-cols-1 sm:grid-cols-2 gap-2"  > */}
            <div className="flex md:flex-row flex-col">
              <ImageSliderWithZoom media={currentMedia}/>
              <main className='container md:ml-[50px] basis-[39.16666666666667%]'>
                <div className='mx-auto'>
                  <h2 className="font-semibold text-2xl mb-4">
                    {product.title[locale as keyof typeof product.title]}
                  </h2>
                  <p className="mb-4 font-semibold text-2xl">EGP {currentVariation.price}

                  </p>
                  <div className="flex space-x-2 flex-col space-y-3">
                    <div className="flex items-center">
                      <span className="mr-3">Color</span>
                      {variationColorsList}
                    </div>
                    <div className="flex items-center">
                      <span className={`mr-3`}>Size</span>
                      <div className="flex items-center justify-center">
                        <form className="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
                          {variationSizeList}
                        </form>
                      </div>
                      {selectSizeAlert &&
                      <span className={`text-red-600`}>! Please select size first</span>}
                    </div>
                  </div>

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
                  <div className="flex gap-2 h-[56px]">
                    <button
                      className="px-4 py-2 text-white text-xl bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 basis-5/6"
                      onClick={event => addToCart()}>
                      Add to Cart
                    </button>
                    <button
                      className=" px-4 py-2 text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100 basis-1/6">

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill='#000000'>
                          <polygon points="18,22 12,16 6,22 6,2 18,2 "/>
                        </g>
                      </svg>

                    </button>
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
