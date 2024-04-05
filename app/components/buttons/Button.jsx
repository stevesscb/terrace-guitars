'use client';

import classes from './button.module.scss';

export default function Button(props) {
  return (
    <button {...props} className={`${classes.button} ${props.bg}`}>
      {props.label}
      {props.children}
    </button>
  );
}
