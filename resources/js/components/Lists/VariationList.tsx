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

interface Props {
  variations: Variation[]
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
  productId: number
}


function VariationList({variations, variationTypesValues, variationTypes, productId}: Props) {
  console.log(variations)
  const locale: string = usePage().props.locale as string
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const handleOnClickAddSProductDialog = () => {
    setOpenAddDialog(!openAddDialog);
  };

  const newHandleUpdate = (data: any) => {
    Inertia.get(route('admin.products.edit', data.id))

  };

  const header = (productId: any) => {
    return (
      <div className='flex items-center'>
        <PrimeButton className='p-button-link' onClick={handleOnClickAddSProductDialog}>
          Add Variation
        </PrimeButton>
        <h1 className='font-bold ml-3 text-lg'>Variations List</h1>
        <CreateProductVariation handleAddDialog={handleOnClickAddSProductDialog} openAddDialog={openAddDialog}
                                productId={productId} locale={locale} variationTypes={variationTypes}
                                variationTypesValues={variationTypesValues}/>
      </div>
    )
  }

  const handleOnClickVariationRestore = (data: any) => {
    Inertia.post(route('admin.variations.restore', data.id), undefined, {
      preserveState: false
    })
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
             height={50} src={rowData.media[0 as keyof typeof rowData.media]?.thumbnail}/>
      )
    } else {
      return (
        <div>nothing to show</div>
      )
    }
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
    <DataTable value={variations} responsiveLayout="scroll" header={options => header(productId)}>
      <Column field="id" header="ID" sortable/>
      <Column header="Image" body={imageBodyTemplate}/>
      <Column field="variation_type_value.value.en" header="Title EN" sortable/>
      <Column field="variation_type_value.value.ar" header="Title AR" sortable/>
      <Column field="price" header="Price" sortable/>
      <Column field="variation_type.type.en" header="type EN" sortable/>
      <Column field="variation_type.type.ar" header="type AR" sortable/>
      <Column field="order" header="Order" sortable/>
      <Column field="deleted_at" header="Deleted At" sortable/>
      <Column body={actionVariationBodyTemplate} exportable={false} style={{minWidth: '8rem'}}/>
    </DataTable>
  );
}

export default VariationList;
