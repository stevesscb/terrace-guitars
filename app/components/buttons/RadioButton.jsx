import { FormControlLabel, Switch } from '@mui/material';

export default function RadioButton({ type, guitar }) {
  if (type === 'create') {
    return (
      <FormControlLabel
        control={<Switch defaultChecked={true} />}
        label='Available?'
        id='isSold'
        name='isSold'
      />
    );
  }

  if (type === 'update') {
    return (
      <>
        {guitar && (
          <FormControlLabel
            control={<Switch defaultChecked={!guitar.isSold} />}
            label='Available?'
            id='isSold'
            name='isSold'
          />
        )}
      </>
    );
  }
}
