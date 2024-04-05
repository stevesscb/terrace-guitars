import { useEffect, useState } from 'react';
import { fetchGuitar } from '@/app/lib/data';
import { useRouter } from 'next/navigation';

import Input from '@/app/components/forms/inputs/Input';
import TextArea from '@/app/components/forms/inputs/TextArea';
import SwitchButton from '@/app/components/buttons/SwitchButton';
import Button from '@/app/components/buttons/Button';

import classes from './guitarForm.module.scss';
import Modal from '../../modal/Modal';

export default function GuitarForm({
  errorMessages,
  dispatch,
  title,
  id,
  formType,
}) {
  const [guitar, setGuitar] = useState('');
  const router = useRouter();

  if (formType === 'update') {
    useEffect(() => {
      const getGuitar = async () => {
        const guitar = await fetchGuitar(id);
        setGuitar(guitar);
      };

      getGuitar();
    }, []);
  }

  return (
    <>
      <form
        id='guitar-form'
        action={dispatch}
        className={classes['guitar-form']}
      >
        <h2 className={classes.title}>
          {formType === 'update' && !guitar ? 'Fetching data...' : title}
        </h2>
        {formType === 'update' && !guitar ? (
          ''
        ) : (
          <>
            <div className={classes['type-select']}>
              <Input
                type='radio'
                id='electric'
                label='Electric'
                name='type'
                value='ELECTRIC'
                error={errorMessages}
                defaultChecked={true}
              />
              <Input
                type='radio'
                id='acoustic'
                label='Acoustic'
                name='type'
                value='ACOUSTIC'
                error={errorMessages}
                defaultChecked={false}
              />
            </div>
            <Input
              type='text'
              id='make'
              label='Make'
              name='make'
              placeholder='Fender'
              error={errorMessages}
              defaultValue={guitar.make}
            />
            <Input
              type='text'
              id='model'
              label='Model'
              name='model'
              placeholder='Stratocaster'
              error={errorMessages}
              defaultValue={guitar.model}
            />
            <Input
              type='text'
              id='year'
              label='Year'
              name='year'
              maxLength='4'
              placeholder='1990'
              error={errorMessages}
              defaultValue={guitar.year}
            />
            <Input
              type='text'
              id='price'
              label='Price (USD)'
              name='price'
              maxLength='6'
              placeholder='$1200'
              error={errorMessages}
              defaultValue={guitar.price}
            />
            <TextArea
              id='description'
              label='Description'
              name='description'
              placeholder='Detailed description on the guitar...'
              error={errorMessages}
              defaultValue={guitar.description}
            />
            <SwitchButton formType={formType} guitar={guitar} />
            <div className={classes.errorContainer}>
              {errorMessages &&
                errorMessages.map((error, index) => (
                  <p className={classes.errorMessage} key={index}>
                    {error}
                  </p>
                ))}
            </div>
            <div className={classes.cta}>
              {formType === 'update' ? (
                <Modal
                  id='guitar-form'
                  label='submit'
                  title='Do you want to publish these changes?'
                  description={false}
                />
              ) : (
                <Button bg='success' label='create' />
              )}
              <Button
                bg='neutral'
                label='return'
                onClick={() => router.back()}
              />
            </div>
          </>
        )}
      </form>
    </>
  );
}
