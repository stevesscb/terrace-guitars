import TwoColumnGrid from '@/app/ui/grid/TwoColumnGrid';

import classes from './guitarSkeleton.module.scss';

export default function GuitarSkeleton({ type }) {
  return (
    <div className={classes['guitar-page']}>
      <TwoColumnGrid>
        <div className={classes.image}></div>
        <div className={classes.description}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className={classes.cta}>
            <div></div>
            {type === 'admin' && (
              <>
                <div></div>
                <div></div>
              </>
            )}
          </div>
        </div>
      </TwoColumnGrid>
    </div>
  );
}
