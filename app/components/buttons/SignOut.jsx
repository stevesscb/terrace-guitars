import { signOut } from '@/auth';

import classes from './signout.module.scss';

export default function SignOut() {
  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <button type='submit' className={classes.signOut}>
        Sign out
      </button>
    </form>
  );
}
