import React, {useState} from 'react'
import {ColDef} from 'ag-grid-community';
import {Button} from '@mui/material';
import DashboardLayout from '../../../layouts/dashboard';
import DataGrid from '../../../components/DataTables/DataGrid';
import route from 'ziggy-js';
import {Inertia,} from '@inertiajs/inertia';
import ConfirmationAlertDialog from '../../../components/shards/confimationDialog';
import {Store} from "../../../types/globalTypes";
import CreateStore from "./create";

interface Props {
  stores: Array<Store>
  locale: string
}

export default function CategoryIndex({stores, locale}: Props) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentStoreId, setCurrentStoreId] = useState(0);


  const handleOnClickUpdateDialog = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    Inertia.get(route('admin.stores.edit', data.id))
  };

  const handleOnClickDelete = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    setCurrentStoreId(data.id)
    console.log(data.id)
    setOpenDeleteDialog(true)
  };

  const handleDeleteClose = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setOpenDeleteDialog(false);
  };

  const handleAgreeDelete = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    Inertia.post(route('admin.products.destroy', currentStoreId))
    setOpenDeleteDialog(false);
  };


  const columns: ColDef[] = [
    {field: 'id', headerName: 'ID'},
    {field: `name`, headerName: 'Name', floatingFilter: true, flex : 1},
    {field: `description`, headerName: 'Description'},
    {field: `user.name`, headerName: 'Owner'},
    {field: 'created_at', headerName: 'Created At', filter: 'agDateColumnFilter', floatingFilter: true},
    {
      headerName: 'Actions', cellRenderer: (params: any) =>
        <div>
          <Button onClick={event => handleOnClickUpdateDialog(event, params)}>UPDATE</Button>
          <Button color='error' onClick={event => handleOnClickDelete(event, params)}>delete</Button>
        </div>
    }
  ]

  return (
    <DashboardLayout>
      <div>
        < ConfirmationAlertDialog open={openDeleteDialog} handleClose={handleDeleteClose}
                                  handleAgree={handleAgreeDelete}/>
        <DataGrid<Store>
          gridData={stores}
          colDef={columns}
          size={{height: '90vh', width: 'auto'}}
        />
      </div>
    </DashboardLayout>
  )
}
