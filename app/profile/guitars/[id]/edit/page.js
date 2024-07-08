'use client';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { useParams } from 'next/navigation';

import { updateGuitar } from '@/app/lib/actions';
import { fetchGuitar } from '@/app/lib/data';
import GuitarForm from '@/app/components/form/guitars/GuitarForm';

import classes from './page.module.scss';

export default function EditGuitarPage() {
  const [guitar, setGuitar] = useState('');
  const params = useParams();
  const updateGuitarWithId = updateGuitar.bind(null, params.id);
  const [errorMessages, dispatch] = useFormState(updateGuitarWithId);

  useEffect(() => {
    const getGuitar = async () => {
      const guitar = await fetchGuitar(params.id);
      setGuitar(guitar);
    };

    getGuitar();
  }, []);

  return (
    <div className={classes['edit-guitar-page']}>
      <p>Fetching data...</p>
      {guitar && (
        <GuitarForm
          formType='update'
          title='Edit Listing'
          guitar={guitar}
          params={params.id}
          errorMessages={errorMessages}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}
