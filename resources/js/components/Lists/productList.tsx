import React from 'react';
import {ProductWithThumbnail} from "../../types/products";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import ToggleRestoreDeleteButton from "../Forms/Buttons/ToggleDeleteRestoreButton";
import {VariationTypes, VariationTypesValues} from "../../types/VariationType";
import AntDesignDataTable from "../DataTables/AntDesignDataTable";
import {ColumnsType} from "antd/es/table";
import {Button, Space} from "antd";

interface Props {
  products: ProductWithThumbnail[];
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
  locale: string
}

interface DataType extends ProductWithThumbnail {
  key?: string;
}

function ProductList({products, locale, variationTypesValues, variationTypes}: Props) {

  const newHandleUpdate = (data: any) => {
    Inertia.get(route('admin.products.edit', data.id))
  };

  const handleOnClickDelete = (data: any) => {
    Inertia.post(route('admin.products.destroy', data.id), undefined, {
      preserveState: false
    })
  };
  const handleOnClickRestore = (data: any) => {
    Inertia.post(route('admin.products.restore', data.id), undefined, {
      preserveState: false
    })
  };

  const actionBodyTemplate = (rowData: any) => {
    return (
      <>
        <ToggleRestoreDeleteButton handleOnClickRestore={handleOnClickRestore} handleOnClickDelete={handleOnClickDelete}
                                   params={rowData}/>
        <Button
          className={'mr-2'}
          type={'default'}
          onClick={() => newHandleUpdate(rowData)}>
          UPDATE
        </Button>
      </>
    );
  }

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'title',
      title: 'Title EN',
      dataIndex: 'title',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.title.en}</span>
        </Space>
      ),
    },
    {
      key: 'title',
      title: 'Title AR',
      dataIndex: 'title',
      responsive: ['md'],
      render: (_, record) => (
        <Space size="middle">
          <span>{record.title.ar}</span>
        </Space>
      ),
    },
    {
      key: 'price',
      title: 'Price',
      dataIndex: 'price',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.price}</span>
        </Space>
      ),
    },
    {
      key: 'deleted_at',
      title: 'Deleted At',
      dataIndex: 'deleted_at',
      render: (_, record) => (
        <Space size="middle">
          <span>{record.deleted_at}</span>
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        actionBodyTemplate(record)
      ),
    },
  ]


  return (
    <main className="bg-white shadow-md rounded">
      <AntDesignDataTable columns={columns} rowKey={"id"} dataSource={products}/>
    </main>
  );
}

export default ProductList;
