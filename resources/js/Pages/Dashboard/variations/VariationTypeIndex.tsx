import React, {useState} from 'react';
import {VariationTypes} from "../../../types/VariationType";
import {ColumnsType} from "antd/es/table";
import {Button, Divider, Form, Input, Select, Space, Table} from "antd";
import DashboardLayout from "../../../layouts/dashboard";
import ModalWithChildren from "./ModalWithChildren";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";

interface DataType extends VariationTypes {
  key?: string;
}

interface Props {
  variationTypes: VariationTypes[]
  locale: string
}

function VariationTypeIndex({variationTypes, locale}: Props) {

  const [openModal, setOpenModal] = useState(false);

  const onUpdate = (id: number) => {
    Inertia.get(route('admin.variations.type.edit', id))
  }

  const onDelete = (id: number) => {
    Inertia.get(route('admin.variations.type.destroy', id))
  }

  const onFinish = (values: any) => {
    Inertia.post(route('admin.variations.type.store'), values, {
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
      key: 'type',
      title: 'Type',
      dataIndex: 'type',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.type[locale as keyof typeof record.type]}</span>
        </Space>
      ),
    },
    {
      key: 'is_mediable',
      title: 'eligible for Image',
      dataIndex: 'is_mediable',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.is_mediable ? "Yes" : "No"}</span>
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={(e) => onUpdate(record.id)}/>
          <DeleteOutlined onClick={(e) => onDelete(record.id)}/>
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
                           onCancel={() => setOpenModal(false)}>
          <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Type EN"
              name="en"
              rules={[{required: true, message: 'Please fill type in EN!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Type AR"
              name="ar"
              rules={[{required: true, message: 'Please fill type in AR!'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Type AR"
              name="is_mediable"
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
        <Table rowKey="id" columns={columns} dataSource={variationTypes}/>
      </div>
    </DashboardLayout>
  );
}

export default VariationTypeIndex;
