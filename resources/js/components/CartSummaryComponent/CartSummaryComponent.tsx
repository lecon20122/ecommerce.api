import React from 'react';
import {Cart as CartType} from "../../types/CartType";

interface Props {
  items: CartType
  cartSubTotal: number
}

function CartSummaryComponent({cartSubTotal, items}: Props) {

  const cartItems = items.variations.map((item) => {

    return (
      <figure className="flex items-center mb-4 leading-5" key={item.id}>
        <div className='rounded  border border-gray-200 p-1'>
          <div className="block relative w-20 h-20"> {/* TODO:: add onClicking the image go to product page*/}
            <img src={item.parent.variation_images[0].original_url} alt="Title"
                 className='w-20 h-20'/> {/*TODO :: make a primary image for variations*/}
            <span
              className="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full">
										{item.pivot.quantity} </span>
          </div>
        </div>
        <figcaption className="ml-3">
          <p>{item.parent.title}</p>
          <p className="mt-1 text-gray-400">Total : EGP {parseInt(item.pivot.price) * item.pivot.quantity}</p>
        </figcaption>
      </figure>
    )
  })

  return (
    <aside className="md:w-1/3">
      <article className="text-gray-600">
        <h2 className="text-lg font-semibold mb-3">Summary</h2>
        <ul>
          <li className="flex justify-between mb-1">
            <span>Subtotal price:</span>
            <span>EGP {cartSubTotal}</span>
          </li>
          <li className="border-t flex justify-between mt-3 pt-3">
            <span>Total price:</span>
            <span className="text-gray-900 font-bold">EGP {cartSubTotal}</span>
          </li>
        </ul>
        <hr className="my-4"/>
        <div className="flex gap-3">
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text" placeholder="Coupon code"/>
          <button type="button"
                  className="px-4 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600">
            Apply
          </button>
        </div>

        <hr className="my-4"/>

        <h2 className="text-lg font-semibold mb-3">Items in cart</h2>
        {cartItems}

      </article>

    </aside>
  );
}

export default CartSummaryComponent;
