import { useEffect, useState } from 'react';
import { fetchGuitar } from '@/app/lib/data';

import Input from '@/app/components/forms/inputs/Input';
import TextArea from '@/app/components/forms/inputs/TextArea';
import RadioButton from '@/app/components/buttons/RadioButton';
import BackButton from '@/app/components/buttons/BackButton';
import Button from '@/app/components/buttons/Button';

import classes from './guitarForm.module.scss';
import Modal from '../../modal/Modal';

export default function GuitarForm({
  errorMessages,
  dispatch,
  title,
  id,
  type,
}) {
  const [guitar, setGuitar] = useState('');

  if (type === 'update') {
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
          {type === 'update' && !guitar ? 'Fetching data...' : title}
        </h2>
        {type === 'update' && !guitar ? (
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
            <RadioButton type={type} guitar={guitar} />
            <div className={classes.errorContainer}>
              {errorMessages &&
                errorMessages.map((error, index) => (
                  <p className={classes.errorMessage} key={index}>
                    {error}
                  </p>
                ))}
            </div>
            <div className={classes.cta}>
              {type === 'update' ? (
                <Modal
                  id='guitar-form'
                  label='Submit'
                  title='Do you want to publish these changes?'
                  description={false}
                />
              ) : (
                <Button label='Submit' />
              )}
              <BackButton />
            </div>
          </>
        )}
      </form>
    </>
  );
}
