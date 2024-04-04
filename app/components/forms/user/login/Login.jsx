'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

import Button from '@/app/components/buttons/Button';
import Input from '@/app/components/forms/inputs/Input';

import classes from './login.module.scss';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={dispatch} className={classes['login-form']}>
      <h2 className={classes.title}>Admin panel</h2>
      <Input
        label='email address'
        type='text'
        id='email'
        name='email'
        error={errorMessage}
      />

      <Input
        label='password'
        type='password'
        id='password'
        name='password'
        error={errorMessage}
      />
      <div>
        {errorMessage && (
          <>
            <p className={classes.errorMessage}>{errorMessage}</p>
          </>
        )}
      </div>
      <Button aria-disabled={pending} label='login' />
    </form>
  );
}
