import React from 'react';
import {Button, DialogActions, TextField} from "@mui/material";
import FormDialog from "../../shards/formDialog";
import {SubmitHandler, useFormContext} from "react-hook-form";


interface Props {
  user_id: number
  handleAddDialog: () => void,
  openAddDialog: boolean
  formAddSubmitHandler: SubmitHandler<any>
}

export default function CreateStore({user_id, handleAddDialog, openAddDialog, formAddSubmitHandler}: Props) {
  const {register, handleSubmit, formState: {errors}} = useFormContext()

  return (
    <div id='add'>
      <FormDialog btnLabel='Add Category' header='Create New Category' handleClose={handleAddDialog}
                  open={openAddDialog}>
        <form onSubmit={handleSubmit(formAddSubmitHandler)}>
          <TextField
            {...register("name")}
            autoFocus
            margin="dense"
            id="name"
            name='name'
            label="Store Name"
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
          <DialogActions>
            <Button type='submit' color="primary" variant='contained'>Submit</Button>
          </DialogActions>
        </form>
      </FormDialog>
    </div>

  );
};
