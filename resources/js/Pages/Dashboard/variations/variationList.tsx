import React, {useState} from 'react';
import {ColDef} from "ag-grid-community";
import {Button} from "@mui/material";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import DataGrid from "../../../components/DataTables/DataGrid";
import {Variation} from "../../../types/VariationType";
import CreateProductVariation from "./create";

interface Props {
  variations: Variation[];
  locale: string
  productId: number
}

function VariationList({variations, locale, productId}: Props) {
  console.log(variations)
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const ToggleRestoreDeleteButton = (params: any) => {
    if (params.data.deleted_at) {
      return (
        <Button color={'success'} onClick={event => handleOnClickRestore(event, params)}>Restore</Button>
      )
    } else {
      return (
        <Button color={'secondary'} onClick={event => handleOnClickDelete(event, params)}>Delete</Button>
      )
    }
  }
  const handleOnClickUpdateDialog = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    Inertia.get(route('admin.variations.edit', data.id))
  };
  const handleOnClickDelete = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    Inertia.post(route('admin.variations.destroy', data.id), undefined, {
      preserveState: false
    })
  };
  const handleOnClickRestore = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    Inertia.post(route('admin.variations.restore', data.id), undefined, {
      preserveState: false
    })
  };

  const handleOnClickAddSProductDialog = () => {
    setOpenAddDialog(!openAddDialog);
  };

  const columns: ColDef[] = [
    {
      field: 'thumbnail',
      headerName: 'Image', cellRenderer: (params: any) =>
        <img className='mx-auto mt-[4px]' src={params.data.thumbnail} alt={params.data.name} width={50}
             height={50}/>
    },
    {field: 'id', headerName: 'ID'},
    {field: `title.en`, headerName: 'Title EN', floatingFilter: true, flex: 0.5, cellClass: 'font-bold'},
    {field: `title.ar`, headerName: 'Title AR', floatingFilter: true, flex: 0.5, cellClass: 'font-bold'},
    {field: `price`, headerName: 'Price'},
    {field: `deleted_at`, headerName: 'Deleted at'},
    {field: 'created_at', headerName: 'Created At', filter: 'agDateColumnFilter', floatingFilter: true},
    {
      headerName: 'Actions', cellRenderer: (params: any) =>
        <div>
          {ToggleRestoreDeleteButton(params)}
          <Button onClick={event => handleOnClickUpdateDialog(event, params)}>UPDATE</Button>
        </div>
    }
  ]

  return (
    <main className="bg-white shadow-md">
      <Button color="success" variant='contained'
              onClick={handleOnClickAddSProductDialog}>add variation</Button>
      <DataGrid<Variation> gridData={variations} colDef={columns} size={{height: '90vh', width: 'auto'}}
                           rowHeight={60}/>
      <CreateProductVariation handleAddDialog={handleOnClickAddSProductDialog} openAddDialog={openAddDialog} productId={productId}/>
    </main>
  );
}

export default VariationList;
