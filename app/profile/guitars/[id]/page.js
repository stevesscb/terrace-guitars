import { fetchGuitar } from '@/app/lib/data';

import GuitarPage from '@/app/ui/guitar[id]/GuitarPage';

export default async function Page({ params }) {
  const guitar = await fetchGuitar(Number(params.id));

  return <GuitarPage guitar={guitar} />;
}
