'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import TwoColumnGrid from '@/app/ui/grid/TwoColumnGrid';
import placeHolder from '@/public/strat.webp';

import Modal from '@/app/components/modal/Modal';

import classes from './guitarPage.module.scss';
import Button from '@/app/components/buttons/Button';

export default function GuitarPage({ guitar }) {
  const pathname = usePathname();
  const router = useRouter();

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
          {guitar.isSold ? (
            <p className={classes.sold}>Sold</p>
          ) : (
            <p className={classes.available}>Available</p>
          )}
          <p className={classes.type}>{guitar.type}</p>
          <p className={classes.title}>
            {guitar.year} {guitar.make} {guitar.model}
          </p>
          <p className={classes.price}>Price: ${guitar.price}</p>
          <p className={classes.details}>
            <span className={classes.caption}>Description:</span>
            {guitar.description}
          </p>
          <div className={classes.cta}>
            <Button bg='neutral' label='Return' onClick={() => router.back()} />
            {admin && (
              <>
                <Link
                  className={classes.edit}
                  href={`/profile/guitars/${guitar.id}/edit/`}
                >
                  Edit listing
                </Link>
                <Modal
                  className={classes.delete}
                  id={guitar.id}
                  label='delete'
                  title='Are you sure you want to delete this listing?'
                />
              </>
            )}
          </div>
        </div>
      </TwoColumnGrid>
    </div>
  );
}
