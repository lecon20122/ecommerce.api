import React, {useState} from 'react';
import {Button, DialogActions, MenuItem, Select, TextField} from "@mui/material";
import FormDialog from "../../shards/formDialog";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImage} from "@fortawesome/free-regular-svg-icons";
import {VariationTypes, VariationTypesValues} from "../../../types/VariationType";


interface Props {
  locale: string
  handleAddDialog: () => void,
  openAddDialog: boolean
  productId: number
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
}

interface IFormProps {
  price: number
  images: string
  product_id: number
  variation_type_id: number
  variation_type_value_id: number
}

export default function CreateProductVariation({
                                                 handleAddDialog,
                                                 openAddDialog,
                                                 productId,
                                                 variationTypesValues,
                                                 variationTypes,
                                                 locale
                                               }: Props) {
  const {register, handleSubmit, formState: {errors}, reset, setValue} = useForm<IFormProps>()

  const [isMediable, setIsMediable] = useState(false)


  const formAddSubmitHandler: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    console.log(data)
    Inertia.post(route('admin.variations.store'), resolveData, {
      preserveState: false
    })
    reset()
  }

  const selectVariationTypeItems = variationTypes?.map((type) => {
    return (
      <MenuItem onClick={(e) => setIsMediable(type.is_mediable)} value={type.id}
                key={type.id}>{type.type[locale as keyof typeof type.type]}</MenuItem>
    )
  })

  const selectVariationTypeValueItems = variationTypesValues?.map((value) => {
    return (
      <MenuItem value={value.id} key={value.id}>{value.value[locale as keyof typeof value.value]}</MenuItem>
    )
  })

  return (
    <div id='add'>
      <FormDialog btnLabel='Add Product' header='Create New Variation' handleClose={handleAddDialog}
                  open={openAddDialog}>
        <form onSubmit={handleSubmit(formAddSubmitHandler)}>
          <input hidden {...register('product_id')} name={'product_id'} value={productId}/>
          <Select margin="dense"
                  {...register('variation_type_id')}
                  placeholder='type ex:color'
                  defaultValue={''}
                  fullWidth
                  autoFocus>
            {selectVariationTypeItems}
          </Select>
          <Select margin="dense"
                  className='mt-2'
                  {...register('variation_type_value_id')}
                  fullWidth
                  placeholder='value ex:red'
                  defaultValue={''}
                  autoFocus>
            {selectVariationTypeValueItems}
          </Select>
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
          {isMediable
          &&
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
          }
          <DialogActions>
            <Button type='submit' color="primary" variant='contained'>Submit</Button>
          </DialogActions>
        </form>
      </FormDialog>
    </div>
  )

};
