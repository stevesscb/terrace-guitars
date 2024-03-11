import Link from 'next/link';

export const metadata = {
  title: 'Available guitars',
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <button>
        <Link href='../'>Return</Link>
      </button>
    </>
  );
}
