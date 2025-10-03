"use server";

import { auth } from "@/lib/auth";
import { RegisterFormValues } from "@/components/auth/Sign-up";
import { APIError } from "better-auth/api";
import { LoginFormValues } from "@/components/auth/Sign-in";
import { revalidatePath } from "next/cache";

export async function registerUser(data: RegisterFormValues) {
  try {
    const result = await auth.api.signUpEmail({
      body: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    // Ensure dashboard and related layouts fetch fresh data after auth state changes
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "User registered successfully",
      data: result.user,
    };
  } catch (error) {
    if (error instanceof APIError) {
      return { success: false, message: error.message };
    }
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "Something went wrong" };
  }
}

export async function SignInUser(values: LoginFormValues) {
  try {
    const result = await auth.api.signInEmail({
      body: {
        email: values.email,
        password: values.password,
      },
    });

    // Ensure dashboard and related layouts fetch fresh data after auth state changes
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "User signed in successfully",
      data: result.user,
    };
  } catch (error) {
    if (error instanceof APIError) {
      return { success: false, message: error.message };
    }
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "Something went wrong" };
  }
}
