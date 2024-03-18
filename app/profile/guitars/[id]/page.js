import Image from 'next/image';

import { fetchGuitar } from '@/app/lib/data';

import TwoColumnGrid from '@/app/ui/grid/TwoColumnGrid';
import BackButton from '@/app/components/buttons/BackButton';
import placeHolder from '@/public/strat.webp';

import classes from './page.module.scss';

export default async function Page({ params }) {
  const guitar = await fetchGuitar(Number(params.id));

  return (
    <div className={classes['guitar-page']}>
      <TwoColumnGrid>
        <div className={classes.image}>
          <Image
            src={placeHolder}
            alt='Image of guitar'
            priority
            height={600}
            width={400}
          />
        </div>
        <div className={classes.description}>
          <p className={classes.type}>{guitar.type}</p>
          <p className={classes.title}>
            {guitar.year} {guitar.make} {guitar.model}
          </p>
          <p className={classes.price}>Price: ${guitar.price}</p>
          {guitar.isSold ? (
            <p className={classes.sold}>Sold</p>
          ) : (
            <p className={classes.available}>Available</p>
          )}
          <p className={classes.details}>{guitar.description}</p>
          <BackButton />
        </div>
      </TwoColumnGrid>
    </div>
  );
}
