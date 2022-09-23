import React, {useState} from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Variation, VariationTypes, VariationTypesValues} from "../../types/VariationType";
import {Button as PrimeButton} from "primereact/button";
import CreateProductVariation from "../../Pages/Dashboard/variations/create";
import {usePage} from "@inertiajs/inertia-react";
import ToggleRestoreDeleteButton from "../Forms/Buttons/ToggleDeleteRestoreButton";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import DeleteConfirmDialog from "../client/shards/DeleteConfirmDialog";
import AntDesignDataTable from "../DataTables/AntDesignDataTable";
import {ColumnsType} from "antd/es/table";
import {Button, Table} from "antd";

interface Props {
  variations: Variation[]
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
  productId: number
}

interface DataType extends Variation {
  key?: string;
}

function VariationList({variations, variationTypesValues, variationTypes, productId}: Props) {
  const [expandedRows, setExpandedRows] = useState([]);
  const locale: string = usePage().props.locale as string
  const [openAddParentVariantDialog, setOpenAddParentVariantDialog] = useState(false);
  const [openAddChildVariationDialog, setOpenAddChildVariationDialog] = useState(false);
  const [confirmDeleteItemDialog, setConfirmDeleteItemDialog] = useState(false);
  const [parentId, setParentId] = useState(0);
  const [variationId, setVariationId] = useState(0);


  const handleOnClickAddVariationDialog = () => {
    setOpenAddParentVariantDialog(!openAddParentVariantDialog);
  };

  const AddChildVariationHandle = (data: any) => {
    setParentId(data.id)
    setOpenAddChildVariationDialog(!openAddChildVariationDialog)
  };

  const confirmDeleteProduct = (rawData: any) => {
    setConfirmDeleteItemDialog(true);
    setVariationId(rawData.id)
  }

  const handleOnClickVariationRestore = (data: any) => {
    Inertia.post(route('admin.variations.restore', data.id), undefined, {
      preserveState: false
    })
  };
  const handleOnClickVariationEdit = (data: any) => {
    Inertia.get(route('admin.variations.edit', data.id))
  };

  const handleOnClickVariationDelete = (data: any) => {
    Inertia.post(route('admin.variations.destroy', data.id), undefined, {
      preserveState: false
    })
  };

  const imageBodyTemplate = (rowData: any) => {
    if (rowData.media) {
      return (
        <img width={50}
             height={50} src={rowData.media[0 as keyof typeof rowData.media]?.thumbnail}
             alt={rowData.media[0 as keyof typeof rowData.media]?.name}/>
      )
    } else {
      return (
        <div>nothing to show</div>
      )
    }
  }

  const hideDeleteProductDialog = () => {
    setConfirmDeleteItemDialog(false);
  }

  const deleteConfirmed = () => {
    setConfirmDeleteItemDialog(false);
    Inertia.post(route('admin.variations.permanent.delete', variationId), undefined, {
      preserveState: false
    })
  }

  const actionVariationBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <ToggleRestoreDeleteButton handleOnClickRestore={handleOnClickVariationRestore}
                                   handleOnClickDelete={handleOnClickVariationDelete}
                                   params={rowData}/>

        <Button className="mr-2"
                onClick={() => AddChildVariationHandle(rowData)}>NEW</Button>

        <Button className="mr-2"
                onClick={() => handleOnClickVariationEdit(rowData)}>UPDATE</Button>

        <Button className="mr-2"
                onClick={() => confirmDeleteProduct(rowData)}>HARD DELETE</Button>
      </React.Fragment>
    );
  }

  const rowExpansionTemplate = (data: any) => {
    return (
      <Table columns={columns} rowKey={"id"} dataSource={data.children} pagination={false} scroll={{x : true}}/>
    );
  }



  const onCellEditComplete = (e: any) => {
    let {originalEvent: event, columnProps, rowData, newValue, field} = e;
    if (rowData[field] != newValue) {
      Inertia.post(route('admin.variations.update', rowData), {[field]: newValue}, {
        preserveState: false
      })
    }
  }

  const columns: ColumnsType<DataType> = [
    {title: 'ID', dataIndex: 'id', key: 'id'},
    {title: 'Image', dataIndex: 'image', key: 'media', render: (_, record) => imageBodyTemplate(record)},
    {
      title: 'Variation Type Value',
      dataIndex: 'variation_type_value',
      key: 'variation_type_value',
      render: (_, record) => <span>{record.variation_type_value?.value.en}</span>
    },
    {
      title: 'Variation Type',
      dataIndex: 'variation_type',
      key: 'variation_type',
      render: (_, record) => <span>{record.variation_type?.type.en}</span>
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: 'Deleted at',
      dataIndex: 'deleted_at',
      key: 'deleted_at',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (_, record) => actionVariationBodyTemplate(record),
    },
  ];

  return (
    <div>
      <Button onClick={handleOnClickAddVariationDialog}>ADD NEW VARIATION</Button>
      <CreateProductVariation handleAddDialog={handleOnClickAddVariationDialog}
                              openAddDialog={openAddParentVariantDialog}
                              productId={productId} locale={locale} variationTypes={variationTypes}
                              variationTypesValues={variationTypesValues}/>

      <CreateProductVariation handleAddDialog={() => setOpenAddChildVariationDialog(false)}
                              openAddDialog={openAddChildVariationDialog}
                              parentId={parentId}
                              productId={productId} locale={locale} variationTypes={variationTypes}
                              variationTypesValues={variationTypesValues}/>
      <Table columns={columns} rowKey={"id"} dataSource={variations}
             expandable={{expandedRowRender: (record) => rowExpansionTemplate(record)}} scroll={{x : true}}/>
    </div>
  )

}

export default VariationList;
