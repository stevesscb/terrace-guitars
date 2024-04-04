import LoginForm from '@/app/components/forms/user/login/Login';

import classes from './page.module.scss';

export default function LoginPage() {
  return (
    <>
      <div className={classes['login-page']}>
        <LoginForm />
      </div>
    </>
  );
}
