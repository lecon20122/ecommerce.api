import { Page } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { Alert, AlertColor, Snackbar } from '@mui/material';
import React, { useState } from 'react'
import Aside from '../includes/aside';
import Navbar from '../includes/navbar';
import { User } from '../types/auth';

interface IDashboardLayout {
  children: JSX.Element,
}

interface PageProps extends Page<PageProps> {
  flash: {
    message: AlertColor
  }
}

export default function DashboardLayout({ children }: IDashboardLayout) {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");


  const [openFlashMessage, setOpenFlashMessage] = useState(false)
  const { flash } = usePage<PageProps>().props

  const hide_sidebar = () => {
    sidebar?.classList.add("-left-full");
    backdrop?.classList.add("hidden");
  };

  return (
    <div className='bg-gray-100 text-gray-600'>
      <b id="backdrop" onClick={() => hide_sidebar()} className="fixed hidden md:hidden bg-black opacity-60 top-0 left-0 right-0 bottom-0 z-30"></b>
      <div className='flex min-h-screen dark:bg-gray-900'>
        <Aside />
        <main className='w-full'>
          <Navbar />
          {flash.message && (
            < Snackbar
              open={true}
              autoHideDuration={6000}
              onClose={() => setOpenFlashMessage(false)}
            >
              <Alert onClose={() => setOpenFlashMessage(false)} severity={flash.message} sx={{ width: '100%' }}>
                {flash.message}
              </Alert>
            </Snackbar >
          )}
          {children}
        </main>
      </div>
    </div>
  )
}
