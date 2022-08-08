import React, {useState} from 'react'
import {ColDef} from 'ag-grid-community';
import {Product} from '../../../types/products';
import {Button, DialogActions, TextField} from '@mui/material';
import FormDialog from '../../shards/formDialog';
import DashboardLayout from '../../../layouts/dashboard';
import DataGrid from '../../../components/DataTables/DataGrid';
import route from 'ziggy-js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SubmitHandler, useForm,} from 'react-hook-form';
import {Inertia,} from '@inertiajs/inertia';
import {faFileImage} from '@fortawesome/free-regular-svg-icons';
import ConfirmationAlertDialog from '../../../components/shards/confimationDialog';


interface Props {
  products: Array<Product>
  locale: string
}

interface IFormProps {
  en: string,
  ar: string,
  description: string
  price: number
  images: string
}

export default function CategoryIndex({products, locale}: Props) {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormProps>()
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(0);

  const handleAddDialog = () => {
    setOpenAddDialog(!openAddDialog);
  };

  const handleOnClickUpdateDialog = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    Inertia.get(route('admin.products.edit', data.id))
  };

  const handleOnClickDelete = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    setCurrentCategoryId(data.id)
    setOpenDeleteDialog(true)
  };

  const handleDeleteClose = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setOpenDeleteDialog(false);
  };

  const handleAgreeDelete = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    Inertia.post(route('admin.products.destroy', currentCategoryId))
    setOpenDeleteDialog(false);
  };


  const columns: ColDef[] = [
    {field: 'id', headerName: 'ID'},
    {field: `title.ar`, headerName: 'Title AR', floatingFilter: true, flex: 1, cellClass: 'font-bold'},
    {field: `title.en`, headerName: 'Title EN', floatingFilter: true, flex: 1, cellClass: 'font-bold'},
    // {field: `parent.title.${locale}`, headerName: 'Parent', floatingFilter: true, cellClass: 'font-bold'},
    {field: 'created_at', headerName: 'Created At', filter: 'agDateColumnFilter', floatingFilter: true},
    {
      headerName: 'Actions', cellRenderer: (params: any) =>
        <div>
          <Button onClick={event => handleOnClickUpdateDialog(event, params)}>UPDATE</Button>
          <Button color='error' onClick={event => handleOnClickDelete(event, params)}>delete</Button>
        </div>
    }
  ]

  const formAddSubmitHandler: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    Inertia.post(route('admin.products.store'), resolveData)
    reset()
  }

  return (
    <DashboardLayout>
      <div>
        <div id='add'>
          <Button className="absolute top-3 lg:left-24" variant={'contained'} onClick={handleAddDialog}>Add
            Category</Button>
          <FormDialog btnLabel='Add Category' header='Create New Category' handleClose={handleAddDialog}
                      open={openAddDialog}>
            <form onSubmit={handleSubmit(formAddSubmitHandler)}>
              <TextField
                {...register("en")}
                autoFocus
                margin="dense"
                id="en"
                name='en'
                label="Category Title EN"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                {...register("ar")}
                autoFocus
                margin="dense"
                id="ar"
                name='ar'
                label="Category Title AR"
                type="text"
                fullWidth
                variant="outlined"
              />
              <Button
                variant="outlined"
                component="label"
              >
                <FontAwesomeIcon icon={faFileImage}/> <span className='ml-2'>add Image</span>
                <input
                  {...register('images')}
                  type="file"
                  multiple
                  name='images'
                  hidden
                />
              </Button>
              <DialogActions>
                <Button type='submit' color="primary" variant='contained'>Submit</Button>
              </DialogActions>
            </form>
          </FormDialog>
        </div>
        < ConfirmationAlertDialog open={openDeleteDialog} handleClose={handleDeleteClose}
                                  handleAgree={handleAgreeDelete}/>
        <DataGrid<Product>
          gridData={products}
          colDef={columns}
          size={{height: '90vh', width: 'auto'}}
        />
      </div>
    </DashboardLayout>
  )
}