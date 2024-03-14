'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

import classes from './login.module.scss';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  console.log(errorMessage);

  return (
    <form action={dispatch} className={classes['login-form']}>
      <h2 className={classes.title}>Admin panel</h2>
      <div className={classes['input-group']}>
        <label htmlFor='email'>Email address:</label>
        <input
          id='email'
          type='email'
          name='email'
          placeholder='Email'
          required
        />
      </div>

      <div className={classes['input-group']}>
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          type='password'
          name='password'
          placeholder='Password'
          required
        />
      </div>
      <div>
        {errorMessage && (
          <>
            <p>{errorMessage}</p>
          </>
        )}
      </div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return <button aria-disabled={pending}>Log in</button>;
}
