import React from 'react'


export default function Navbar() {

  const menuItems = [
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus',

        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus',
        }]
    }
  ]

  return (
    <header className="bg-white py-3 border-b">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <a href="#"> <img
              src="https://static.vecteezy.com/system/resources/thumbnails/007/967/852/small_2x/shopping-bags-colorful-paper-bags-for-shopping-mall-products-vector.jpg"
              height="42" width="42" alt="Brand"/> </a>
          </div>
          <div className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
            <input
              className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
              type="text" placeholder="Search"/>
            <button type="button"
                    className="px-4 py-2 inline-block text-black border border-transparent">
              <i className="pi pi-search"/>
            </button>
          </div>
          <div className="flex items-center space-x-2 ml-auto">
            <div className="dropdown dropdown-hover">
              <i className="text-gray-400 pi pi-globe text-black"/>
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
