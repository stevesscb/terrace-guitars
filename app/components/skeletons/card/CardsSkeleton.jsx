import { CardSkeleton } from './CardSkeleton';

import classes from './cardsSkeleton.module.scss';

export default function CardsSkeleton({ title }) {
  return (
    <div className='page'>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.guitars}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
