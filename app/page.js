import Image from 'next/image';
import Link from 'next/link';

import featuredOne from '@/public/featured1.webp';
import featuredTwo from '@/public/featured2.webp';
import about from '@/public/about-homepage.webp';

import TwoColumnGrid from './ui/grid/TwoColumnGrid';
import Wrapper from './ui/wrapper/Wrapper';

import classes from './page.module.scss';
import Featured from './components/featured/featured';

const categories = [
  {
    link: '/',
    src: featuredOne,
    alt: 'Shop acoustic guitars',
  },
  {
    link: '/',
    src: featuredTwo,
    alt: 'Shop electric guitars',
  },
];

export default function Home() {
  return (
    <main>
      <section className={classes.categories}>
        <Wrapper>
          <TwoColumnGrid>
            {categories.map((category, index) => (
              <div key={index}>
                <Link href={category.link}>
                  <Image src={category.src} alt={category.alt} />
                </Link>
              </div>
            ))}
          </TwoColumnGrid>
        </Wrapper>
      </section>

      <section className={classes.about}>
        <Wrapper>
          <TwoColumnGrid>
            <div className={classes['about-column']}>
              <Image src={about} alt='Wall of electric guitars' />
            </div>
            <div className={classes['about-column']}>
              <h3>FAMILY OWNED SINCE 1988</h3>
              <p>
                "Although the business did not open until March 1988, the story
                of “The Rock Inn” really starts in 1979, when I travelled from
                Melbourne to Perth on tour with my band and fell in love with
                Perth, and Western Australia.
              </p>
              <p>
                After 3 months of solid touring and gigging in the West we
                headed back, but my trusty ’68 Dodge truck only made it to
                Ceduna before warping the head and having a total cardiac
                arrest. The truck then had to be towed to Adelaide and then put
                on the rail to get it home, needless to say all the touring
                funds were gone and then some! I then got a job in a music shop
                to pay off the debts and eight years later ... "
              </p>
              <button>
                <Link href='/about'>READ MORE</Link>
              </button>
            </div>
          </TwoColumnGrid>
        </Wrapper>
      </section>

      <Featured />
    </main>
  );
}
