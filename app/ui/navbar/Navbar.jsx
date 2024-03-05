import Link from 'next/link';

import classes from './navbar.module.scss';

const navLinks = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Contact',
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
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
