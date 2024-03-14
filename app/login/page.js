import Header from '@/app/ui/header/Header';
import Footer from '@/app/ui/footer/Footer';
import LoginForm from '@/app/components/forms/Login';
import Wrapper from '@/app/ui/wrapper/Wrapper';

import classes from './page.module.scss';

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className={`${classes['login-page']} page`}>
        <Wrapper>
          <LoginForm />
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}
