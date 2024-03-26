'use client';
import { deleteGuitar } from '@/app/lib/actions';

import classes from './deleteButton.module.scss';

export default function DeleteButton({ id }) {
  function handleDelete() {
    alert('Are you sure you want to delete this guitar? ');
    deleteGuitar(id);
  }

  return (
    <button className={classes.deleteBtn} onClick={handleDelete}>
      Delete listing
    </button>
  );
}
