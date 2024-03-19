'use client';
import classes from './input.module.scss';

export default function Input(props) {
  return (
    <div className={`${classes['input-group']}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...props}
        required
        className={props.error ? classes.error : null}
      />
    </div>
  );
}
