import { useState } from 'react';

// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Button from '@/app/components/buttons/Button';
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
      <Button
        bg={label === 'delete' ? 'danger' : 'success'}
        onClick={handleClickOpen}
        type='button'
      >
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
          <Button bg='neutral' type='button' onClick={handleClose}>
            cancel
          </Button>
          {label === 'delete' ? (
            <DeleteButton id={id} />
          ) : (
            <Button form={id} type='submit' bg='success'>
              {label}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
