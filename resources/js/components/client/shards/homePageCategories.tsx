import React from 'react'
import {HomePageCategory} from "../../../types/CategoryType";
import {Grid} from "@mui/material";
import CategoryCard from "./categoryCard";

interface Props {
  categories: HomePageCategory[]
  locale: string
}


export default function HomePageCategories({locale, categories}: Props) {
  console.log(categories)
  const categoriesItems = categories.map((category) => (
    <CategoryCard key={category.id} header={category.title[locale as keyof typeof category.title]}
                  media={category.thumbnail}/>
  ))

  // const CategoriesCircle = categories.map((category) => (
  //   <Grid item xs={2} sm={3} md={2} key={category.id}>
  //     <div className='lg:w-[175px] lg:h-[175px] h-[95px] w-[95px]'>
  //       <a href="#" className="group">
  //         <img className='rounded-full w-full h-full mx-auto' src={category.thumbnail.thumbnail}
  //              alt={category.title[locale as keyof typeof category.title]}/>
  //         <p className="text-center text-gray-600 group-hover:text-blue-600"> Interior items </p>
  //       </a>
  //     </div>
  //   </Grid>
  // ))

  return (
    <section className="container py-5 mx-auto w-full">
      <div className="px-4">
        <nav className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 gap-x-3 gap-y-6">
            {categoriesItems}
        </nav>
      </div>
      {/*// <!-- container //end -->*/}
    </section>
  )
}
