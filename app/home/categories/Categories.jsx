import Image from 'next/image';
import Link from 'next/link';

import TwoColumnGrid from '@/app/ui/grid/TwoColumnGrid';

import category1 from '@/public/category1.webp';
import category2 from '@/public/category2.webp';

import classes from './categories.module.scss';

const categories = [
  {
    link: '/',
    src: category1,
    alt: 'Shop acoustic guitars',
  },
  {
    link: '/',
    src: category2,
    alt: 'Shop electric guitars',
  },
];

export default function Categories() {
  return (
    <section className={classes.categories}>
      <TwoColumnGrid>
        {categories.map((category, index) => (
          <div key={index}>
            <Link href={category.link}>
              <Image src={category.src} alt={category.alt} />
            </Link>
          </div>
        ))}
      </TwoColumnGrid>
    </section>
  );
}
