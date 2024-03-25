import classes from './input.module.scss';

export default function TextArea(props) {
  return (
    <div className={classes['input-group']}>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        {...props}
        className={props.error ? classes.error : null}
        required
      />
    </div>
  );
}
