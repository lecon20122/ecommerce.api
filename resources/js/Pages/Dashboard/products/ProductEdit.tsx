import React, {useState} from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import {Button, Divider, Form, Input, InputNumber, Select, Space, Table} from 'antd';
import {Inertia} from '@inertiajs/inertia';
import route from 'ziggy-js';
import {usePage} from "@inertiajs/inertia-react";
import {Title} from "../../../types/CategoryType";
import {Setting, Variation, VariationTypes, VariationTypesValues} from "../../../types/VariationType";
import VariationList from "../../../components/Lists/VariationList";
import {Category, NewMediaProps} from "../../../types/products";
import {ProductAttribute, ProductDescription} from "../../../types/globalTypes";
import {ColumnsType} from "antd/es/table";
import {DeleteOutlined, EditOutlined,} from "@ant-design/icons";
import ModalWithChildren from "../variations/ModalWithChildren";

interface Props {
  currentProduct: Product
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
  locale: string,
  categories: Category[],
  attributes: ProductAttribute[],
}

interface Product {
  id: number;
  title: Title
  price: string;
  slug: string;
  media: NewMediaProps[];
  variations: Variation[],
  categories: Category[],
  store_id: number,
  description: ProductDescription[],
}

interface DataType extends ProductDescription {
  key?: string;
}

export default function ProductEdit({
                                      currentProduct,
                                      locale,
                                      variationTypesValues,
                                      variationTypes,
                                      categories,
                                      attributes
                                    }: Props) {

  const [openUpdateDescriptionModal, setOpenUpdateDescriptionModal] = useState<boolean>(false)
  const [openCreateDescriptionModal, setOpenCreateDescriptionModal] = useState<boolean>(false)
  const [currentDescription, setCurrentDescription] = useState<ProductDescription>()

  const serverSideErrors = usePage().props.errors

  const onFinishAttachCategories = (values: any) => {
    Inertia.post(route('admin.attach.category.to.product', currentProduct), values, {
      preserveState: false
    })
  }

  const onFinish = (values: any) => {
    Inertia.post(route('admin.products.update', currentProduct), values, {
      preserveState: false
    })
  };

  const handleDetachCategories = (categoryId: number) => {
    Inertia.post(route('admin.detach.category.from.product', currentProduct), {id: categoryId}, {
      preserveState: false
    })
  }

  const onUpdateDescription = (record: ProductDescription) => {
    setOpenUpdateDescriptionModal(true)
    setCurrentDescription(record)
  }

  const onCreateDescriptionFinish = (values: any) => {
    Inertia.post(route('admin.add.product.description'), values, {
      preserveState: false
    })
  }

  const onUpdateDescriptionFinish = (values: any) => {
    Inertia.post(route('admin.update.product.description', {id: values.id}), values, {
      preserveState: false
    })
  }

  const onDeleteDescription = (id: any) => {
    Inertia.post(route('admin.delete.product.description', {id: id}), undefined, {
      preserveState: false
    })
  }

  const currentAttachedCategories = currentProduct.categories.map((category) => {
    return (
      <div className='border border-1 border-black p-1 flex space-x-1 items-center'>
        <h1 className={'text-left '}>{category.title.en}</h1>
        <button className={'cursor text-red-600'} onClick={event => handleDetachCategories(category.id)}>x
        </button>
      </div>
    )
  })

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'attribute',
      title: 'Description Title',
      dataIndex: 'attribute',
      render: (_, record) => <span>{record.attribute.attribute.en}</span>
    },
    {
      key: 'value',
      title: 'Description Title EN',
      dataIndex: 'value',
      render: (_, record) => <span>{record.value.en}</span>
    },
    {
      key: 'value',
      title: 'Description Title AR',
      dataIndex: 'value',
      render: (_, record) => <span>{record.value.ar}</span>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={(e) => onUpdateDescription(record)}/>
          <DeleteOutlined onClick={(e) => onDeleteDescription(record.id)}/>
        </Space>
      ),
    },
  ]

  return (
    <DashboardLayout>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <Form
          name="basic"
          labelCol={{span: 2}}
          wrapperCol={{span: 12}}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Title EN"
            initialValue={currentProduct.title.en}
            name="en"
            rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Title AR"
            name="ar"
            initialValue={currentProduct.title.ar}
            rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Price"
            initialValue={currentProduct.price}
            name="price"
            rules={[{required: true}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item wrapperCol={{offset: 2, span: 1}}>
            <Button type="default" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Divider/>

        <div className='flex flex-1'>
          <div className='basis-1/3'>
            <div className='container py-3 flex space-x-1 items-center'>
              <h1>Currently Attached Categories :</h1>
              {currentAttachedCategories}
            </div>
            <Form onFinish={onFinishAttachCategories}
                  wrapperCol={{span: 12}}>
              <Form.Item name="id">
                <Select
                  mode="multiple"
                  placeholder="Select a category"
                  allowClear
                >
                  {categories.map((category) => (
                    <Select.Option
                      key={category.id}
                      value={category.id}>{category.title[locale as keyof typeof category.title]}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item className={'ml-2'}>
                <Button type="default" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className='basis-2/3'>
            <Button onClick={() => setOpenCreateDescriptionModal(true)}>create new record</Button>
            <Divider/>
            <Table scroll={{x: true}} rowKey="id" columns={columns}
                   dataSource={currentProduct.description}/>
          </div>
        </div>
        <Divider/>
        <VariationList variations={currentProduct.variations} storeId={currentProduct.store_id}
                       variationTypes={variationTypes}
                       variationTypesValues={variationTypesValues} productId={currentProduct.id}/>
        <ModalWithChildren openModal={openUpdateDescriptionModal} onOk={() => setOpenUpdateDescriptionModal(false)}
                           onCancel={() => setOpenUpdateDescriptionModal(false)}>
          <Form
            className={'p-5'}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onUpdateDescriptionFinish}
          >
            <Form.Item name="id" label={'select attribute'}>
              <Select
                placeholder="Select a Attribute"
                defaultValue={currentDescription?.attribute.id}
                allowClear
              >
                {attributes.map((attribute) => (
                  <Select.Option
                    key={attribute.id}
                    value={attribute.id}>{attribute.attribute.en}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              hidden={true}
              label="id"
              initialValue={currentDescription?.id}
              name="id"
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Value English"
              initialValue={currentDescription?.value.en}
              name="en"
              rules={[{required: true, message: 'Please fill the value please'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Value Arabic"
              initialValue={currentDescription?.value.ar}
              name="ar"
              rules={[{required: true, message: 'Please fill the value please'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
              <Button type="default" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </ModalWithChildren>
        <ModalWithChildren openModal={openCreateDescriptionModal} onOk={() => setOpenCreateDescriptionModal(false)}
                           onCancel={() => setOpenCreateDescriptionModal(false)}>
          <Form
            className={'p-5'}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onCreateDescriptionFinish}
          >
            <Form.Item name="product_attribute_id" label={'select attribute'}>
              <Select
                placeholder="Select a Attribute"
                allowClear
              >
                {attributes.map((attribute) => (
                  <Select.Option
                    key={attribute.id}
                    value={attribute.id}>{attribute.attribute.en}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              hidden={true}
              initialValue={currentProduct.id}
              label="product_id"
              name="product_id"
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Value English"
              name="en"
              rules={[{required: true, message: 'Please fill the value please'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Value Arabic"
              name="ar"
              rules={[{required: true, message: 'Please fill the value please'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
              <Button type="default" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </ModalWithChildren>
      </div>
    </DashboardLayout>
  )
}
