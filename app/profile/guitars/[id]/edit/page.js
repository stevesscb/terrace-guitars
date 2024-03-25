'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import { updateGuitar } from '@/app/lib/actions';

import GuitarForm from '@/app/components/forms/guitars/GuitarForm';

export default function EditGuitarPage() {
  const params = useParams();
  const updateGuitarWithId = updateGuitar.bind(null, params.id);
  const [errorMessages, dispatch] = useFormState(updateGuitarWithId, undefined);
  const { pending } = useFormStatus();

  return (
    <div>
      <GuitarForm
        type='update'
        title='Edit Listing'
        id={params.id}
        errorMessages={errorMessages}
        pending={pending}
        dispatch={dispatch}
      />
    </div>
  );
}
