'use client';
import { deleteGuitar } from '@/app/lib/actions';

export default function DeleteButton({ id }) {
  function handleDelete() {
    alert('Are you sure you want to delete this guitar? ');
    deleteGuitar(id);
  }

  return <button onClick={handleDelete}>Delete listing</button>;
}
