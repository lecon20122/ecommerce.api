import React, { useState } from 'react'
import DashboardLayout from '../../../layouts/dashboard'
import { Button, Card, Collapse, Divider, Form, Image, Input, InputNumber, Popconfirm, Select, Space, Table, Tag } from 'antd';
import { Inertia } from '@inertiajs/inertia';
import route from 'ziggy-js';
import { Link, usePage } from "@inertiajs/inertia-react";
import { Title } from "../../../types/CategoryType";
import { AdminVariation, Setting, Variation, VariationTypes, VariationTypesValues } from "../../../types/VariationType";
import VariationList from "../../../components/Lists/VariationList";
import { Category, NewMediaProps } from "../../../types/products";
import { ProductAttribute, ProductDescription } from "../../../types/globalTypes";
import { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined, } from "@ant-design/icons";
import ModalWithChildren from "../variations/ModalWithChildren";
import NewDashboardLayout from '../../../layouts/new-dashboard-layout';
import { AdminProduct } from './product-index';

interface Props {
  currentProduct: AdminProduct,
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
  variations: AdminVariation[],
  categories: Category[],
  store_id: number,
  description: ProductDescription[],
  created_at: string,
  updated_at: string,
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
  console.log('====================================');
  console.log(currentProduct);
  console.log('====================================');
  const [openUpdateDescriptionModal, setOpenUpdateDescriptionModal] = useState<boolean>(false)
  const [openCreateDescriptionModal, setOpenCreateDescriptionModal] = useState<boolean>(false)
  const [currentDescription, setCurrentDescription] = useState<ProductDescription>()
  const [openPopconfirm, setOpenPopconfirm] = useState<boolean>(false)

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
    Inertia.post(route('admin.detach.category.from.product', currentProduct), { id: categoryId }, {
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
    Inertia.post(route('admin.update.product.description', { id: values.id }), values, {
      preserveState: false
    })
  }

  const onDeleteDescription = (id: any) => {
    Inertia.post(route('admin.delete.product.description', { id: id }), undefined, {
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
          <EditOutlined onClick={(e) => onUpdateDescription(record)} />
          <DeleteOutlined onClick={(e) => onDeleteDescription(record.id)} />
        </Space>
      ),
    },
  ]

  const collapseHeader = (hex: string, colorName: string, sizes: AdminVariation[]) => {
    return (
      <div className='flex items-center space-x-2'>
        <div className=' border border-black p-[2px]'>
          <div style={{ backgroundColor: hex }} className='w-[35px] h-[17.5px]'></div>
        </div>
        <p>{colorName}</p>
        {sizes.map((child) => {
          return (
            <Tag>
              {child?.variation_type_value?.value.en}
            </Tag>
          )
        })}
      </div>
    )
  }

  const onApproveConfirm = (id: number) => {
    Inertia.post(route('admin.products.approve', { id }), {}, {
      preserveScroll: true,
    })
  }

  return (
    <NewDashboardLayout>
      <div>
        <div className="flex items-center justify-between mb-2">
          <h1 className='text-lg font-bold my-2 ml-2'>Overview</h1>
          <div className='flex space-x-2 text-start'>
            <div>
              <small>last updated</small>
              <h6 className='text-xs'>{currentProduct.updated_at}</h6>
            </div>
            <div>
              <small>created at</small>
              <h6 className='text-xs'>{currentProduct.created_at}</h6>
            </div>
            <div>
              <Popconfirm
                title="Title"
                description="Open Popconfirm with async logic"
                open={openPopconfirm}
                onConfirm={(_event) => onApproveConfirm(currentProduct.id)}
                placement='bottomLeft'
                onCancel={(_event) => setOpenPopconfirm(false)}
              >
                <Button size='large' onClick={() => setOpenPopconfirm(true)} className='bg-[#157050] text-white'>approve</Button>
              </Popconfirm>
            </div>
          </div>
        </div>
        <Card className='mb-2'>
          <div className='flex items-center justify-center space-x-2'>
            <div className='w-full border-r-[1px] text-center p-1'>
              <small>Store</small>
              <Link href={route('admin.stores.edit', { id: currentProduct.store_id })}>
                <p className='underline'>{currentProduct.store.name}</p>
              </Link>
            </div>
            <div className='w-full border-r-[1px] text-center p-1'>
              <small>EN</small>
              <p>{currentProduct.title.en}</p>
            </div>
            <div className='w-full border-r-[1px] text-center p-1'>
              <small>AR</small>
              <p>{currentProduct.title.ar}</p>
            </div>
            <div className='w-full text-center'>
              <small>Price</small>
              <p>{currentProduct.price} EGP</p>
            </div>
          </div>
        </Card>
        <Card className='mb-2'>
          <div className='container py-3 flex space-x-1 items-center'>
            {currentAttachedCategories}
          </div>
          <Form onFinish={onFinishAttachCategories}
            wrapperCol={{ span: 12 }}>
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
        </Card>
        <Card className='mb-2'>
          <Collapse>
            {currentProduct?.variations?.map((variation) => {
              return (
                <Collapse.Panel
                  header={collapseHeader(variation?.variation_type_value?.hex_value as string,
                    variation?.variation_type_value?.value.en as string,
                    variation?.children
                  )} key={variation.id}>
                  <div className='flex justify-start items-center'>
                    {variation.thumbnails.map((thumbnail) => {
                      return (
                        <Image width={100} src={thumbnail.big_url} />
                      )
                    })}
                  </div>
                </Collapse.Panel>
              )
            })}

          </Collapse>
        </Card>


        {/* <div className='flex flex-1'>
          <div className='basis-2/3'>
            <Button onClick={() => setOpenCreateDescriptionModal(true)}>create new record</Button>
            <Divider />
            <Table scroll={{ x: true }} rowKey="id" columns={columns}
              dataSource={currentProduct.description} />
          </div>
        </div> */}
        {/* <Divider />
        <VariationList variations={currentProduct.variations} storeId={currentProduct.store_id}
          variationTypes={variationTypes}
          variationTypesValues={variationTypesValues} productId={currentProduct.id} />
        <ModalWithChildren openModal={openUpdateDescriptionModal} onOk={() => setOpenUpdateDescriptionModal(false)}
          onCancel={() => setOpenUpdateDescriptionModal(false)}>
          <Form
            className={'p-5'}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
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
              <Input />
            </Form.Item>
            <Form.Item
              label="Value English"
              initialValue={currentDescription?.value.en}
              name="en"
              rules={[{ required: true, message: 'Please fill the value please' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Value Arabic"
              initialValue={currentDescription?.value.ar}
              name="ar"
              rules={[{ required: true, message: 'Please fill the value please' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
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
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
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
              <Input />
            </Form.Item>
            <Form.Item
              label="Value English"
              name="en"
              rules={[{ required: true, message: 'Please fill the value please' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Value Arabic"
              name="ar"
              rules={[{ required: true, message: 'Please fill the value please' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="default" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </ModalWithChildren> */}
      </div>
    </NewDashboardLayout>
  )
}
