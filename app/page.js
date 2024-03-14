import Header from '@/app/ui/header/Header';
import Footer from '@/app/ui/footer/Footer';

import Categories from '@/app/home/categories/Categories';
import About from '@/app/home/about/About/';
import FeaturedVideo from '@/app/components/featured/FeaturedVideo';
import FeaturedGuitars from '@/app/components/featured/FeaturedGuitars';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <About />
        <FeaturedGuitars />
        <FeaturedVideo />
      </main>
      <Footer />
    </>
  );
}
