import React, {useState} from 'react'
import {User} from '../../../types/auth';
import {ColDef} from 'ag-grid-community';
import DataGrid from "../../../components/DataTables/DataGrid";
import {Button} from "@mui/material";
import CreateStore from "../stores/create";
import DashboardLayout from "../../../layouts/dashboard";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";

interface Props {
  users: User[]
}

interface IFormProps {
  name: string
  description: string
  user_id: number
}


export default function index({users}: Props) {
  const form = useForm<IFormProps>()
  const {register, handleSubmit, formState: {errors}, setValue, reset} = form

  const [userId, setUserId] = useState(0)
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleAddDialog = () => {
    setOpenAddDialog(!openAddDialog);
  };

  const handleOnClickAddStoreDialog = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    setValue('user_id',data.id)
    handleAddDialog()
  };

  const formAddSubmitHandler: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    Inertia.post(route('admin.stores.store'), resolveData)
    reset()
  }

  const columns: ColDef[] = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: 'Name', floatingFilter: true, flex: 1},
    {field: 'created_at', headerName: 'Join Date'},
    {field: 'status', headerName: 'Status'},
    {
      headerName: 'Actions', cellRenderer: (params: any) =>
        <Button color='success' variant={'outlined'} onClick={event => handleOnClickAddStoreDialog(event, params)}>Add
          Store</Button>
    }
  ]
  return (
    <DashboardLayout>
      <div>
        <FormProvider {...form}>
          <input{...register('user_id')} hidden/>
          <CreateStore user_id={userId} handleAddDialog={handleAddDialog} openAddDialog={openAddDialog}
                       formAddSubmitHandler={formAddSubmitHandler}/>
        </FormProvider>
        <DataGrid<User>
          gridData={users}
          colDef={columns}
          size={{height: '90vh', width: 'auto'}}
        />
      </div>
    </DashboardLayout>
  )
}
