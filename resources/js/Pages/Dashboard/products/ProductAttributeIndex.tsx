import React, {useState} from 'react';
import {ProductAttribute} from "../../../types/products";
import DashboardLayout from "../../../layouts/dashboard";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {ColumnsType} from "antd/es/table";
import {Button, Divider, Form, Input, Select, Space} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import ModalWithChildren from "../variations/ModalWithChildren";
import AntDesignDataTable from "../../../components/DataTables/AntDesignDataTable";
import ProductAttributeUpdateComponent
  from "../../../components/ProductAttributeUpdateComponent/ProductAttributeUpdateComponent";

interface Props {
  productAttributes: ProductAttribute[]
}

interface DataType extends ProductAttribute {
  key?: string;
}

function ProductAttributeIndex({productAttributes}: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [currentProductAttribute, setCurrentProductAttribute] = useState<ProductAttribute>({
    attribute: {en: '', ar: ''},
    id: 1,
    is_filterable: true
  });

  const onUpdate = async (record: ProductAttribute) => {
    setOpenUpdateModal(true)
    setCurrentProductAttribute(record)
  }

  const onDelete = (record: ProductAttribute) => {
    Inertia.post(route('admin.delete.attribute', {attribute: record}), undefined, {
      preserveState: false
    })
  }

  const onFinish = (values: any) => {
    Inertia.post(route('admin.add.attribute'), values, {
      preserveState: false
    })
  };

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'attribute',
      title: 'Attribute Name EN',
      dataIndex: 'attribute',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.attribute.en}</span>
        </Space>
      ),
    },
    {
      key: 'attribute',
      title: 'Attribute Name AR',
      dataIndex: 'attribute',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.attribute.ar}</span>
        </Space>
      ),
    },
    {
      key: 'is_filterable',
      title: 'Is Filterable',
      dataIndex: 'is_filterable',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.is_filterable ? "Yes" : "No"}</span>
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={(e) => onUpdate(record)}/>
          <DeleteOutlined onClick={(e) => onDelete(record)}/>
        </Space>
      ),
    },
  ]

  return (
    <DashboardLayout>
      <div className={'container mx-auto py-4'}>
        <Button onClick={() => setOpenModal(true)}>create new record</Button>
        <Divider/>
        <ModalWithChildren openModal={openModal} onOk={() => setOpenModal(false)}
                           onCancel={() => setOpenModal(false)} title={"Create New Product Attribute"}>
          <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Product Attribute EN"
              name="en"
              rules={[{required: true, message: 'Please fill Product Attribute in English!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Product Attribute AR"
              name="ar"
              rules={[{required: true, message: 'Please fill Product Attribute in Arabic!'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="filterable ?"
              name="is_filterable"
              rules={[{required: true, message: 'Please fill type in AR!'}]}
            >
              <Select
                placeholder="this type will have image ?"
                allowClear
              >
                <Select.Option value={true}>yes</Select.Option>
                <Select.Option value={false}>no</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
              <Button type="default" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </ModalWithChildren>
        <ProductAttributeUpdateComponent productAttribute={currentProductAttribute} setOpenModal={setOpenUpdateModal}
                                         openModal={openUpdateModal}/>
        <AntDesignDataTable columns={columns} rowKey={"id"} dataSource={productAttributes}/>
      </div>
    </DashboardLayout>
  );
}

export default ProductAttributeIndex;
