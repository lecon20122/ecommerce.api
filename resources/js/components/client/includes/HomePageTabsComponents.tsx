import React from 'react';
import {Tabs} from "antd-mobile";
import {HomePageCategory} from "../../../types/CategoryType";
import CategoryRectangleComponent from "./CategoryRectangleComponent";

interface Props {
  categories: HomePageCategory[]
  locale: string
}

function HomePageTabsComponents({categories, locale}: Props) {



  const tabs = categories.map((category) => {
    return <Tabs.Tab key={category.id} title={category.title.en}>
      <div className='lg:w-[1280px] h-full w-full'>
        {category.media.map((image) => {
          return (
            <div key={image.id} className={''}>
              {image.big_banner && <img src={image.big_banner} alt={category.title.en}
                                        className='w-[1280px]'/>}
            </div>
          )
        })}
        <CategoryRectangleComponent key={category.id} categories={category.children} locale={locale}/>
      </div>
    </Tabs.Tab>
  })


  return (
    <section className='container mx-auto max-w-[1280px]'>
      <Tabs stretch={false} style={{'--title-font-size': '22px', '--content-padding': '5px 0px'}}>
        {tabs}
      </Tabs>
    </section>
  );
}

export default HomePageTabsComponents;