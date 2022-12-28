import React, {useState} from 'react';
import {VariationTypes, VariationTypesValues} from "../../../types/VariationType";
import {ColumnsType} from "antd/es/table";
import {Button, Divider, Form, Input, Select, Space, Table} from "antd";
import DashboardLayout from "../../../layouts/dashboard";
import ModalWithChildren from "./ModalWithChildren";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";

interface DataType extends VariationTypesValues {
  key?: string;
}

interface Props {
  currentVariationType: VariationTypes
  locale: string
}

function VariationTypeValueIndex({currentVariationType, locale}: Props) {

  const [openModal, setOpenModal] = useState(false);
  const [openUpdateValueModal, setOpenUpdateValueModal] = useState(false);
  const [currentVariationValue, setCurrentVariationValue] = useState<VariationTypesValues>();

  const onUpdate = (values: VariationTypesValues) => {
    console.log(values)
    setOpenUpdateValueModal(true)
    setCurrentVariationValue(values)
  }

  const onDelete = (id: number) => {
    Inertia.post(route('admin.variations.type.value.destroy', id), undefined, {
      preserveState: false
    })
  }

  const onFinish = (values: any) => {
    Inertia.post(route('admin.variations.type.value.store'), values, {
      preserveState: false
    })
  };

  const onUpdateFinish = (values: any) => {
    Inertia.post(route('admin.variations.type.value.update', {id: values.id}), values, {
      preserveState: false
    })
  }

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'value',
      title: 'Value',
      dataIndex: 'value',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.value[locale as keyof typeof record.value]}</span>
        </Space>
      ),
    },
    {
      key: 'hex_color',
      title: 'Hex color',
      dataIndex: 'hex_color',
      render: (_, record) => (
        <Space size="middle">
          <span className={'font-bold'} style={{color: record.hex_value}}>{record.hex_value}</span>
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={(e) => onUpdate(record)}/>
          <DeleteOutlined onClick={(e) => onDelete(record.id)}/>
        </Space>
      ),
    },
  ]

  return (
    <DashboardLayout>
      <div className={'container mx-auto py-4'}>

        <ModalWithChildren openModal={openModal} onOk={() => setOpenModal(false)}
                           onCancel={() => setOpenModal(false)}>
          <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onFinish}
          >
            <Form.Item
              label="Value EN"
              name="en"
              rules={[{required: true, message: 'Please fill value in EN!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              hidden
              label="variation_type_id"
              name="variation_type_id"
              initialValue={currentVariationType.id}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Value AR"
              name="ar"
              rules={[{required: true, message: 'Please fill value in AR!'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Hex Value"
              hidden={currentVariationType.type.en === 'size'}
              name="hex_value"
              rules={[{required: true, message: 'fill the color hex value'}]}
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

        <ModalWithChildren openModal={openUpdateValueModal} onOk={() => setOpenUpdateValueModal(false)}
                           onCancel={() => setOpenUpdateValueModal(false)}>
          <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onUpdateFinish}
          >
            <Form.Item
              label="Value EN"
              name="en"
              initialValue={currentVariationValue?.value.en}
              rules={[{required: true, message: 'Please fill value in EN!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              hidden
              label="id"
              name="id"
              initialValue={currentVariationValue?.id}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Value AR"
              initialValue={currentVariationValue?.value.ar}
              name="ar"
              rules={[{required: true, message: 'Please fill value in AR!'}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Hex Value"
              hidden={currentVariationType.type.en === 'size'}
              initialValue={currentVariationValue?.hex_value}
              name="hex_value"
              rules={[{required: true, message: 'fill the color hex value'}]}
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
        <Button onClick={() => setOpenModal(true)}>create new record</Button>
        <Divider/>

        <Table rowKey="id" columns={columns} dataSource={currentVariationType.variationTypeValues}/>
      </div>
    </DashboardLayout>
  );
}

export default VariationTypeValueIndex;
