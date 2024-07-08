import Image from 'next/image';

export const metadata = {
  title: 'About',
};

import aboutOne from '@/public/about1.jpg';
import aboutTwo from '@/public/about2.webp';
import aboutThree from '@/public/about3.jpg';
import aboutFour from '@/public/about4.jpeg';

import classes from './page.module.scss';
import Input from '../components/form/inputs/Input';
import Button from '../components/buttons/Button';

export default function About() {
  return (
    <>
      <div className={classes.page}>
        <div className={classes.colOne}>
          <h1>
            Terrace guitars - About us - New York's specialist guitar store
            since 1990
          </h1>
          <span className={classes.textImage}>
            <p>
              "Although the business did not open until March 1988, the story of
              “The Rock Inn” really starts in 1979, when I travelled from
              Melbourne to Perth on tour with my band and fell in love with
              Perth, and Western Australia. After 3 months of soEarly Rock Inn
              "showroom"lid touring and gigging in the West we headed back, but
              my trusty ’68 Dodge truck only made it to Ceduna before warping
              the head and having a total cardiac arrest. The truck then had to
              be towed to Adelaide and then put on the rail to get it home,
              needless to say all the touring funds were gone and then some! I
              then got a job in a music shop to pay off the debts and eight
              years later, with nothing except experience, a few dollars, my
              grandfathers EH (he didn't need it anyway), and a removal truck of
              tasty gear I had been collecting, I made it back to W.A to open at
              shop at Roberts Road, Subiaco.
            </p>
            <span>
              <Image src={aboutOne} alt='' />
            </span>
          </span>
          <span className={classes.imageText}>
            <span>
              <Image src={aboutTwo} alt='' />
            </span>
            <p>
              The Rock Inn has always had one focus, to be different from
              everyone else. A vision which remains the same to this day. In the
              late 80’s we were the amongst first selling PRS, Charvel/Jackson,
              Trace Elliot, Ampeg to the public (to name a few) and within a
              short time became the top stockist of Rickenbacker guitars. We
              were the first Vintage guitar store to open in Perth, selling
              vintage and used gear imported from the UK and USA, which at the
              time was very hard to come by. In 1990 we opened another store in
              Applecross – which gave us the roots of our now-strong customer
              base south of the river. In 1993 an opportunity arose to combine
              the two stores into one big store - so both businesses were
              shifted to a larger premises. In late 1993, The Rock Inn was
              opened on Hay Street, Subiaco where we had great success in
              expanding the shop and level of stock, until August 1997 when we
              finally moved to our current location on Beaufort St, Mount Lawley
              - which with three large showrooms, had even more space for our
              growing collection of guitars and amplifiers.
            </p>
          </span>
          <p>
            After speaking at length with many customers about the availability
            of quality acoustic guitars in Perth, 2002 saw the opening of “The
            Acoustic Inn” - a specialist Acoustic store dedicated to one thing
            only, quality acoustic guitars! Stocking all the famous brands under
            one roof, The Acoustic Inn provided a place for dedicated acoustic
            players to play at length, and have access to specialist products
            and accessories. It’s a fantastic building being an old 1930’s
            Garage with exposed wooden truss roofing - the only problem being
            you cant hear the guitars in heavy showers, thanks to the old 30’s
            tin roof.Both stores are next door to each other, making it easy to
            check out guitars, and then more guitars… because that’s all we
            sell! I often have customers share their experience of purchasing of
            a guitar from one of the many Rock Inn stores over the last 2
            decades. Surprisingly, I can normally remember each instrument down
            to the fine details! If you have an interesting story about visiting
            the shop, I would love to hear it. The Rock Inn is a guitar players
            store run by guitar players, and that’s the way it’s going to stay!”
          </p>
          <p>
            In October 2018 Andrew retired and his son Shaun too over running
            the business but his story also goes back many years.
          </p>
          <span className={classes.textImage}>
            <p>
              "Shaun started hanging around the shop from a very young age,
              mainly making box forts and playing on the drum kits which were
              for sale in the bottom room (that is now The Acoustic Inn). At
              school Shaun was already playing flute and saxophone but at the
              age of 12 he decided that the guitar was going to be his
              instrument of choice. He started on a Samick Strat copy and was
              permanently hooked! This in turn led to Shaun working part time on
              Saturdays (in 2003) where he began soaking up anything and
              everything related to guitars and amplifiers including brands,
              models, history and repairs.
            </p>
            <span>
              <Image src={aboutThree} alt='' />
            </span>
          </span>
          <p>
            Shaun continued to work at the shop part time all throughout his
            school years with a never-ending procession of guitar upgrading -
            Fernandes Strat, Gibson SG, Gibson Flying V, Jackson RR1 and many
            more. During this time we also entered the digital world with the
            establishment of our first website and I knew there were challenges
            ahead when a teenage Shaun had to write down the instructions for me
            on how to upload digital images onto our computer. Thank fully it
            was a fast learning curve (I still have his handwritten sheet).
          </p>
          <p>
            This was the start of a more serious working partnership and when
            Shaun completed his degree at University he transitioned from
            working part-time to full-time employment and together we grew the
            business domestically and took it further into the online world.
          </p>
          <p>
            Around 2014 Shaun and I began to naturally shift roles to reflect a
            greater working partnership with both of us making joint decisions
            on products and business direction. This gradually led to the
            question of business succession and in 2016 Shaun began to
            transition to actively running the shop from behind the scenes. In
            October 2018, we made it official and I sold The Rock Inn to Shaun
            and semi-retired. It's been a wonderful working journey and both of
            us are very thankful to all our customers past and present for all
            the friendships and support going forward"
          </p>
          <div className={classes.imageContainer}>
            <Image src={aboutFour} alt='' />
          </div>
        </div>
        <div className={classes.colTwo}>
          <div className={classes.sectionTop}>
            <h3>NEWSLETTER</h3>
            <p>
              Sign up to our newsletter and receive exclusive offers and
              notifications of new stock as soon as it comes in.
            </p>
            <Input label='Email address' />
            <Button label='SIGN UP NOW' />
          </div>

          <div className={classes.sectionBottom}>
            <h4>Contact us</h4>
            <p>Get in touch!</p>
            <p>Phone (08) 9371 8822</p>
            <p>Email us for anything else at terraceguitars@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
