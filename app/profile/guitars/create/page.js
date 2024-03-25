'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createGuitar } from '@/app/lib/actions';

import GuitarForm from '@/app/components/forms/guitars/GuitarForm';

import classes from './page.module.scss';

export default function CreateGuitarPage() {
  const [errorMessages, dispatch] = useFormState(createGuitar, undefined);
  const { pending } = useFormStatus();

  return (
    <div className={classes['create-guitar-page']}>
      <GuitarForm
        title='Create new listing'
        errorMessages={errorMessages}
        dispatch={dispatch}
        pending={pending}
        type='create'
      />
    </div>
  );
}
