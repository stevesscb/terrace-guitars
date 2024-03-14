import classes from './twoColumnGrid.module.scss';

export default function TwoColumnGrid({ children }) {
  return <div className={classes.grid}>{children}</div>;
}
