import React, { useState } from 'react'
import NewDashboardLayout from '../../../layouts/new-dashboard-layout'
import { Title } from '../../../types/CategoryType';
import { AdminVariation } from '../../../types/VariationType';
import { ProductDescription, Store } from '../../../types/globalTypes';
import Table, { ColumnsType } from 'antd/es/table';
import { Button, Checkbox, Popconfirm, Radio, Tag } from 'antd';
import { Link } from '@inertiajs/inertia-react';
import route from 'ziggy-js';
import { Inertia } from '@inertiajs/inertia';

export interface AdminProduct {
  id: number;
  title: Title;
  price: number;
  description: ProductDescription[];
  variations: AdminVariation[]
  store: Store
  discount: {
    id: number;
    product_id: number;
    type: string;
    value: number;
    start_at: string;
    end_at: string;
    is_active: boolean;
  }
  is_approved: boolean;
  status: string;
  created_at: string;
  updated_at: string;
  store_id: number;
}

interface DataType extends AdminProduct {
  key?: string;
}

interface Props {
  products: AdminProduct[]
}
export default function ProductAdminIndex({ products }: Props) {
  const [openPopconfirm, setOpenPopconfirm] = useState<Array<boolean>>([])

  console.log('====================================');
  console.log(products);
  console.log('====================================');

  const onApproveConfirm = (id: number) => {
    Inertia.post(route('admin.products.approve', { id }), {}, {
      preserveScroll: true,
    })
  }

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'title',
      title: 'Info',
      dataIndex: 'title',
      render(value, record, index) {
        return (
          <div>
            <p className='text-md font-bold'>{record.store.name}</p>
            <p className='text-sm'>{value.en}</p>
            <p className='text-sm'>{value.ar}</p>
          </div>
        )
      },
    },
    {
      key: 'is_approved',
      title: 'Is Approved',
      dataIndex: 'is_approved',
      render(value, record, index) {
        return (
          <div>
            <Tag color={value ? 'green' : 'red'}>{value ? 'Approved' : 'Not Approved'}</Tag>
          </div>
        )
      },

    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className='flex space-x-2 rtl:space-x-reverse'>
          <Link href={route('admin.products.edit', { id: record.id })}>
            <Button className='btn btn-primary'>show</Button>
          </Link>
          <Popconfirm
            title="Title"
            description="Open Popconfirm with async logic"
            open={openPopconfirm[record.id]}
            onConfirm={(_event) => onApproveConfirm(record.id)}
            placement='bottomLeft'
            onCancel={(_event) => setOpenPopconfirm([])}
          >
            <Button onClick={() => setOpenPopconfirm(true)} className='bg-[#157050] text-white'>approve</Button>
          </Popconfirm>
        </div>
      ),
    },
  ]


  return (
    <NewDashboardLayout>
      <Table columns={columns} rowKey={"id"} dataSource={products} scroll={{ x: true }} />
    </NewDashboardLayout>
  )
}
