import Card from '@/app/components/card/Card';
import { fetchGuitars } from '@/app/lib/data';

export default async function Page() {
  const guitars = await fetchGuitars();

  return (
    <>
      <h1>All guitars</h1>
      {guitars.map((guitar, index) => (
        <Card key={index} data={guitar} />
      ))}
    </>
  );
}
