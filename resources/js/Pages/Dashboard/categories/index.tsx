import React, {useState} from 'react'
import {ColDef} from 'ag-grid-community';
import {Category} from '../../../types/products';
import {Button, DialogActions, InputLabel, MenuItem, Select, TextField} from '@mui/material';
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
  categories: Array<Category>
  locale: string
}

interface IFormProps {
  parent_id?: string,
  en: string,
  ar: string,
  images: string
}

export default function CategoryIndex({categories, locale}: Props) {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormProps>()
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(0);

  const handleAddDialog = () => {
    setOpenAddDialog(!openAddDialog);
  };

  const handleOnClickUpdateDialog = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    Inertia.get(route('admin.categories.edit', data.id))
  };

  const handleOnClickDelete = (event: React.MouseEvent<HTMLElement>, {data}: any) => {
    setCurrentCategoryId(data.id)
    setOpenDeleteDialog(true)
  };

  const handleDeleteClose = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setOpenDeleteDialog(false);
  };

  const handleAgreeDelete = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    Inertia.post(route('admin.categories.destroy', currentCategoryId))
    setOpenDeleteDialog(false);
  };


  const columns: ColDef[] = [
    {field: 'id', headerName: 'ID'},
    {field: `title.ar`, headerName: 'Title AR', floatingFilter: true, flex: 1, cellClass: 'font-bold'},
    {field: `title.en`, headerName: 'Title EN', floatingFilter: true, flex: 1, cellClass: 'font-bold'},
    {field: `parent.title.${locale}`, headerName: 'Parent', floatingFilter: true, cellClass: 'font-bold'},
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
    Inertia.post(route('admin.categories.store'), resolveData)
    reset()
  }
  const selectParentMenuItems = categories.map((category) => (
    <MenuItem value={category.id} key={category.id}>{category.title.en}</MenuItem>
  ))

  return (
    <DashboardLayout>
      <div>
        <div id='add'>
          <Button className="absolute top-3 lg:left-24" variant={'contained'} onClick={handleAddDialog}>Add
            Category</Button>
          <FormDialog btnLabel='Add Category' header='Create New Category' handleClose={handleAddDialog}
                      open={openAddDialog}>
            <form onSubmit={handleSubmit(formAddSubmitHandler)}>
              <InputLabel id="demo-simple-select-standard-label" margin='dense'>Choose Parent <small>(optional)</small></InputLabel>
              <Select
                {...register('parent_id')}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Select Parent Category"
                margin="dense"
                name='parent_id'
                fullWidth
                autoFocus
              >
                <MenuItem value={''}>No Parent</MenuItem>
                {selectParentMenuItems}
              </Select>
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
        <DataGrid<Category>
          gridData={categories}
          colDef={columns}
          size={{height: '90vh', width: 'auto'}}
        />
      </div>
    </DashboardLayout>
  )
}
