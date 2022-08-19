import React, { MouseEvent, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  open: boolean,
  handleClose: (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
  handleAgree: (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
}

export default function ConfirmationAlertDialog({ open, handleClose, handleAgree }: Props) {

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Deleting Confirmation"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Deleting this record might be risky are you Sure ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color='error' onClick={(e) => handleClose(e)}>Disagree</Button>
        <Button onClick={(e) => handleAgree(e)} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
