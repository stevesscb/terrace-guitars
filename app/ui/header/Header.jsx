import Image from 'next/image';
import Link from 'next/link';

import Container from '@/app/ui/container/Container';
import Navbar from '@/app/ui/navbar/Navbar';
import Slider from '@/app/components/slider/Slider';

import companyLogo from '@/public/company-logo.png';

import { Permanent_Marker } from 'next/font/google';

import classes from './header.module.scss';

const perm = Permanent_Marker({ subsets: ['latin'], weight: '400' });

export default function Header() {
  return (
    <div className={classes.hero}>
      <Container>
        <header className={classes.header}>
          <div className={classes.outer}>
            <div className={classes.inner}>
              <div>
                <Link href='/'>
                  <Image
                    src={companyLogo}
                    alt='Company logo'
                    width={120}
                    height={120}
                  />
                </Link>
                <h1 className={perm.className}>Terrace Guitars</h1>
              </div>
              <Navbar />
            </div>
          </div>
          <Slider />
        </header>
      </Container>
    </div>
  );
}
