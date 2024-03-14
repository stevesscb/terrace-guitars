import Header from '@/app/ui/header/Header';
import Footer from '@/app/ui/footer/Footer';
import Card from '@/app/components/card/Card';
import Wrapper from '@/app/ui/wrapper/Wrapper';

import { fetchGuitars } from '@/app/lib/data';

import classes from './page.module.scss';

export const metadata = {
  title: 'Available guitars',
};

export default async function Page() {
  const guitars = await fetchGuitars();

  return (
    <>
      <Header />
      <div className='page'>
        <Wrapper>
          <h1 className={classes.title}>All guitars</h1>
          <div className={classes.guitars}>
            {guitars.map((guitar, index) => (
              <Card key={index} data={guitar} />
            ))}
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}
