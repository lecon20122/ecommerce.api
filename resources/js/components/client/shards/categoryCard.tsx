import React from 'react'

interface Props {
  imageUrl?: string,
  header: string
}

export default function CategoryCard({ imageUrl, header }: Props) {
  return (
    <div className="bg-white flex justify-center w-[350px] h-[385px] rounded-lg shadow-lg">
      <div className="block w-full text-center">
        <div className="py-2 h-[10%] font-bold">
          {header}
        </div>
        <div className="">
          {/* <img src={imageUrl} alt="" className='mx-auto' /> */}
        </div>
        <a href="" className=''>see more</a>
      </div>
    </div>
  )
}
