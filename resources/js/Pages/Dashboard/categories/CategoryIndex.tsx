import React, { useState } from 'react'
import { Category } from '../../../types/products';
import route from 'ziggy-js';
import { Inertia, } from '@inertiajs/inertia';
import { ColumnsType } from "antd/es/table";
import { Button, Divider, Form, Input, InputNumber, Select, Space, Table, Upload } from "antd";
import { SwapOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import ModalWithChildren from "../variations/ModalWithChildren";
import { UploadChangeParam, UploadFile } from "antd/es/upload/interface";
import Helpers from "../../../utils/Helpers";
import NewDashboardLayout from '../../../layouts/new-dashboard-layout';
import AntDesignDataTable from '../../../components/DataTables/AntDesignDataTable';

interface Props {
  categories: Array<Category>
  locale: string
}

interface DataType extends Category {
  key?: string;
}


export default function CategoryIndex({ categories, locale }: Props) {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const helpers = new Helpers()

  const handleAddDialog = () => {
    setOpenAddDialog(!openAddDialog);
  };

  const handleOnClickUpdateDialog = (categoryId: any) => {
    Inertia.get(route('admin.categories.edit', categoryId))
  };

  const handleOnClickDelete = (categoryId: any) => {
    Inertia.post(route('admin.toggle.category.status', categoryId), undefined, {
      preserveState: false,
    })
  };

  const handleDeleteClose = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setOpenDeleteDialog(false);
  };

  const handleAgreeDelete = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    Inertia.post(route('admin.categories.destroy', currentCategoryId), undefined, {
      preserveState: false,
    })
    setOpenDeleteDialog(false);
  };

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'title',
      title: 'Title AR',
      dataIndex: 'title_ar',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.title.ar}</span>
        </Space>
      ),
    },
    {
      key: 'title',
      title: 'Title EN',
      dataIndex: 'title_en',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.title.en}</span>
        </Space>
      ),
    },
    {
      key: 'parent',
      title: 'Category Parent',
      dataIndex: 'parent',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.parent?.title.en}</span>
        </Space>
      ),
    },
    {
      key: 'opposite_category',
      title: 'Opposite Category',
      dataIndex: 'parent',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.opposite_category?.title.en}</span>
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={(e) => handleOnClickUpdateDialog(record.id)} />
          <SwapOutlined onClick={(e) => handleOnClickDelete(record.id)} />
        </Space>
      ),
    },
  ]


  const selectParentMenuItems = categories.map((category) => (
    <Select.Option value={category.id} key={category.id}>{category.title.en}</Select.Option>
  ))

  const rowClassName = (record: any, index: any) => {
    if (record.is_active) {
      return 'bg-lime-100'
    } else {
      return 'bg-red-100'
    }
  }

  const storeCategoriesAction = (values: any) => {
    Inertia.post(route('admin.categories.store'), values, {
      preserveState: false
    })
  }

  const onFinish = (values: any) => {
    if (!values.images) {
      storeCategoriesAction(values)
    } else {
      values.images = helpers.appendImageToFormData(fileList)
      storeCategoriesAction(values)
    }
  };

  const onChangeHandler = (file: UploadChangeParam) => {
    setFileList(file.fileList);
  }

  const onRemove = (file: any) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  }

  return (
    <NewDashboardLayout>
      <div>
        <ModalWithChildren openModal={openAddDialog} onOk={() => setOpenAddDialog(false)}
          onCancel={() => setOpenAddDialog(false)} title={"Create New Variation"}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Type EN"
              name="en"
              rules={[{ required: true, message: 'Please fill type in EN!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Type AR"
              name="ar"
              rules={[{ required: true, message: 'Please fill type in AR!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={'order'} label='Order'>
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Parent Category"
              name="parent_id"
            >
              <Select
                placeholder="Select Category Parent"
                allowClear
              >
                {selectParentMenuItems}
              </Select>
            </Form.Item>
            <Form.Item
              label="Opposite Category"
              name="opposite_category_id"
            >
              <Select
                placeholder="Select Opposite Category"
                allowClear
              >
                {selectParentMenuItems}
              </Select>
            </Form.Item>
            <Form.Item
              label="Category Image"
              name="images"
              valuePropName='images'
            >
              <Upload listType="picture-card" onRemove={onRemove} onChange={(e) => onChangeHandler(e)}>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="default" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </ModalWithChildren>

        <Button onClick={() => setOpenAddDialog(true)}>create new record</Button>
        <Divider />
        <AntDesignDataTable columns={columns} rowKey={"id"} dataSource={categories} rowClassName={rowClassName} />
      </div>
    </NewDashboardLayout>
  )
}
