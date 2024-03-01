import Link from 'next/link';

import classes from './navbar.module.scss';

const navLinks = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About us',
    path: '/about',
  },
  {
    label: 'Contact us',
    path: '/contact',
  },
  {
    label: 'Login',
    path: '/login',
  },
  {
    label: 'logout',
    path: '/',
  },
];

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul>
        {navLinks.map((link) => (
          <li>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
