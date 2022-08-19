import React from 'react';
import {ProductWithThumbnail} from "../../types/products";
import {ColDef} from "ag-grid-community";
import {Button} from "@mui/material";
import DataGrid from "../DataTables/DataGrid";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";

interface Props {
  products: ProductWithThumbnail[];
  locale: string
}

function ProductList({products, locale}: Props) {
  console.log(products)

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
    Inertia.get(route('admin.products.edit', data.id))

  };
  const handleOnClickDelete = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    Inertia.post(route('admin.products.destroy', data.id), undefined, {
      preserveState: false
    })
  };
  const handleOnClickRestore = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    Inertia.post(route('admin.products.restore', data.id), undefined, {
      preserveState: false
    })
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
    <main className="bg-white shadow-md rounded">
      <DataGrid<ProductWithThumbnail> gridData={products} colDef={columns} size={{height: '90vh', width: 'auto'}}
                                      rowHeight={60}/>
    </main>
  );
}

export default ProductList;
