import classes from './input.module.scss';

export default function TextArea({ label, name, id }) {
  return (
    <div className={classes['input-group']}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} label={label} name={name} />
    </div>
  );
}
