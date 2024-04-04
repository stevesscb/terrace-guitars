import Categories from '@/app/home/categories/Categories';
import About from '@/app/home/about/About/';
import FeaturedVideo from '@/app/components/featured/FeaturedVideo';
import FeaturedGuitars from '@/app/components/featured/FeaturedGuitars';

export default function Home() {
  return (
    <>
      <Categories />
      <About />
      <FeaturedGuitars />
      <FeaturedVideo />
    </>
  );
}
