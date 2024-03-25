'use client';

import { useFormState, useFormStatus } from 'react-dom';
// import { FormControlLabel, Switch } from '@mui/material';

import Input from '@/app/components/forms/inputs/Input';
import TextArea from '../../inputs/TextArea';
import Button from '@/app/components/buttons/Button';
import { createGuitar } from '@/app/lib/actions';

import classes from './createGuitarForm.module.scss';

export default function CreateGuitarForm() {
  const [errorMessages, dispatch] = useFormState(createGuitar, undefined);
  const { pending } = useFormStatus();

  // console.log(errorMessages);

  return (
    <form action={dispatch} className={classes['create-guitar-form']}>
      <h2 className={classes.title}>Create new guitar</h2>
      <div className={classes['type-select']}>
        <Input
          type='radio'
          id='electric'
          label='Electric'
          name='type'
          value='ELECTRIC'
          error={errorMessages}
          checked
        />
        <Input
          type='radio'
          id='acoustic'
          label='Acoustic'
          name='type'
          value='ACOUSTIC'
          error={errorMessages}
        />
      </div>
      <Input
        type='text'
        id='make'
        label='Make'
        name='make'
        placeHolder='Fender'
        error={errorMessages}
      />
      <Input
        type='text'
        id='model'
        label='Model'
        name='model'
        placeHolder='Stratocaster'
        error={errorMessages}
      />
      <Input
        type='text'
        id='year'
        label='Year'
        name='year'
        maxLength='4'
        placeHolder='1990'
        error={errorMessages}
      />
      <Input
        type='text'
        id='price'
        label='Price (USD)'
        name='price'
        maxLength='6'
        placeHolder='$1200'
        error={errorMessages}
      />
      <TextArea
        id='description'
        label='Description'
        name='description'
        placeHolder='Detailed description on the guitar...'
        error={errorMessages}
      />

      {/* <FormControlLabel
        control={<Switch defaultChecked />}
        label='Available?'
        id='isSold'
        name='isSold'
        value='true'
      /> */}
      <div className={classes.errorContainer}>
        {errorMessages &&
          errorMessages.map((error) => (
            <p className={classes.errorMessage}>{error}</p>
          ))}
      </div>
      <Button aria-disabled={pending} label='create' />
    </form>
  );
}
