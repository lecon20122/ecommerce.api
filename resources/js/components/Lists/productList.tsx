import React, {useState} from 'react';
import {ProductWithThumbnail} from "../../types/products";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import PrimeDataTable from "../DataTables/PrimeDataTable";
import {Column} from "primereact/column";
import {Button as PrimeButton} from 'primereact/button';
import ToggleRestoreDeleteButton from "../Forms/Buttons/ToggleDeleteRestoreButton";
import {VariationTypes, VariationTypesValues} from "../../types/VariationType";
import VariationList from "./VariationList";

interface Props {
  products: ProductWithThumbnail[];
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
  locale: string
}

function ProductList({products, locale, variationTypesValues, variationTypes}: Props) {
  const [expandedRows, setExpandedRows] = useState([]);

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

  const imageBodyTemplate = (rowData: any) => {
    if (rowData.media) {
      return (
        <img width={50}
             height={50} src={rowData.media[0 as keyof typeof rowData.media]?.thumbnail}/>
      )
    } else {
      return (
        <div>nothing to show</div>
      )
    }
  }

  const rowExpansionTemplate = (data: any) => {
    return (
      <VariationList variations={data.variations} variationTypes={variationTypes}
                     variationTypesValues={variationTypesValues} productId={data.id}/>
    );
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

  return (
    <main className="bg-white shadow-md rounded">
      <PrimeDataTable data={products}>
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
