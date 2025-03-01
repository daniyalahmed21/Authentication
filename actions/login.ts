"use server";
import { LoginSchema } from "@/schemas";

type FormState = {
  error?: string;
  success?: string;
};

export const login = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  const values = {
    email: formData.get("email") as string | undefined,
    password: formData.get("password") as string | undefined,
  };

  if (!values.email || !values.password) {
    return { error: "Email and password are required" };
  }

  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid login credentials" };
  }

  return { success: "Login successful" };
};
