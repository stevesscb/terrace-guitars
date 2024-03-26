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
    type: data.type,
    make: data.make,
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
      type: data.type,
      make: data.make,
      price: data.price,
      isSold: data.isSold,
    });
  }, [data]);

  return (
    <div className={classes.card}>
      <Link href={`${href + cardData.id}`}>
        <Image
          src={placeHolder}
          priority
          alt='alt message'
          height={300}
          width={300}
          className={classes.image}
        />
        <div className={classes.description}>
          <p>
            <span>Type:</span> {cardData.type}
          </p>
          <p>
            <span>Make:</span> {cardData.make}
          </p>
          <p>
            <span>Price:</span> ${cardData.price}
          </p>
          {cardData.isSold ? (
            <p className={classes.sold}>Sold</p>
          ) : (
            <p className={classes.available}>Available</p>
          )}
          <p>Click for more details...</p>
        </div>
      </Link>
    </div>
  );
}
