import { prisma } from "./db";

export async function getUserByEmail(email: string) {
  try {
    const User = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return User;
  } catch {
    return null;
  }
}

export async function getUserById(id: string) {
    try {
      const User = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      return User;
    } catch {
      return null;
    }
  }