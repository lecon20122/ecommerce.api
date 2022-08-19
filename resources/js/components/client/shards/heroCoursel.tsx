import React from 'react'

interface Props {
  imageUrl: string
}

export default function HeroCoursel() {
  return (
    <div>
      <article className="h-[300px] w-100">
        {/* <img src={imageUrl} alt="Logo" /> */}
        <div className='p-10 absolute top-4 left-0'>
          <h1 className="text-3xl md:text-4xl text-white font-semibold">
            Best products &amp; <br />
            brands in our store
          </h1>
          <p className="text-lg text-white font-normal mt-4 mb-6">
            Trendy Products, Factory Prices, Excellent Service
          </p>
          <div className='grid md:grid-cols-4 gap-2 text-center'>
            <a className="md:col-span-2 px-2 py-2 inline-block font-semibold bg-yellow-500 text-white border border-transparent rounded-md hover:bg-yellow-600" href="#">
              Discover
            </a>
            <a className="md:col-span-2 px-2 py-2 inline-block font-semibold text-blue-600 border border-transparent rounded-md hover:bg-gray-100 bg-white" href="#">
              Learn more
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
