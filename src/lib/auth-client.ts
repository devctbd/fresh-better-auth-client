import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
});

export const { signOut } = authClient;

export const signIn = async (provider: "google" | "github") => {
  const data = await authClient.signIn.social({
    provider,
    callbackURL: "/dashboard",
  });

  return data;
};
