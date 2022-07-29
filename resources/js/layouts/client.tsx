import React from 'react'
import Footer from '../components/client/includes/footer'
import Header from '../components/client/includes/header'

interface IAppLayout {
  children: React.ReactNode
}

export default function AppLayout({ children }: IAppLayout) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
