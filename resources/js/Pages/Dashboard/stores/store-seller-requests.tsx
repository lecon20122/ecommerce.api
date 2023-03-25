import React from 'react'
import NewDashboardLayout from '../../../layouts/new-dashboard-layout';
import { SellerRequest } from '../../../types/globalTypes';
import { Alert, Button, Descriptions, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import AntDesignDataTable from '../../../components/DataTables/AntDesignDataTable';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ModalWithChildren from '../variations/ModalWithChildren';
import { Inertia } from '@inertiajs/inertia';
import route from 'ziggy-js';
import { usePage } from '@inertiajs/inertia-react';

interface IProps {
  storeRequests: SellerRequest[],
}

interface DataType extends SellerRequest {
  key?: string;
}




export default function StoreSellerRequests({ storeRequests }: IProps) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState<DataType | null>(null);

  const serverSideErrors = usePage().props.errors

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'brand_name',
      title: 'Brand Name',
      dataIndex: 'brand_name',
    },
    {
      key: 'company_register',
      title: 'Company Register',
      dataIndex: 'company_register',
    },
    {
      key: 'user',
      title: 'Store Owner',
      dataIndex: 'user',
      rowSpan: 1,
    },
    {
      key: 'created_at',
      title: 'Created At',
      dataIndex: 'created_at',
    },
    {
      key: 'Actions',
      title: 'Actions',
      dataIndex: 'Actions',
      render: (_, record) => (
        <Space size="small">
          <span>{record.user?.name}</span> | <span>{record.user?.email}</span>
          <Button onClick={() => handleOnRowClick(record)}><FaEye /></Button>
          <Button onClick={() => approveStoreRequest(record.id)}>
            Approve
          </Button>
        </Space>
      )
    }
  ]

  const handleOnRowClick = (record: DataType) => {
    setSelectedRow(record);
    setModalVisible(true);
  }

  const approveStoreRequest = (id: number) => {
    Inertia.post(route('admin.seller.requests.approve'), { id: id }, {
      preserveState: false
    });
  }

  return (
    <NewDashboardLayout>
      <ModalWithChildren openModal={modalVisible} onCancel={() => setModalVisible(!modalVisible)} onOk={() => setModalVisible(!modalVisible)} >
        <Descriptions title="Store Request Info">
          <Descriptions.Item label="Brand Name">{selectedRow?.brand_name}</Descriptions.Item>
          <Descriptions.Item label="What he Sells">{selectedRow?.what_store_sells}</Descriptions.Item>
          <Descriptions.Item label="City">{selectedRow?.pickup_location?.district?.city?.name}</Descriptions.Item>
          <Descriptions.Item label="District">{selectedRow?.pickup_location?.district?.name}</Descriptions.Item>
          <Descriptions.Item label="Street">{selectedRow?.pickup_location?.street}</Descriptions.Item>
          <Descriptions.Item label="Building">{selectedRow?.pickup_location?.building}</Descriptions.Item>
        </Descriptions>
      </ModalWithChildren>
      {/* {serverSideErrors. && <span className='text-red-600'>{serverSideErrors.email}</span>} */}
      <AntDesignDataTable columns={columns} rowKey={"id"} dataSource={storeRequests} />
    </NewDashboardLayout>
  )
}
