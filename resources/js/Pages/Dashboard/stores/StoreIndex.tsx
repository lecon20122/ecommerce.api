import React, { useState } from 'react'
import route from 'ziggy-js';
import { Inertia, } from '@inertiajs/inertia';
import { Store } from "../../../types/globalTypes";
import AntDesignDataTable from "../../../components/DataTables/AntDesignDataTable";
import { ColumnsType } from "antd/es/table";
import { Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import NewDashboardLayout from '../../../layouts/new-dashboard-layout';

interface Props {
  stores: Array<Store>
  locale: string
}

interface DataType extends Store {
  key?: string;
}

export default function StoreIndex({ stores, locale }: Props) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentStoreId, setCurrentStoreId] = useState(0);


  const handleOnClickUpdateDialog = (storeId: any) => {
    Inertia.get(route('admin.stores.edit', { id: storeId }))
  };

  const handleOnClickDelete = (data: any) => {
    setCurrentStoreId(data.id)
    setOpenDeleteDialog(true)
  };

  const handleDeleteClose = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setOpenDeleteDialog(false);
  };

  const handleAgreeDelete = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    Inertia.post(route('admin.products.destroy', currentStoreId), {
      preserveState: false
    })
    setOpenDeleteDialog(false);
  };

  const handleOnClickApprove = (data: DataType) => {
    Inertia.post(route('admin.stores.approve', data.id), {
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
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'description',
      title: 'Description',
      dataIndex: 'description',
    },
    {
      key: 'user',
      title: 'Store Owner',
      dataIndex: 'user',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.user?.name}</span> | <span>{record.user?.email}</span>
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={(e) => handleOnClickUpdateDialog(record.id)} />
          <Button onClick={event => handleOnClickApprove(record)} className={record.approved_at ? 'text-red-500' : 'text-green-500'}>
            {record.approved_at ? 'Disable' : 'Approve'}
          </Button>
        </Space>
      ),
    },
  ]


  return (
    <NewDashboardLayout>
      <div>
          <AntDesignDataTable columns={columns} rowKey={"id"} dataSource={stores} />
      </div>
    </NewDashboardLayout>
  )
}
