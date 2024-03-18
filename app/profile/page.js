import Card from '@/app/components/card/Card';

import { fetchGuitars } from '@/app/lib/data';

import classes from './page.module.scss';

export const metadata = {
  title: 'admin',
};

export default async function ProfilePage() {
  const guitars = await fetchGuitars();

  return (
    <div className='page'>
      <h1 className={classes.title}>Current listings</h1>
      <div className={classes.guitars}>
        {guitars.map((guitar, index) => (
          <Card key={index} data={guitar} />
        ))}
      </div>
    </div>
  );
}
