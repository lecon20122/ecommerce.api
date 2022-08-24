import React, {useState} from 'react';
import {ProductWithThumbnail} from "../../types/products";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import PrimeDataTable from "../DataTables/PrimeDataTable";
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Button as PrimeButton} from 'primereact/button';
import ToggleRestoreDeleteButton from "../Forms/Buttons/ToggleDeleteRestoreButton";
import CreateProductVariation from "../../Pages/Dashboard/variations/create";

interface Props {
  products: ProductWithThumbnail[];
  locale: string
}

function ProductList({products, locale}: Props) {
  const [expandedRows, setExpandedRows] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const handleOnClickAddSProductDialog = () => {
    setOpenAddDialog(!openAddDialog);
  };

  const newHandleUpdate = (data: any) => {
    Inertia.get(route('admin.products.edit', data.id))

  };
  const handleOnClickVariationDelete = (data: any) => {
    Inertia.post(route('admin.variations.destroy', data.id), undefined, {
      preserveState: false
    })
  };
  const handleOnClickVariationRestore = (data: any) => {
    Inertia.post(route('admin.variations.restore', data.id), undefined, {
      preserveState: false
    })
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

  const imageBodyTemplate = (rowData: any) => {
    return <img width={50}
                height={50} src={rowData.thumbnail}/>
  }

  const rowExpansionTemplate = (data: any) => {
    return (
      <div>
        <DataTable value={data.variations} responsiveLayout="scroll" header={options => header(data.id)}>
          <Column field="id" header="ID" sortable/>
          <Column header="Image" body={imageBodyTemplate}/>
          <Column field="title.en" header="Title EN" sortable/>
          <Column field="title.ar" header="Title AR" sortable/>
          <Column field="price" header="Price" sortable/>
          <Column field="type" header="type" sortable/>
          <Column field="order" header="Order" sortable/>
          <Column field="deleted_at" header="Deleted At" sortable/>
          <Column body={actionVariationBodyTemplate} exportable={false} style={{minWidth: '8rem'}}/>
        </DataTable>
      </div>
    );
  }

  const header = (value: any) => {
    return (
      <div className='flex items-center'>
        <PrimeButton className='p-button-link' onClick={handleOnClickAddSProductDialog}>
          Add Variation
        </PrimeButton>
        <h1 className='font-bold ml-3 text-lg'>Variations List</h1>
        <CreateProductVariation handleAddDialog={handleOnClickAddSProductDialog} openAddDialog={openAddDialog}
                                productId={value}/>
      </div>
    )
  }


  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <ToggleRestoreDeleteButton handleOnClickRestore={handleOnClickRestore} handleOnClickDelete={handleOnClickDelete}
                                   params={rowData}/>
        <PrimeButton icon="pi pi-pencil" className="p-button p-button-success mr-2"
                     onClick={() => newHandleUpdate(rowData)}/>
      </React.Fragment>
    );
  }
  const actionVariationBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <ToggleRestoreDeleteButton handleOnClickRestore={handleOnClickVariationRestore}
                                   handleOnClickDelete={handleOnClickVariationDelete}
                                   params={rowData}/>
        <PrimeButton icon="pi pi-pencil" className="p-button p-button-success mr-2"
                     onClick={() => newHandleUpdate(rowData)}/>
      </React.Fragment>
    );
  }

  return (
    <main className="bg-white shadow-md rounded">
      <PrimeDataTable data={products} rowExpansionTemplate={rowExpansionTemplate} expandedRows={expandedRows}
                      onRowToggle={(e) => setExpandedRows(e.data as any)}>
        <Column expander style={{width: '3em'}}/>
        <Column field="id" header="ID" sortable/>
        <Column header="Image" body={imageBodyTemplate}/>
        <Column field="title.en" header="Title EN" sortable/>
        <Column field="title.ar" header="Title AR" sortable/>
        <Column field="price" header="Price" sortable/>
        <Column field="deleted_at" header="Deleted At" sortable/>
        <Column body={actionBodyTemplate} exportable={false} style={{minWidth: '8rem'}}/>
      </PrimeDataTable>
    </main>
  );
}

export default ProductList;
