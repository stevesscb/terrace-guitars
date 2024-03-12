import Card from '@/app/components/card/Card';

import { fetchGuitars } from '@/app/lib/data';

import classes from './page.module.scss';

export default async function Page() {
  const guitars = await fetchGuitars();

  return (
    <section>
      <h1 className={classes.title}>All guitars</h1>
      <div className={classes.guitars}>
        {guitars.map((guitar, index) => (
          <Card key={index} data={guitar} />
        ))}
      </div>
    </section>
  );
}
