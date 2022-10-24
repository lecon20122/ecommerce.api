import React, {useState} from 'react';
import AppLayout from "../../layouts/client";
import {Cart as CartType} from "../../types/CartType";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {Variation} from "../../types/VariationType";

interface Props {
  items: CartType
  cartSubTotal: number
}

function Cart({items, cartSubTotal}: Props) {
  const [qty, setQty] = useState(0)

  const onClickUpdateQuantity = (variation: Variation) => {
    Inertia.post(route('client.update.cart.item.quantity', {variation: variation}), {quantity: qty}, {
      preserveState: false,
    })
  }
  const cartItems = items.variations.map((variation) => {

    return (
      <div key={variation.id}>
        <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
          <div className="flex space-x-5 items-center flex-space-between w-full lg:w-2/5 xl:w-2/4">
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
            <div className="">
              <div className="w-24 relative flex space-x-1 items-center justify-center">
                <input
                  type={'number'}
                  onChange={event => setQty(parseInt(event.target.value))}
                  defaultValue={variation.pivot.quantity}

                  min={1}
                  max={variation.stock_count}
                  className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                </input>
                <button
                  className='text-blue-600'
                  disabled={qty == 0}
                  onClick={event => onClickUpdateQuantity(variation)}>update
                </button>
              </div>
            </div>
            <div>
              <div className="leading-5">
                <p
                  className="font-semibold not-italic">EGP {variation.pivot.quantity * parseFloat(variation.pivot.price)}</p>
                <small className="text-gray-400"> EGP {variation.price} x {variation.pivot.quantity} </small>
              </div>
            </div>
          </div>
          <div className="flex-auto">
            <div className="float-right flex space-x-1">
              <div
                onClick={event => onClickRemove(variation)}
                className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"> Remove
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4"/>
      </div>
    )
  })

  const onClickRemove = (variation: Variation) => {

    Inertia.post(route('client.remove.item.from.cart', {variation: variation}), undefined, {
      preserveState: false,
    })
  }

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
                    <span>Cart subtotal:</span>
                    <span>EGP {cartSubTotal}</span>
                  </li>
                  {/*<li className="flex justify-between text-gray-600  mb-1">*/}
                  {/*  <span>Discount:</span>*/}
                  {/*  <span className="text-green-500">- $60.00</span>*/}
                  {/*</li>*/}
                  {/*<li className="flex justify-between text-gray-600  mb-1">*/}
                  {/*  <span>TAX:</span>*/}
                  {/*  <span>$14.00</span>*/}
                  {/*</li>*/}
                  <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>EGP {cartSubTotal}</span>
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
