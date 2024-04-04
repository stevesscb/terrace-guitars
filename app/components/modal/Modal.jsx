import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteButton from '@/app/components/buttons/DeleteButton';

import './modal.scss';

export default function Modal({ id, label, title, description }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        {description && (
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              {description}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions id='actions'>
          <Button type='button' onClick={handleClose} id='btn'>
            Cancel
          </Button>
          {label === 'Delete' ? (
            <DeleteButton id={id} />
          ) : (
            <Button form={id} type='submit' id='submitBtn'>
              {label}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
