import {Page} from '@inertiajs/inertia';
import {usePage} from '@inertiajs/inertia-react';
import {AlertColor} from '@mui/material';
import React, {useEffect, useRef} from 'react'
import Aside from '../includes/aside';
import Navbar from '../includes/navbar';
import {Toast} from "primereact/toast";

interface IDashboardLayout {
  children: JSX.Element,
}

interface PageProps extends Page<PageProps> {
  flash: {
    message: AlertColor
  }
}

export default function DashboardLayout({children}: IDashboardLayout) {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const toastRef = useRef<any>(null);

  const {flash} = usePage<PageProps>().props

  useEffect(() => {
    if (flash.message) {
      console.log(flash.message)
      toastRef.current?.show({severity: 'success', summary: flash.message, life: 3000});
    }
  }, [toastRef])

  const hide_sidebar = () => {
    sidebar?.classList.add("-left-full");
    backdrop?.classList.add("hidden");
  };

  return (
    <div className='bg-gray-100 text-gray-600'>
      <b id="backdrop" onClick={() => hide_sidebar()}
         className="fixed hidden md:hidden bg-black opacity-60 top-0 left-0 right-0 bottom-0 z-30"/>
      <div className='flex min-h-screen dark:bg-gray-900'>
        <Aside/>
        <main className='w-full'>
          <Navbar/>
          <Toast ref={toastRef}/>
          {children}
        </main>
      </div>
    </div>
  )
}
