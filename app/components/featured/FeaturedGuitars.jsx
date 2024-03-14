import Card from '@/app/components/card/Card';

import classes from './featuredGuitars.module.scss';

import { fetchLatestGuitars } from '@/app/lib/data';

export default async function Featured() {
  const guitars = await fetchLatestGuitars();

  return (
    <section>
      <h4 className={classes.title}>Featured guitars</h4>
      <div className={classes.featured}>
        {guitars.map((guitar, index) => (
          <Card key={index} data={guitar} />
        ))}
      </div>
    </section>
  );
}
