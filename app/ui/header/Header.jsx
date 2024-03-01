import Container from '@/app/ui/container/Container';
import Navbar from '@/app/ui/navbar/Navbar';

import classes from './header.module.scss';

export default function Header() {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <h1>Terrace Guitars</h1>
          <Navbar />
        </div>
      </Container>
    </header>
  );
}
