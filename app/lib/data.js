'use server';

import { unstable_noStore as noStore } from 'next/cache';
import handleErrors from './handle-errors';
import prisma from './prisma';
import * as yup from 'yup';

export async function fetchGuitars() {
  noStore();

  try {
    console.log('Fetching all guitars...');

    const data = await prisma.guitar.findMany();

    return data;
  } catch (error) {
    console.log('Database error:', error);
    throw new Error();
  }
}

export async function fetchLatestGuitars() {
  noStore();

  try {
    const data = await prisma.guitar.findMany({ take: 4 });
    return data;
  } catch (error) {
    console.log('Database error:', error);
    throw new Error();
  }
}

export async function fetchGuitar(id) {
  noStore();

  try {
    const data = await prisma.guitar.findUnique({
      where: {
        id: Number(id),
      },
    });
    return data;
  } catch (error) {
    console.log('Database error:', error);
    throw new Error();
  }
}

export async function createGuitar(prevState, formData) {
  const rawFormData = Object.fromEntries(formData);

  const createSchema = yup.object({
    type: yup.string().required(),
    make: yup.string().required(),
    model: yup.string().required(),
    year: yup.number(),
    price: yup.number().min(0.01).required(),
    description: yup.string().required(),
    isSold: yup.boolean(),
    date: yup.date(),
  });

  const verifiedData = await createSchema.validate(rawFormData, {
    abortEarly: false,
    stripUnknown: true,
  });

  try {
    const data = await prisma.guitar.create({
      data: {
        ...verifiedData,
      },
    });
    // console.log('New guitar created:', data);
  } catch (error) {}
}
