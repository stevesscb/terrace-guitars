'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import classes from './breadcrumbs.module.scss';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter((item) => item !== '');

  return (
    <ul className={classes.breadcrumbs}>
      {segments.map(
        (segment, index) => (
          console.log(segment),
          (
            <li key={index}>
              <Link href={segment}>/{segment}</Link>
            </li>
          )
        )
      )}
    </ul>
  );
}
