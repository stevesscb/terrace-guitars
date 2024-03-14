'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  console.log(errorMessage);

  return (
    <form action={dispatch}>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='Email'
        required
      />
      <input
        id='password'
        type='password'
        name='password'
        placeholder='Password'
        required
      />
      <LoginButton />
      <div>
        {errorMessage && (
          <>
            <p>{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return <button aria-disabled={pending}>Log in</button>;
}
