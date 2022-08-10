import React from 'react';
import {ProductWithThumbnail} from "../../types/products";
import {ColDef} from "ag-grid-community";
import {Button} from "@mui/material";
import DataGrid from "../DataTables/DataGrid";

interface Props {
  products: ProductWithThumbnail[];
  locale: string
}

function ProductList({products, locale}: Props) {

  const columns: ColDef[] = [
    {
      field: 'small_thumbnail',
      headerName: 'Image', cellRenderer: (params: any) =>
        <img className='mx-auto mt-[4px]' src={params.data.small_thumbnail} alt={params.data.name} width={50}
             height={50}/>
    },
    {field: 'id', headerName: 'ID'},
    {field: `title`, headerName: 'Title', floatingFilter: true, flex: 1, cellClass: 'font-bold'},
    {field: `price`, headerName: 'Price'},
    // {field: `parent.title.${locale}`, headerName: 'Parent', floatingFilter: true, cellClass: 'font-bold'},
    {field: 'created_at', headerName: 'Created At', filter: 'agDateColumnFilter', floatingFilter: true},
    {
      headerName: 'Actions', cellRenderer: (params: any) =>
        <div>
          <Button>UPDATE</Button>
          <Button color='error'>delete</Button>
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
