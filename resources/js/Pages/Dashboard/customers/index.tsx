import React, {useState} from 'react'
import {User} from '../../../types/auth';
import DashboardLayout from "../../../layouts/dashboard";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {ColumnsType} from "antd/es/table";
import {Button, Form, Input, Select, Space} from "antd";
import {EditOutlined, PlusOutlined} from "@ant-design/icons";
import AntDesignDataTable from "../../../components/DataTables/AntDesignDataTable";
import ModalWithChildren from "../variations/ModalWithChildren";

interface Props {
  users: User[],
  locale: string
}

interface DataType extends User {
  key?: string;
}


export default function index({users, locale}: Props) {


  const [userId, setUserId] = useState(0)
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleAddDialog = () => {
    setOpenAddDialog(!openAddDialog);
  };

  const handleOnClickAddStoreDialog = (userId: any) => {
    setUserId(userId)
    handleAddDialog()
  };

  const onFinish = (values: any) => {
    Inertia.post(route('admin.stores.store'), values, {
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
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'created_at',
      title: 'Join Date',
      dataIndex: 'created_at',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={(e) => handleOnClickAddStoreDialog(record.id)}>
          Add Store
        </Button>
      ),
    },
  ]


  return (
    <DashboardLayout>
      <div className='container mx-auto py-4'>
        <ModalWithChildren openModal={openAddDialog} onOk={() => setOpenAddDialog(false)}
                           onCancel={() => setOpenAddDialog(false)} title={"Add New Store"}>
          <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{required: true, message: 'Please fill store Name'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              hidden
              name="user_id"
              initialValue={userId}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Store Description"
              name="description"
              rules={[{required: true, message: 'Please fill Store Description', type: 'string'}]}
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
        <AntDesignDataTable columns={columns} rowKey={"id"} dataSource={users}/>
      </div>
    </DashboardLayout>
  )
}
