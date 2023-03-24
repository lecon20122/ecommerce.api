import React from 'react'
import NewDashboardLayout from '../../../layouts/new-dashboard-layout';
import { ByPass } from '../../../types/globalTypes';
import { ColumnsType } from 'antd/es/table';
import AntDesignDataTable from '../../../components/DataTables/AntDesignDataTable';
import { Button, Form, Input, Select } from 'antd';
import ModalWithChildren from '../variations/ModalWithChildren';
import { RolesEnum } from '../../../Enums/RolesEnum';
import { Inertia } from '@inertiajs/inertia';
import route from 'ziggy-js';


interface IProps {
  bypasses: ByPass[]
}

interface DataType extends ByPass {
  key?: string;
}

export default function ByPassesIndex({ bypasses }: IProps) {

  const [openModal, setOpenModal] = React.useState(false)

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
    },
    {
      key: 'expires_at',
      title: 'Expires At',
      dataIndex: 'expires_at',
    },
    {
      key: 'created_at',
      title: 'Created At',
      dataIndex: 'created_at',
    },
    {
      key: 'action',
      title: 'Action',
      dataIndex: 'action',
      render: (text: any, record: any) => (
        <Button onClick={() => deleteByPass(record.id)}>Delete</Button>
      )
    }
  ]

  const onFinish = (values: any) => {
    Inertia.post(route('admin.bypasses.store'), values, {
      preserveState: false
    })
  }

  const deleteByPass = (id: number) => {
    Inertia.delete(route('admin.bypasses.destroy', id), {
      preserveState: false
    })
  }

  return (
    <NewDashboardLayout>
      <Button className='my-3' onClick={() => setOpenModal(true)}>
        Create New Bypass
      </Button>
      <ModalWithChildren openModal={openModal} onCancel={() => setOpenModal(false)} onOk={() => setOpenModal(false)}>
        <h1 className='text-2xl font-bold'>Create New Bypass</h1>
        <Form className='py-8' onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true }]}>
            <Input type="email" placeholder='Email' />
          </Form.Item>
          <Form.Item name="role" rules={[{ required: true }]}>
            <Select>
              <Select.Option value={RolesEnum.SUPER_ADMIN}>{RolesEnum.SUPER_ADMIN}</Select.Option>
              <Select.Option value={RolesEnum.MARKETING}>{RolesEnum.MARKETING}</Select.Option>
              <Select.Option value={RolesEnum.CUSTOMER_SERVICE}>{RolesEnum.CUSTOMER_SERVICE}</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="expires_at">
            <Input type="date" placeholder="Expires At" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ModalWithChildren>
      <AntDesignDataTable rowKey={"id"} columns={columns} dataSource={bypasses} />
    </NewDashboardLayout>
  )
}
