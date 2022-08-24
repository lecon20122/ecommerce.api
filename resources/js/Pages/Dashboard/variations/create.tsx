import React from 'react';
import {Button, DialogActions, TextField} from "@mui/material";
import FormDialog from "../../shards/formDialog";
import {SubmitHandler, useForm, UseFormWatch} from "react-hook-form";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImage} from "@fortawesome/free-regular-svg-icons";


interface Props {
  handleAddDialog: () => void,
  openAddDialog: boolean
  productId :number
  // watch: UseFormWatch<any>
}

interface IFormProps {
  ar: string
  en: string
  type: string
  price: number
  images: string
  product_id: number
}

export default function CreateProductVariation({handleAddDialog, openAddDialog,productId}: Props) {
  const {register, handleSubmit, formState: {errors}, reset, setValue} = useForm<IFormProps>()

  const formAddSubmitHandler: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    console.log(data)
    Inertia.post(route('admin.variations.store'), resolveData, {
      preserveState: false
    })
    reset()
  }

  return (
    <div id='add'>
      <FormDialog btnLabel='Add Product' header='Create New Variation' handleClose={handleAddDialog}
                  open={openAddDialog}>
        <form onSubmit={handleSubmit(formAddSubmitHandler)}>
          <input hidden {...register('product_id')} name={'product_id'} value={productId}/>
          <TextField
            {...register("en")}
            autoFocus
            margin="dense"
            id="en"
            name='en'
            label="Variation Name EN"
            type="text"
            fullWidth
            variant="outlined"
          /> <TextField
          {...register('ar')}
          autoFocus
          margin="dense"
          id="ar"
          name='ar'
          label="Variation Name AR"
          type="text"
          fullWidth
          variant="outlined"
        />
          <TextField
            {...register("type")}
            autoFocus
            margin="dense"
            id="type"
            name='type'
            label="type"
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
            <FontAwesomeIcon icon={faFileImage}/> <span className='ml-2'/>
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
