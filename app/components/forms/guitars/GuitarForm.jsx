// import { FormControlLabel, Switch } from '@mui/material';

import { useEffect, useState } from 'react';
import { fetchGuitar } from '@/app/lib/data';

import Input from '@/app/components/forms/inputs/Input';
import TextArea from '@/app/components/forms/inputs/TextArea';
import Button from '@/app/components/buttons/Button';

import classes from './guitarForm.module.scss';
import BackButton from '../../buttons/BackButton';

export default function GuitarForm({
  errorMessages,
  dispatch,
  pending,
  title,
  id,
  type,
}) {
  const [guitar, setGuitar] = useState('');

  if (type === 'update') {
    useEffect(() => {
      const getGuitar = async () => {
        const guitar = await fetchGuitar(id);
        setGuitar(guitar);
      };

      getGuitar();
    }, []);
  }

  return (
    <form action={dispatch} className={classes['guitar-form']}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes['type-select']}>
        <Input
          type='radio'
          id='electric'
          label='Electric'
          name='type'
          value='ELECTRIC'
          error={errorMessages}
          defaultChecked={true}
        />
        <Input
          type='radio'
          id='acoustic'
          label='Acoustic'
          name='type'
          value='ACOUSTIC'
          error={errorMessages}
          defaultChecked={false}
        />
      </div>
      <Input
        type='text'
        id='make'
        label='Make'
        name='make'
        placeholder='Fender'
        error={errorMessages}
        defaultValue={guitar.make}
      />
      <Input
        type='text'
        id='model'
        label='Model'
        name='model'
        placeholder='Stratocaster'
        error={errorMessages}
        defaultValue={guitar.model}
      />
      <Input
        type='text'
        id='year'
        label='Year'
        name='year'
        maxLength='4'
        placeholder='1990'
        error={errorMessages}
        defaultValue={guitar.year}
      />
      <Input
        type='text'
        id='price'
        label='Price (USD)'
        name='price'
        maxLength='6'
        placeholder='$1200'
        error={errorMessages}
        defaultValue={guitar.price}
      />
      <TextArea
        id='description'
        label='Description'
        name='description'
        placeholder='Detailed description on the guitar...'
        error={errorMessages}
        defaultValue={guitar.description}
      />

      {/* <FormControlLabel
        control={<Switch defaultChecked={guitar.isSold ? false : true} />}
        label='Available?'
        id='isSold'
        name='isSold'
      /> */}
      <div className={classes.errorContainer}>
        {errorMessages &&
          errorMessages.map((error, index) => (
            <p className={classes.errorMessage} key={index}>
              {error}
            </p>
          ))}
      </div>
      <div className={classes.cta}>
        <Button aria-disabled={pending} label={type} />
        <BackButton />
      </div>
    </form>
  );
}
