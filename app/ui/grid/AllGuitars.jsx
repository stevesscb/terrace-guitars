import Card from '@/app/components/card/Card';

import { fetchGuitars } from '@/app/lib/data';

import classes from './allGuitars.module.scss';

export default async function AllGuitars() {
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
