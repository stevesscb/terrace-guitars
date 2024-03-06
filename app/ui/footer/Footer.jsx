import Wrapper from '../wrapper/Wrapper';
import classes from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Wrapper>
        <div className={classes.inner}>
          <ul className={classes['footer-list']}>
            <li>shop</li>
            <li>Electric guitars</li>
            <li>Acoustic guitars</li>
          </ul>

          <ul className={classes['footer-list']}>
            <li>customer care</li>
            <li>terms & conditions</li>
            <li>contact us</li>
          </ul>

          <ul className={classes['footer-list']}>
            <li>contact us</li>
            <li>Give us a call or visit us in store. We'd love to help.</li>
            <li>PHONE: (08) 9371 8822</li>
            <li>ADDRESS: 762 Beaufort Street, Mount Lawley WA</li>
            <li>CONNECT: ICON ICON ICON</li>
          </ul>

          <ul className={classes['footer-list']}>
            <li>Sign up to our newsletter</li>
            <li>PHONE: (08) 9371 8822</li>
            <li>ADDRESS: 762 Beaufort Street, Mount Lawley WA</li>
            <li>CONNECT: ICON ICON ICON</li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
}
