import {Container} from '@mui/system'
import React, {useState} from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import TextField from '@mui/material/TextField';
import {Category, CategoryWithMedia, CategoryWithThumbnail} from '../../../types/products';
import {Inertia} from '@inertiajs/inertia';
import route from 'ziggy-js';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import MediaProductCollection from "../../../components/Lists/MediaProductCollection";
import {Button, Form, Input, Select} from "antd";
import UploadImageComponent from "../../../components/Forms/UploadImageComponent";
import {MediaConversionEnums} from "../../../Enums/MediaConversionEnums";

interface Props {
  currentCategory: Category
  locale: string,
  categories: Category[]
}


export default function CategoryEdit({currentCategory, locale, categories}: Props) {
  console.log(currentCategory)
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
    <DashboardLayout>
      <div className="m-5">
        <Form
          onFinish={onFinish}
          labelCol={{span: 2}}
          wrapperCol={{span: 20}}
          size={'large'}
        >
          <Form.Item name={'en'} label='Title EN' initialValue={currentCategory.title.en}>
            <Input/>
          </Form.Item>
          <Form.Item name={'ar'} label='Title AR' initialValue={currentCategory.title.ar}>
            <Input/>
          </Form.Item>
          <Form.Item name={'parent_id'} label='Category Parents'>
            <Select placeholder={'Select A Parent'}>
              {selectParentMenuItems}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{offset: 2, span: 1}}>
            <Button type={'default'} htmlType={'submit'}>SUBMIT</Button>
          </Form.Item>
        </Form>
        <UploadImageComponent routeName={'admin.add.media.to.category'} params={currentCategory}
                              buttonLabel={'UPLOAD'}/>

        <UploadImageComponent routeName={'admin.add.banner.to.category'} params={currentCategory}
                              buttonLabel={'UPLOAD BIG BANNER'}
                              collectionName={MediaConversionEnums.CATEGORY_BIG_BANNER}/>

        <UploadImageComponent routeName={'admin.add.banner.to.category'} params={currentCategory}
                              buttonLabel={'UPLOAD MOBILE BANNER'}
                              collectionName={MediaConversionEnums.CATEGORY_MOBILE_BANNER}/>

        <MediaProductCollection media={currentCategory.media} deleteURL={'admin.delete.media.of.category'}
                                params={currentCategory}/>
      </div>
    </DashboardLayout>
  )
}
