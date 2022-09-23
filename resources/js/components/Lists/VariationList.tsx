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
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import DeleteConfirmDialog from "../client/shards/DeleteConfirmDialog";

interface Props {
  variations: Variation[]
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
  productId: number
}


function VariationList({variations, variationTypesValues, variationTypes, productId}: Props) {
  const [expandedRows, setExpandedRows] = useState([]);
  const locale: string = usePage().props.locale as string
  const [openAddParentVariantDialog, setOpenAddParentVariantDialog] = useState(false);
  const [openAddVariationDialog, setOpenAddVariationDialog] = useState(false);
  const [confirmDeleteItemDialog, setConfirmDeleteItemDialog] = useState(false);
  const [parentId, setParentId] = useState(0);
  const [variationId, setVariationId] = useState(0);


  const handleOnClickAddVariationDialog = () => {
    setOpenAddParentVariantDialog(!openAddParentVariantDialog);
  };

  const newHandleAdd = (data: any) => {
    setParentId(data.id)
    setOpenAddVariationDialog(!openAddVariationDialog)
  };

  const confirmDeleteProduct = (rawData: any) => {
    setConfirmDeleteItemDialog(true);
    setVariationId(rawData.id)
  }

  const header = (productId: any) => {
    return (
      <div className='flex items-center'>
        <PrimeButton className='p-button-link' onClick={handleOnClickAddVariationDialog}>
          Add Variation
        </PrimeButton>
        <h1 className='font-bold ml-3 text-lg'>Variations List</h1>
        {/*create Parent*/}
        <CreateProductVariation handleAddDialog={handleOnClickAddVariationDialog}
                                openAddDialog={openAddParentVariantDialog}
                                productId={productId} locale={locale} variationTypes={variationTypes}
                                variationTypesValues={variationTypesValues}/>
        {/* create Child notice  the parent_id */}
        <CreateProductVariation handleAddDialog={newHandleAdd} openAddDialog={openAddVariationDialog}
                                productId={productId} locale={locale} variationTypes={variationTypes}
                                variationTypesValues={variationTypesValues} parentId={parentId}/>
      </div>
    )
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
             height={50} src={rowData.media[0 as keyof typeof rowData.media]?.thumbnail} alt={rowData.media[0 as keyof typeof rowData.media]?.name}/>
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

        <PrimeButton icon="pi pi-plus" className="p-button p-button-success mr-2"
                     onClick={() => newHandleAdd(rowData)}/>

        <PrimeButton icon="pi pi-pencil" className="p-button p-button-info mr-2"
                     onClick={() => handleOnClickVariationEdit(rowData)}/>

        <PrimeButton icon="pi pi-times" className="p-button p-button-danger mr-2"
                     onClick={() => confirmDeleteProduct(rowData)}/>
      </React.Fragment>
    );
  }

  const rowExpansionTemplate = (data: any) => {
    return (
      <VariationList variations={data.children} variationTypes={variationTypes}
                     variationTypesValues={variationTypesValues} productId={productId}/>
    );
  }

  const textEditor = (options: any) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)}/>;
  }

  const cellEditor = (options: any) => {
    if (options.field === 'price')
      return priceEditor(options);
    else
      return textEditor(options);
  }

  const priceEditor = (options: any) => {
    return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency"
                        currency="EGP" locale="en-US"/>
  }

  const onCellEditComplete = (e: any) => {
    let {originalEvent: event, columnProps, rowData, newValue, field} = e;
    if (rowData[field] != newValue) {
      Inertia.post(route('admin.variations.update', rowData), {[field]: newValue}, {
        preserveState: false
      })
    }
  }

  return (
    <div className={'border border-x-sky-500 border-1'}>
      <DeleteConfirmDialog deleteItem={deleteConfirmed} hideDeleteProductDialog={hideDeleteProductDialog}
                           deleteItemDialog={confirmDeleteItemDialog}/>
      <DataTable value={variations} responsiveLayout="scroll"
                 editMode="cell"
                 header={(options) => header(productId)}
                 rowExpansionTemplate={rowExpansionTemplate} expandedRows={expandedRows}
                 onRowToggle={(e) => setExpandedRows(e.data as any)}>
        <Column expander style={{width: '3em'}}/>
        <Column field="id" header="ID" sortable/>
        <Column header="Image" body={imageBodyTemplate}/>
        <Column field="variation_type.type.en" header="type" sortable/>
        <Column field="variation_type_value.value.en" header="Title" sortable/>
        <Column field="price" header="Price" sortable editor={(options) => cellEditor(options)}
                onCellEditComplete={onCellEditComplete}/>
        <Column field="order" header="Order" sortable editor={(options) => cellEditor(options)}/>
        <Column field="deleted_at" header="Deleted At" sortable/>
        <Column body={actionVariationBodyTemplate} exportable={false} style={{minWidth: '8rem'}}/>
      </DataTable>
    </div>
  );
}

export default VariationList;
