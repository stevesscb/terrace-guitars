import { signOut } from '@/auth';

export default function SignOut() {
  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <button type='submit'>Sign out</button>
    </form>
  );
}
