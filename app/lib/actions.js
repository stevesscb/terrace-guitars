'use server';

import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { signIn } from '@/auth';
import prisma from './prisma';
import handleErrors from './handle-errors';
import { FormSchema } from './yup';

export async function authenticate(prevState, formData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function createGuitar(prevState, formData) {
  const rawFormData = Object.fromEntries(formData);
  const isSoldBoolean = Boolean(rawFormData.isSold);
  rawFormData.isSold = !isSoldBoolean;

  try {
    const verifiedData = await FormSchema.validate(rawFormData, {
      abortEarly: false,
      stripUnknown: true,
    });

    const newGuitar = await prisma.guitar.create({
      data: {
        ...verifiedData,
      },
    });
    console.log('New guitar created!:', newGuitar);
  } catch (error) {
    return handleErrors(error);
  }
  revalidatePath('/profile');
  redirect('/profile');
}

export async function updateGuitar(id, prevState, formData) {
  const rawFormData = Object.fromEntries(formData);
  const isSoldBoolean = Boolean(rawFormData.isSold);
  rawFormData.isSold = !isSoldBoolean;

  try {
    const verifiedData = await FormSchema.validate(rawFormData, {
      abortEarly: false,
      stripUnknown: true,
    });

    const updatedGuitar = await prisma.guitar.updateMany({
      where: {
        id: Number(id),
      },
      data: {
        ...verifiedData,
      },
    });
    console.log('Guitar has been updated!:', updatedGuitar);
  } catch (error) {
    return handleErrors(error);
  }
  revalidatePath('/profile');
  redirect('/profile');
}

export async function deleteGuitar(id) {
  try {
    const deletedGuitar = await prisma.guitar.delete({
      where: {
        id: id,
      },
    });
    console.log('This guitar has been deleted!:', deletedGuitar);
  } catch (error) {
    console.log(error, 'Error');
  }
  revalidatePath('/profile');
  redirect('/profile');
}
