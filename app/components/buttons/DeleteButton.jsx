'use client';
import { deleteGuitar } from '@/app/lib/actions';

import classes from './deleteButton.module.scss';

export default function DeleteButton({ id }) {
  function handleDelete() {
    deleteGuitar(id);
  }

  return (
    <button className={classes.deleteBtn} onClick={handleDelete}>
      Delete listing
    </button>
  );
}
