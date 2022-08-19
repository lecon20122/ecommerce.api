import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

interface Props {
  children?: React.ReactNode,
  header?: string
  btnLabel?: string
  variant?: "text" | "contained" | "outlined" | undefined
  content?: string
  open: boolean
  handleClose: () => void
}

export default function FormDialog({ children, header, content, open = false, handleClose }: Props) {
  return (
    <div className='relative'>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant='text'>X</Button>
        </DialogActions>
        <DialogTitle>{header}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {content}
          </DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
