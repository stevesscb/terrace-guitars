import classes from './cardSkeleton.module.scss';

export function CardSkeleton() {
  return (
    <div className={classes.card}>
      <div className={classes.image}></div>
      <div className={classes.description}>
        <span className={classes.isSold}></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
