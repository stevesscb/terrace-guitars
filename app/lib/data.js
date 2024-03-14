const { PrismaClient } = require('@prisma/client');
import { unstable_noStore as noStore } from 'next/cache';

const prisma = new PrismaClient();

export async function fetchGuitars() {
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

export async function loginUser(user) {
  console.log('data.js', user);
  try {
    const response = await prisma.user.findUnique({
      where: {
        email: user.email,
        passwordHash: user.passwordHash,
      },
    });

    return response;
  } catch (error) {
    console.log('Authentication error', error);
    throw new Error();
  }
}
