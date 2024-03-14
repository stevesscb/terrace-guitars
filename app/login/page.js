import LoginForm from '@/app/components/forms/Login';
import Wrapper from '@/app/ui/wrapper/Wrapper';

import classes from './page.module.scss';

export default function LoginPage() {
  return (
    <div className={`${classes['login-page']} page`}>
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </div>
  );
}
