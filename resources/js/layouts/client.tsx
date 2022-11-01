import React, {useEffect} from 'react'
import Footer from '../components/client/includes/footer'
import Navbar from '../components/client/includes/navbar'
import CategoriesNavigation from "../components/client/includes/categoriesNavigation";
import {usePage} from "@inertiajs/inertia-react";
import {Page} from "@inertiajs/inertia";
import {AlertColor} from "@mui/material";
import {Toast} from 'antd-mobile'


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

  useEffect(() => {
    if (flash.message) {
      Toast.show({
        content: flash.message,
        position: 'top',
      })
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
