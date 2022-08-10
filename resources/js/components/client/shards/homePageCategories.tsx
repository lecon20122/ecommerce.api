import React from 'react'
import CategoryCard from './categoryCard'
import {CategoryWithThumbnail} from "../../../types/products";

interface Props {
  categories: CategoryWithThumbnail[]
  locale: string
}


export default function HomePageCategories({locale, categories}: Props) {

  console.log(categories)

  const categoriesItems = categories.map((category) => (
    <CategoryCard key={category.id} header={category.title[locale as keyof typeof category.title]}
                  media={category.thumbnail}/>
  ))

  return (
    <section className="py-5 mx-auto" style={{width: 1480}}>
      <div className="px-4">
        <nav className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 gap-x-3 gap-y-6">
          {categoriesItems}
        </nav>
      </div>
    </section>
  )
}
