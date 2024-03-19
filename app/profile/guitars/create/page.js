import CreateGuitarForm from '@/app/components/forms/guitars/create/CreateGuitarForm';

import classes from './page.module.scss';

export default function CreateGuitarPage() {
  return (
    <div className={classes['create-guitar-page']}>
      <CreateGuitarForm />
    </div>
  );
}
