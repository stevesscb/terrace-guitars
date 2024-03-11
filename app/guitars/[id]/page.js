import Link from 'next/link';
import { fetchGuitar } from '@/app/lib/data';

export default async function Page({ params }) {
  const guitar = await fetchGuitar(Number(params.id));

  return (
    <>
      <h1>guitar page</h1>
      <Link href='/guitars'>All available guitars</Link>

      <p>{guitar.type}</p>
      <p>{guitar.make}</p>
      <p>{guitar.model}</p>
      <p>{guitar.year}</p>
      <p>${guitar.price}</p>
      <p>{guitar.description}</p>
    </>
  );
}
