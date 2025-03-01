"use server";
import { prisma } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";

type FormState = {
  error?: string;
  success?: string;
};

export const register = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const values = {
    name: formData.get("name") as string | undefined,
    email: formData.get("email") as string | undefined,
    password: formData.get("password") as string | undefined,
  };

  if (!values.name || !values.email || !values.password) {
    return { error: "All fields are required." };
  }

  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid input" };
  }

  // TODO: Check if the user already exists in the database
  const existingUser = await getUserByEmail(values.email)

  if (existingUser) {
    return { error: "Email already in use" };
  }

  // TODO: Hash the password and store user in the database
  const hashedPassword = await bcrypt.hash(values.password,10)

  await prisma.user.create({
    data: {
      name: values.name,
      email: values.email,
      password: hashedPassword
    },
  })

  return {
    success: "Registration successful!",
  };
};
