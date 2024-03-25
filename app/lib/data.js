'use server';
import { unstable_noStore as noStore } from 'next/cache';
import prisma from './prisma';

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
    throw new Error('Server error: failed to fetch guitars');
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
    throw new Error('Server error: failed to fetch guitar');
  }
}
