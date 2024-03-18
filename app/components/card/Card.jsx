'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import placeHolder from '@/public/strat.webp';

import classes from './card.module.scss';

export default function Card({ data }) {
  const [cardData, setCardData] = useState({
    id: data.id,
    make: data.make,
    model: data.model,
    year: data.year,
    price: data.price,
    isSold: data.isSold,
  });

  const pathname = usePathname();

  let href = 'guitars/';

  if (pathname.startsWith('/profile')) {
    href = '/profile/guitars/';
  }

  useEffect(() => {
    setCardData({
      id: data.id,
      make: data.make,
      model: data.model,
      year: data.year,
      price: data.price,
      isSold: data.isSold,
    });
  }, [data]);

  return (
    <div className={classes.card}>
      <Link href={`${href + cardData.id}`}>
        <Image
          src={placeHolder}
          alt='alt message'
          height={400}
          width={400}
          className={classes.image}
        />
        <div className={classes.description}>
          <p>Make: {cardData.make}</p>
          <p>Model: {cardData.model}</p>
          <p>Year: {cardData.year}</p>
          <p>Price: ${cardData.price}</p>
          {cardData.isSold ? <p>Sold</p> : <p>Available</p>}
        </div>
      </Link>
    </div>
  );
}
