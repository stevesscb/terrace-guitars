import Link from 'next/link';
import Image from 'next/image';

import classes from './card.module.scss';

export default function Card({ data }) {
  const { path, image, make, model, year, price } = data;

  return (
    <div className={classes.card}>
      <Link href={path}>
        <Image
          src={image}
          alt='alt message'
          height={400}
          width={400}
          className={classes.image}
        />
        <div className={classes.description}>
          <p>Make: {make}</p>
          <p>Model: {model}</p>
          <p>Year: {year}</p>
          <p>Price: ${price}</p>
        </div>
      </Link>
    </div>
  );
}
