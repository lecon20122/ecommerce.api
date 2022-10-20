import React from 'react';
import AppLayout from "../../layouts/client";
import {Cart as CartType} from "../../types/CartType";

interface Props {
  items: CartType
}

function Cart({items}: Props) {

  const cartItems = items.variations.map((variation) => {

    return (
      <div key={variation.id}>
        <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
          <div className="w-full lg:w-2/5 xl:w-2/4">
            <figure className="flex leading-5">
              <div>
                <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                  <img src={variation.parent.variation_images[0].original_url} alt="Title"/>
                </div>
              </div>
              <figcaption className="ml-3">
                {/*<p>*/}
                {/*  <h3 className="hover:text-blue-600">{variation.title}</h3>*/}
                {/*</p>*/}
                <p
                  className="mt-1 text-gray-400"> {variation.variation_type?.type.en} : {variation.variation_type_value?.value.en}
                </p>
                <p
                  className="mt-1 text-gray-400"> {variation.parent.variation_type?.type.en} : {variation.parent.variation_type_value?.value.en}
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="">
            <div className="w-24 relative">
              <input
                type={'number'}
                defaultValue={variation.pivot.quantity}
                min={1}
                max={variation.stock_count}
                className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
              </input>
            </div>
          </div>
          <div>
            <div className="leading-5">
              <p
                className="font-semibold not-italic">EGP {variation.pivot.quantity * parseFloat(variation.pivot.price)}</p>
              <small className="text-gray-400"> EGP {variation.price} x {variation.pivot.quantity} </small>
            </div>
          </div>
          <div className="flex-auto">
            <div className="float-right flex space-x-1">
              <a href="#"
                 className="px-3 py-2 inline-block text-blue-600 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="20" height="20"
                     viewBox="0 0 172 172"
                     style={{fill: '#000000'}}>
                  <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
                     strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
                     fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                     style={{mixBlendMode: 'normal'}}>
                    <path d="M0,172v-172h172v172z" fill="none"/>
                    <g fill="#000000">
                      <path
                        d="M148.35,6.88c-4.28656,0 -8.55969,1.67969 -11.825,4.945l-2.795,2.795l23.65,23.65c-0.01344,0.01344 2.795,-2.795 2.795,-2.795c6.54406,-6.54406 6.53063,-17.11937 0,-23.65c-3.27875,-3.26531 -7.53844,-4.945 -11.825,-4.945zM128.4625,20.7475c-0.77937,0.1075 -1.505,0.49719 -2.0425,1.075l-111.585,111.6925c-0.44344,0.40313 -0.77937,0.92719 -0.9675,1.505l-6.88,25.8c-0.30906,1.1825 0.04031,2.43219 0.90031,3.29219c0.86,0.86 2.10969,1.20938 3.29219,0.90031l25.8,-6.88c0.57781,-0.18812 1.10188,-0.52406 1.505,-0.9675l111.6925,-111.585c1.37063,-1.33031 1.38406,-3.52062 0.05375,-4.89125c-1.33031,-1.37062 -3.52062,-1.38406 -4.89125,-0.05375l-111.0475,111.0475l-13.975,-13.975l111.0475,-111.0475c1.03469,-0.99437 1.34375,-2.53969 0.76594,-3.85656c-0.57781,-1.31687 -1.90812,-2.13656 -3.34594,-2.05594c-0.1075,0 -0.215,0 -0.3225,0z"/>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                href="#"> Remove </a>
            </div>
          </div>
        </div>
        <hr className="my-4"/>
      </div>
    )
  })

  return (
    <AppLayout>
      <section className="py-5 sm:py-7 bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2">Shopping cart</h2>
        </div>
      </section>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <main className="md:w-3/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                {cartItems}
                <h6 className="font-bold">Free Delivery within 1-2 weeks</h6>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip</p>
              </article>
            </main>
            <aside className="md:w-1/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <ul className="mb-5">
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>Total price:</span>
                    <span>$245.97</span>
                  </li>
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>Discount:</span>
                    <span className="text-green-500">- $60.00</span>
                  </li>
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>TAX:</span>
                    <span>$14.00</span>
                  </li>
                  <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>$420.00</span>
                  </li>
                </ul>

                <a
                  className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                  href="#"> Checkout </a>

                <a
                  className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  href="#"> Back to shop </a>

              </article>
            </aside>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default Cart;
