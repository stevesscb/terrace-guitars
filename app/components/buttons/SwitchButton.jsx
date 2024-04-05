import { FormControlLabel, Switch } from '@mui/material';

export default function SwitchButton({ formType, guitar }) {
  if (formType === 'create') {
    return (
      <FormControlLabel
        control={<Switch defaultChecked={true} />}
        label='Available?'
        id='isSold'
        name='isSold'
      />
    );
  }

  if (formType === 'update') {
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
