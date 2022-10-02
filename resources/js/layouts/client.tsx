import React, {useEffect} from 'react'
import Footer from '../components/client/includes/footer'
import Navbar from '../components/client/includes/navbar'
import CategoriesNavigation from "../components/client/includes/categoriesNavigation";
import {message} from 'antd';
import {usePage} from "@inertiajs/inertia-react";
import {Page, PageProps} from "@inertiajs/inertia";
import {AlertColor} from "@mui/material";


interface IAppLayout {
  children: React.ReactNode
}

interface PageProps extends Page<PageProps> {
  flash: {
    message: AlertColor
  }
}

export default function AppLayout({children}: IAppLayout) {

  const {flash} = usePage<PageProps>().props
  console.log(flash)
  useEffect(() => {
    if (flash.message === 'success') {
      message.success(flash.message)
    }
    if (flash.message === 'error') {
      message.error(flash.message)
    }
  }, [flash.message])

  return (
    <div className={'overflow-hidden'}>
      <Navbar/>
      <CategoriesNavigation/>
      {children}
      <Footer/>
    </div>
  )
}
