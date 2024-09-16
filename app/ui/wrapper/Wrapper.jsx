import classes from './wrapper.module.scss';

export default function Wrapper({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}
