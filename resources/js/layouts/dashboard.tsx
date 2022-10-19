import {Page} from '@inertiajs/inertia';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';
import {AlertColor} from '@mui/material';
import React, {useEffect, useRef, useState} from 'react'
import Aside from '../includes/aside';
import {Toast} from "primereact/toast";
import {Button} from "antd";
import route from "ziggy-js";
import {LogoutOutlined} from "@ant-design/icons";

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
  console.log(flash)
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (flash.message) {
      toastRef.current?.show({severity: 'success', summary: flash.message, life: 3000});
    }
  }, [toastRef])


  const hide_sidebar = () => {
    sidebar?.classList.add("-left-full");
    backdrop?.classList.add("hidden");
  };
  const open_sidebar = () => {
    sidebar?.classList.remove('-left-full');
    backdrop?.classList.remove('hidden');
  };

  return (
    <div className='bg-gray-100 text-gray-600'>
      <b id="backdrop" onClick={() => hide_sidebar()}
         className="fixed hidden md:hidden bg-black opacity-60 top-0 left-0 right-0 bottom-0 z-30"/>
      <div className='flex min-h-screen dark:bg-gray-900'>
        <Aside/>
        {/*<DashboardAsideBar />*/}
        <main className='w-full'>
          {/*NAVBAR*/}
          <header className="h-14 z-10 py-3 bg-white shadow-sm border-b border-gray-200">
            <div className="container h-full flex justify-between lg:justify-end px-6 mx-auto">
              <button onClick={open_sidebar}
                      className="p-1 mr-5  md:hidden focus:outline-none focus:shadow-outline-purple">
                <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="currentColor">
                  <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </button>
              <ul className="flex justify-end space-x-2">
                <li>
                  <InertiaLink href={route('admin.logout')}><span
                    className='text-secondary text-lg mr-auto'>Logout</span></InertiaLink>
                </li>
              </ul>
            </div>
          </header>
          {/*NAVBAR*/}
          <Toast ref={toastRef}/>
          {children}
        </main>
      </div>
    </div>
  )
}
