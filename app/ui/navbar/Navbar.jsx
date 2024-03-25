'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './navbar.module.scss';
import SignOut from '@/app/components/buttons/Signout';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Guitars',
    href: '/guitars',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Admin',
    href: '/login',
  },
];

const adminLinks = [
  {
    label: 'My listings',
    href: '/profile/',
  },
  {
    label: 'Add listing',
    href: '/profile/guitars/create',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isLoggedIn = pathname.startsWith('/profile');

  let links = navLinks;

  if (isLoggedIn) {
    links = adminLinks;
  }

  return (
    <nav className={classes.nav}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={pathname === link.href ? classes.active : null}
            >
              {link.label}
            </Link>
          </li>
        ))}
        {isLoggedIn && (
          <li>
            <SignOut />
          </li>
        )}
      </ul>
    </nav>
  );
}
