'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import TwoColumnGrid from '@/app/ui/grid/TwoColumnGrid';
import BackButton from '@/app/components/buttons/BackButton';
import placeHolder from '@/public/strat.webp';
import DeleteButton from '@/app/components/buttons/DeleteButton';

import classes from './guitarPage.module.scss';

export default function GuitarPage({ guitar }) {
  const pathname = usePathname();

  let admin = false;

  if (pathname.startsWith('/profile')) {
    admin = true;
  }

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
          <p className={classes.details}>
            <span className={classes.caption}>Description:</span>
            {guitar.description}
          </p>
          <div className={classes.cta}>
            <BackButton />
            {admin && (
              <>
                <Link
                  className={classes.edit}
                  href={`/profile/guitars/${guitar.id}/edit/`}
                >
                  Edit listing
                </Link>
                <DeleteButton id={guitar.id} />
              </>
            )}
          </div>
        </div>
      </TwoColumnGrid>
    </div>
  );
}
