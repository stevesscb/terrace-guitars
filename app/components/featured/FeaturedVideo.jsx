import Wrapper from '@/app/ui/wrapper/Wrapper';
import TwoColumnGrid from '@/app/ui/grid/TwoColumnGrid';

import classes from './featuredVideo.module.scss';

export default function FeaturedVideo() {
  return (
    <section className={classes['featured-video']}>
      <Wrapper>
        <TwoColumnGrid>
          <div className={classes.description}>
            <h3>Featured video</h3>
            <h4>World record - most effects pedals</h4>
            <p>
              We broke the world record for most effects pedals plugged into a
              single guitar! We shot the video after hours over 2 nights and had
              a great time getting crazy with the sounds. Check out the video
              here.
            </p>
          </div>
          <div className={classes.media}>
            <iframe
              src='https://www.youtube.com/embed/w2dvQ4hFNZg'
              title='World Record for Most Effects Pedals Plugged into a Guitar | The Rock Inn, Perth'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </TwoColumnGrid>
      </Wrapper>
    </section>
  );
}
