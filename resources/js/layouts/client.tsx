import React from 'react'
import Footer from '../components/client/includes/footer'
import Navbar from '../components/client/includes/navbar'

interface IAppLayout {
  children: React.ReactNode
}

export default function AppLayout({ children }: IAppLayout) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
