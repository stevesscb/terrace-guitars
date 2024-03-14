import Header from '@/app/ui/header/Header';
import Footer from '@/app/ui/footer/Footer';
import Wrapper from '@/app/ui/wrapper/Wrapper';

export const metadata = {
  title: 'About',
};

export default function About() {
  return (
    <>
      <Header />
      <div className='page'>
        <Wrapper>
          <h1>About us</h1>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}
