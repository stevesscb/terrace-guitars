import Wrapper from '@/app/ui/wrapper/Wrapper';
import classes from './featured.module.scss';

export default function Featured() {
  return (
    <section>
      <Wrapper>
        <h4 className={classes.title}>Featured guitars</h4>
        <div className={classes.featured}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Wrapper>
    </section>
  );
}
