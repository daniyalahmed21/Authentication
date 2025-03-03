"use server";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";

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
    return { error: "Email and password are required", success: "" };
  }

  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid login credentials", success: "" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { error: "", success: "Login successful!" }; 
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!", success: "" };
        default:
          return { error: "Something went wrong!", success: "" };
      }
    }
    throw err; 
  }
};
