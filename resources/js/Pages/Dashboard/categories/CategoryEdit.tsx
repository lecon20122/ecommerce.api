import React from 'react'
import { Category } from '../../../types/products';
import { Inertia } from '@inertiajs/inertia';
import route from 'ziggy-js';
import MediaProductCollection from "../../../components/Lists/MediaProductCollection";
import { Button, Form, Input, InputNumber, Select } from "antd";
import UploadImageComponent from "../../../components/Forms/UploadImageComponent";
import { MediaConversionEnums } from "../../../Enums/MediaConversionEnums";
import NewDashboardLayout from '../../../layouts/new-dashboard-layout';

interface Props {
  currentCategory: Category
  locale: string,
  categories: Category[]
}


export default function CategoryEdit({ currentCategory, locale, categories }: Props) {

  console.log('====================================');
  console.log(currentCategory);
  console.log('====================================');
  const selectParentMenuItems = categories.map((category) => {
    return (
      <Select.Option value={category.id}
        key={category.id}>{category.title[locale as keyof typeof category.title]}</Select.Option>
    )
  })


  const onFinish = (data: any) => {
    Inertia.post(route('admin.categories.update', currentCategory), data, {
      preserveState: false
    })
  }


  return (

    <NewDashboardLayout>
      <div className="m-5">
        <Form
          initialValues={{
            en: currentCategory.title.en,
            ar: currentCategory.title.ar,
            ...currentCategory
          }}
          onFinish={onFinish}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          size={'large'}
        >
          <Form.Item name={'en'} label='Title EN' >
            <Input />
          </Form.Item>
          <Form.Item name={'ar'} label='Title AR' >
            <Input />
          </Form.Item>
          <Form.Item name={'order'} label='Order' >
            <InputNumber />
          </Form.Item>
          <Form.Item name={'primary_color'} label='Primary Color' >
            <Input style={{ backgroundColor: currentCategory.primary_color }} />
          </Form.Item>
          <Form.Item name={'secondary_color'} label='Secondary Color' >
            <Input style={{ backgroundColor: currentCategory.secondary_color }} />
          </Form.Item>
          <Form.Item name={'parent_id'} label='Category Parents'>
            <Select allowClear placeholder={'Select A Parent'}>
              {selectParentMenuItems}
            </Select>
          </Form.Item>
          <Form.Item name={'opposite_category_id'} label='Opposite Gender Category'>
            <Select allowClear placeholder={'Select A Opposite Gender Category'}>
              {selectParentMenuItems}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 2, span: 1 }}>
            <Button type={'default'} htmlType={'submit'}>SUBMIT</Button>
          </Form.Item>
        </Form>
        <div className='flex justify-center gap-4 flex-wrap'>
          <UploadImageComponent routeName={'admin.add.media.to.category'} params={currentCategory}
            buttonLabel={'UPLOAD Category Thumbnail'} />

          <UploadImageComponent routeName={'admin.add.banner.to.category'} params={currentCategory}
            buttonLabel={'UPLOAD BIG BANNER'}
            collectionName={MediaConversionEnums.CATEGORY_BIG_BANNER} />

          <UploadImageComponent routeName={'admin.add.banner.to.category'} params={currentCategory}
            buttonLabel={'UPLOAD MOBILE BANNER'}
            collectionName={MediaConversionEnums.CATEGORY_MOBILE_BANNER} />
        </div>

        <MediaProductCollection media={currentCategory.media} deleteURL={'admin.delete.media.of.category'}
          params={currentCategory} />
      </div>
    </NewDashboardLayout>

  )
}
