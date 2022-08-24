import React, {useState} from 'react';
import {Autocomplete, Button, DialogActions, TextField} from "@mui/material";
import FormDialog from "../../shards/formDialog";
import {SubmitHandler, useForm, UseFormWatch} from "react-hook-form";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImage} from "@fortawesome/free-regular-svg-icons";


interface Props {
  handleAddDialog: () => void,
  openAddDialog: boolean
  watch: UseFormWatch<any>
}

interface IFormProps {
  ar: string
  en: string
  description: string
  price: number
  images: string
  store_id: number
}

export default function CreateProduct({handleAddDialog, openAddDialog, watch}: Props) {
  const [tags, setTags] = useState(['fashion']);
  const {register, handleSubmit, formState: {errors}, reset, setValue} = useForm<IFormProps>()
  const store_id: number = watch('store_id')

  const formAddSubmitHandler: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    console.log(data)
    Inertia.post(route('admin.products.store'), resolveData, {
      preserveState: false
    })
    reset()
  }

  return (
    <div id='add'>
      <FormDialog btnLabel='Add Product' header='Create New Product' handleClose={handleAddDialog}
                  open={openAddDialog}>
        <form onSubmit={handleSubmit(formAddSubmitHandler)}>
          <input hidden {...register('store_id')} name={'store_id'} value={store_id}/>
          <TextField
            {...register("en")}
            autoFocus
            margin="dense"
            id="en"
            name='en'
            label="Product Name EN"
            type="text"
            fullWidth
            variant="outlined"
          /> <TextField
          {...register('ar')}
          autoFocus
          margin="dense"
          id="ar"
          name='ar'
          label="Product Name AR"
          type="text"
          fullWidth
          variant="outlined"
        />
          <TextField
            {...register("description")}
            autoFocus
            margin="dense"
            id="description"
            name='description'
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            {...register("price", {pattern: /^(?!0\.00)[1-9]\d{0,2}(,\d{3})*(\.\d\d)?$/})}
            autoFocus
            margin="dense"
            id="description"
            name='price'
            label="Price"
            type="number"
            fullWidth
            variant="outlined"
          />
          <span>{errors.price?.message}</span>
          <Button
            variant="outlined"
            component="label"
          >
            <FontAwesomeIcon icon={faFileImage}/> <span className='ml-2'></span>
            <input
              {...register('images')}
              type="file"
              multiple
              name='images'
            />
          </Button>
          <DialogActions>
            <Button type='submit' color="primary" variant='contained'>Submit</Button>
          </DialogActions>
        </form>
      </FormDialog>
    </div>

  );
};
