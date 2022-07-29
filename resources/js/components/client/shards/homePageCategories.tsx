import React from 'react'
import CategoryCard from './categoryCard'

export default function HomePageCategories() {

  return (
    <section className="py-5 mx-auto" style={{ width: 1480 }}>
      <div className="px-4">
        <nav className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 gap-x-3 gap-y-6">
          <CategoryCard header={'WOMEN'} />
          <CategoryCard header={'MEN'} />
          <CategoryCard header={'KIDS'} />
          <CategoryCard header={'SPORTS'} />
        </nav>
      </div>
    </section>
  )
}
