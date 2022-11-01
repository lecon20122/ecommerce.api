import React, {useState} from 'react';
import AppLayout from "../../layouts/client";
import {UserAddress} from "../../types/auth";
import CartSummaryComponent from "../../components/CartSummaryComponent/CartSummaryComponent";
import {Cart} from "../../types/CartType";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";

interface Props {
  user_addresses: UserAddress[],
  items: Cart,
  shippingTypes: Object[]
  cartSubTotal: number
}

function Checkout({user_addresses, items, shippingTypes, cartSubTotal}: Props) {

  const [shipping_address_id, setShipping_address_id] = useState(0)
  const [shipping_type_id, setShipping_type_id] = useState(0)
  const [notes, setNotes] = useState('')

  const userAddresses = user_addresses.map((address) => {
    return (
      <label
        key={address.id}
        className="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
        <span><input name="shipping" type="radio" value={address.id}
                     onChange={event => setShipping_address_id(parseInt(event.target.value))} className="h-4 w-4 mt-1"/></span>
        <p className="ml-2">
          <span>{address.street}</span><br/>
          <span>Building {address.building}, Floor {address.floor}, Apartment {address.apartment_number}</span>
        </p>
      </label>
    )
  })
  const shippingTypesLabel = shippingTypes.map((type) => {
    return (
      <label
        key={type.id}
        className="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
        <span><input name="shipping" type="radio" value={type.id}
                     onChange={event => setShipping_type_id(parseInt(event.target.value))}
                     className="h-4 w-4 mt-1"/></span>
        <p className="ml-2 flex items-center space-x-2 justify-between w-full">
          <span className='text-xl'>{type.type}</span>
          <span className='text-md'>EGP {type.price}</span>
        </p>
      </label>
    )
  })

  const onClickPlaceOrder = () => {
    Inertia.post(route('client.checkout'), {
      shipping_address_id: shipping_address_id,
      shipping_type_id: shipping_type_id,
      notes: notes
    }, {
      preserveState: false,
    })
  }

  return (
    <AppLayout>
      <div className="container max-w-screen-xl mx-auto px-4 mt-5">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
          <main className="md:w-2/3">
            <article className="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
              <form>
                <h2 className="text-xl font-semibold mb-5">Shipping Address</h2>
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {userAddresses}
                </div>
              </form>
              <h2 className="text-xl font-semibold mb-5">Shipping Type</h2>
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {shippingTypesLabel}
              </div>
              <div className="mb-4">
                <label className="block mb-1"> Other info </label>
                <textarea placeholder="Type your wishes"
                          onChange={event => setNotes(event.target.value)}
                          className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"/>
              </div>

              <div className="flex justify-end space-x-2">
                <a
                  className="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                  href="#"> Back </a>
                <button
                  onClick={onClickPlaceOrder}
                  className="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                > Place order
                </button>
              </div>

            </article>
          </main>
          <CartSummaryComponent cartSubTotal={cartSubTotal} items={items}/>
        </div>
      </div>
    </AppLayout>
  );
}

export default Checkout;
