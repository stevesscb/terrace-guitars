import Card from '@/app/components/card/Card';
import Wrapper from '@/app/ui/wrapper/Wrapper';

import classes from './featuredGuitars.module.scss';

import { guitars } from '@/app/lib/placeholder-data';

export default function Featured() {
  return (
    <section>
      <Wrapper>
        <h4 className={classes.title}>Featured guitars</h4>
        <div className={classes.featured}>
          {guitars.map((guitar, index) => (
            <Card key={index} data={guitar} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
