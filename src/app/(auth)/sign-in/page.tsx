import React from "react";
import { SignInForm } from "@/components/auth/Sign-in";
import { getServerSession } from "@/lib/getServerSession";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await getServerSession();
  const user = session?.user;

  if (user) redirect("/dashboard");

  return (
    <div>
      <SignInForm />
    </div>
  );
};

export default SignIn;
