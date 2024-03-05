import Container from '../container/Container';

import classes from './twoColumnGrid.module.scss';

export default function TwoColumnGrid({ children }) {
  return (
    <Container>
      <div className={classes.grid}>{children}</div>
    </Container>
  );
}
