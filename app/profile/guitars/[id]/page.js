import Image from 'next/image';
import Link from 'next/link';

import { fetchGuitar } from '@/app/lib/data';

import TwoColumnGrid from '@/app/ui/grid/TwoColumnGrid';
import BackButton from '@/app/components/buttons/BackButton';
import placeHolder from '@/public/strat.webp';
import DeleteButton from '@/app/components/buttons/DeleteButton';

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
          <Link href={`/profile/guitars/${guitar.id}/edit/`}>Edit guitar</Link>
          <DeleteButton id={guitar.id} />
        </div>
      </TwoColumnGrid>
    </div>
  );
}
