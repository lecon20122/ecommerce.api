import React, {useEffect, useState} from 'react';
import {Button, DialogActions, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import FormDialog from "../../shards/formDialog";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImage} from "@fortawesome/free-regular-svg-icons";
import {VariationTypes, VariationTypesValues} from "../../../types/VariationType";


interface Props {
  locale: string
  handleAddDialog: (data?: any) => void,
  openAddDialog: boolean
  productId: number
  parentId?: number
  variationTypes: VariationTypes[]
  variationTypesValues: VariationTypesValues[]
}

interface IFormProps {
  price: number
  images: string
  product_id: number
  parent_id: number
  variation_type_id: number
  variation_type_value_id: number
}

export default function CreateProductVariation({
                                                 handleAddDialog,
                                                 openAddDialog,
                                                 productId,
                                                 variationTypesValues,
                                                 variationTypes,
                                                 locale,
                                                 parentId
                                               }: Props) {
  const {register, handleSubmit, formState: {errors}, reset, setValue} = useForm<IFormProps>()

  const [isMediable, setIsMediable] = useState(false)
  const [variationTypeId, setVariationTypeId] = useState(0)
  const [filteredVariationType, setFilteredVariationType] = useState<VariationTypesValues[]>([{
    id: 0,
    value: {
      en: '',
      ar: ''
    },
    variation_type_id: 0
  }])

  const formAddSubmitHandler: SubmitHandler<IFormProps> = (data) => {
    const resolveData = {...data}
    console.log(data)
    Inertia.post(route('admin.variations.store'), resolveData, {
      preserveState: false
    })
    reset()
  }

  const selectVariationTypeOnClick = (type: VariationTypes) => {
    setIsMediable(type.is_mediable)
    setVariationTypeId(type.id)
  }

  const selectVariationTypeItems = variationTypes?.map((type) => {
    return (
      <MenuItem onClick={(e) => selectVariationTypeOnClick(type)} value={type.id}
                key={type.id}>
        {type.type[locale as keyof typeof type.type]}
      </MenuItem>
    )
  })

  useEffect(() => {
    const data = variationTypesValues.filter(type => type.variation_type_id == variationTypeId)
    setFilteredVariationType(data)
  }, [variationTypeId])

  const selectVariationTypeValueItems = filteredVariationType?.map((value) => {
    return (
      <MenuItem value={value.id} key={value.id}>
        <div className='flex flex-row content-center'>
          <span style={{backgroundColor: `${value.value.en.toLowerCase()}`}}
                className={`rounded w-[23px] h-[23px] inline-block mr-2 border border-3 border-black`}/>
          <span>{value.value[locale as keyof typeof value.value]}</span>
        </div>
      </MenuItem>
    )
  })


  return (
    <div id='add'>
      <FormDialog btnLabel='Add Product' header='Create New Variation' handleClose={handleAddDialog}
                  open={openAddDialog}>
        <form onSubmit={handleSubmit(formAddSubmitHandler)}>
          <input hidden {...register('product_id')} name={'product_id'} value={productId}/>
          <input hidden {...register('parent_id')} name={'parent_id'} value={parentId}/>
          <InputLabel id="variation_type_id">Type (ex:color,size)</InputLabel>
          <Select margin="dense"
                  className="my-2"
                  {...register('variation_type_id')}
                  labelId="variation_type_id"
                  defaultValue={''}
                  fullWidth
                  autoFocus>
            {selectVariationTypeItems}
          </Select>
          <InputLabel id="variation_type_value_id">Value (ex :red,xl,xs)</InputLabel>
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
