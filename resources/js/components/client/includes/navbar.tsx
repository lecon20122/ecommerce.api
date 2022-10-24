import React from 'react'
import {GlobalOutline, UserOutline} from 'antd-mobile-icons'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {ShoppingCartOutlined} from '@ant-design/icons';
import route from "ziggy-js";


export default function Navbar() {

  const user: any = usePage().props.auth
  const cartCount: any = usePage().props.cart_count
  const ICON_SIZE = '24'

  return (
    <header className="bg-white py-3 border-b">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <InertiaLink href="/"> <img
              src="https://static.vecteezy.com/system/resources/thumbnails/007/967/852/small_2x/shopping-bags-colorful-paper-bags-for-shopping-mall-products-vector.jpg"
              height="42" width="42" alt="Brand"/> </InertiaLink>
          </div>
          <div className="flex items-center space-x-2 ml-auto">
            <div>
              <InertiaLink href={route('client.cart')} className='text-black'>
                <ShoppingCartOutlined style={{fontSize: '24px'}}/> {cartCount ? cartCount : 0}
              </InertiaLink>
            </div>
            <div className="dropdown dropdown-hover">
              <div className='flex'>
                <UserOutline fontSize={ICON_SIZE} className={''}/>
                {user === null ? '' : <span className={'text-lg ml-1 text-end text-bold'}>{user.name}</span>}
              </div>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 w-52">
                {user === null ?
                  <li><InertiaLink href={route('client.login')}>Sign in / Register</InertiaLink>
                    <hr className='font-bold'/>
                  </li>
                  : ''}
                <li><a>Orders</a></li>
                <li><a href={route('client.logout')}>Sign out</a></li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <GlobalOutline fontSize={ICON_SIZE}/>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 w-52">
                <li><a>AR</a></li>
                <li><a>EN</a></li>
              </ul>
            </div>
          </div>
          <div className="lg:hidden ml-2">
            <button type="button"
                    className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent">
              <span className="sr-only">Open menu</span>
              <i className="pi pi-bars fa-lg"/>
            </button>
          </div>
        </div>
      </div>
    </header>


  )
}
