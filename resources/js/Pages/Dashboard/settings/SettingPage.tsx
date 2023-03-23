import React, {  useState } from 'react';
import { Button, Divider, Form, Input, Space, Table } from "antd";
import { Setting } from "../../../types/VariationType";
import { ColumnsType } from "antd/es/table";
import ModalWithChildren from "../variations/ModalWithChildren";
import { Inertia } from "@inertiajs/inertia";
import route from "ziggy-js";
import { EditOutlined } from "@ant-design/icons";
import NewDashboardLayout from '../../../layouts/new-dashboard-layout';
import AntDesignDataTable from '../../../components/DataTables/AntDesignDataTable';

interface DataType extends Setting {
  key?: string;
}

interface Props {
  settings: Setting[],
  locale: string
}

function SettingPage({ settings, locale }: Props) {
  // const NewDashboardLayout = lazy(() => import('../../../layouts/new-dashboard-layout'));
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateValueModal, setOpenUpdateValueModal] = useState(false);
  const [currentSetting, setCurrentSetting] = useState<Setting>();

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'key',
      title: 'Key',
      dataIndex: 'name',
    },
    {
      key: 'value',
      title: 'Value',
      dataIndex: 'value',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={(e) => onUpdate(record)} />
          {/*<DeleteOutlined onClick={(e) => onDelete(record.id)}/>*/}
          {/*<ImageUploadManually param={record.image} buttonLabel={'Upload Images'}*/}
          {/*                     listType="picture"*/}
          {/*                     className={'flex justify-content items-center'}*/}
          {/*                     btnClassName={'mt-0'}*/}
          {/*                     routeName={'admin.add.color.image.to.variation.type.value'} multiple={false}/>*/}
        </Space>
      ),
    },
  ]

  const onCreateFinish = (values: any) => {
    Inertia.post(route('admin.store.settings'), values, {
      preserveState: false
    })
  };

  const onUpdate = (values: Setting) => {
    setOpenUpdateValueModal(true)
    setCurrentSetting(values)
  }

  const onUpdateFinish = (values: any) => {
    Inertia.post(route('admin.update.settings', { setting: currentSetting as any }), values, {
      preserveState: false
    })
  }

  return (
      <NewDashboardLayout>
        <div className={''}>
          <ModalWithChildren openModal={openModal} onOk={() => setOpenModal(false)}
            onCancel={() => setOpenModal(false)}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              onFinish={onCreateFinish}
            >
              <Form.Item
                label="Key"
                name="key"
                rules={[{ required: true, message: 'Please fill the key please' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Value"
                name="value"
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
          <ModalWithChildren openModal={openUpdateValueModal} onOk={() => setOpenUpdateValueModal(false)}
            onCancel={() => setOpenUpdateValueModal(false)}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              onFinish={onUpdateFinish}
            >
              <Form.Item
                label="Key"
                initialValue={currentSetting?.name}
                name="key"
                rules={[{ required: true, message: 'Please fill the key please' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Value"
                name="value"
                initialValue={currentSetting?.value}
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
          <Button onClick={() => setOpenModal(true)}>create new record</Button>
          <Divider />
          <AntDesignDataTable rowKey="id" columns={columns} dataSource={settings} />
        </div>
      </NewDashboardLayout>
  );
}

export default SettingPage
