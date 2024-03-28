import * as yup from 'yup';

export const FormSchema = yup.object({
  type: yup.string().required(),
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().required('Please enter a a date (numbers only)'),
  price: yup
    .number()
    .min(0.01)
    .required('Please enter an amount greater than $0'),
  description: yup.string().required(),
  isSold: yup.boolean(),
  date: yup.date(),
});
