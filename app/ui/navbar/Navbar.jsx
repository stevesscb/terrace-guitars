import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './navbar.module.scss';

const navLinks = [
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
    label: 'Login',
    href: '/login',
  },
  {
    label: 'logout',
    href: '/',
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={classes.nav}>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={pathname === link.href ? classes.active : null}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
