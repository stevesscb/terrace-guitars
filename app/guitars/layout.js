import Link from 'next/link';

import Wrapper from '@/app/ui/wrapper/Wrapper';

export const metadata = {
  title: 'Available guitars',
};

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
