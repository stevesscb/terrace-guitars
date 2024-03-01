import Header from '@/app/ui/header/Header';
import Container from '@/app/ui/container/Container';

import { Inter } from 'next/font/google';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Terrace Guitars',
    default: 'Terrace Guitars',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} antialiased='true'>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
