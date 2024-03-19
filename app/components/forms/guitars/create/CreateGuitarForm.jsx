'use client';

import { useFormState, useFormStatus } from 'react-dom';
// import { FormControlLabel, Switch } from '@mui/material';

import Input from '@/app/components/forms/inputs/Input';
import TextArea from '../../inputs/TextArea';
import Button from '@/app/components/buttons/Button';
import { createGuitar } from '@/app/lib/data';

import classes from './createGuitarForm.module.scss';

export default function CreateGuitarForm() {
  const [errorMessage, dispatch] = useFormState(createGuitar, undefined);
  const { pending } = useFormStatus();

  // console.log(errorMessage);

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
          error={errorMessage}
        />
        <Input
          type='radio'
          id='acoustic'
          label='Acoustic'
          name='type'
          value='ACOUSTIC'
          error={errorMessage}
        />
      </div>
      <Input
        type='text'
        id='make'
        label='Make'
        name='make'
        error={errorMessage}
      />
      <Input
        type='text'
        id='model'
        label='Model'
        name='model'
        error={errorMessage}
      />
      <Input
        type='text'
        id='year'
        label='Year'
        name='year'
        maxLength='4'
        error={errorMessage}
      />
      <Input
        type='text'
        id='price'
        label='Price'
        name='price'
        maxLength='6'
        error={errorMessage}
      />
      <TextArea id='description' label='Description' name='description' />

      {/* <FormControlLabel
        control={<Switch defaultChecked />}
        label='Available?'
        id='isSold'
        name='isSold'
        value='true'
      /> */}
      <div>
        {errorMessage && (
          <>
            <p className={classes.errorMessage}>{errorMessage}</p>
          </>
        )}
      </div>
      <Button aria-disabled={pending} label='create' />
    </form>
  );
}
