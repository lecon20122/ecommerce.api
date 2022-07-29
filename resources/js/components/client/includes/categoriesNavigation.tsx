import React from 'react'

export default function CategoriesNavigation() {
  return (
    <nav className="border-b bg-[#4E4E50]">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="hidden lg:flex flex-1 items-center py-1 text-white">
          <a className="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> Category </a>
          <a className="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> About </a>
          <a className="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> Services </a>
          <a className="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> Projects </a>
          <a className="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> Offers </a>
          <a className="px-3 py-2 rounded-md hover:bg-gray-200" href="#"> Others </a>
        </div>
      </div>
    </nav>
  )
}
