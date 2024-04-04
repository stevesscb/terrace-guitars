'use server';
import { unstable_noStore as noStore } from 'next/cache';
import prisma from './prisma';

export async function fetchGuitars() {
  noStore();

  try {
    console.log('Fetching all guitars...');
    const data = await prisma.guitar.findMany();
    console.log('Fetched guitars');
    return data;
  } catch (error) {
    console.log('Database error:', error);
    throw new Error();
  }
}

export async function fetchLatestGuitars() {
  noStore();

  try {
    console.log('fetching latest guitars');
    const data = await prisma.guitar.findMany({ take: 4 });
    console.log('fetched latest guitars');
    return data;
  } catch (error) {
    console.log('Database error:', error);
    throw new Error('Server error: failed to fetch guitars');
  }
}

export async function fetchGuitar(id) {
  noStore();

  try {
    console.log('fetching guitar');

    const data = await prisma.guitar.findUnique({
      where: {
        id: Number(id),
      },
    });
    console.log('fetched guitar');
    return data;
  } catch (error) {
    console.log('Database error:', error);
    throw new Error('Server error: failed to fetch guitar');
  }
}
