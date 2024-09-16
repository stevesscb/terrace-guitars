import Header from '@/app/ui/header/Header';
import Footer from '@/app/ui/footer/Footer';
import Wrapper from '@/app/ui/wrapper/Wrapper';

import { Inter } from 'next/font/google';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Terrace Guitars',
    default: 'Terrace Guitars || Online guitar store',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} antialiased='true'>
        <Header />
        <main>
          <Wrapper>{children}</Wrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
