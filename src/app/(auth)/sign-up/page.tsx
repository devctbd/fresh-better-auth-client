import { Register } from "@/components/auth/Sign-up";
import React from "react";
import { getServerSession } from "@/lib/getServerSession";
import { redirect } from "next/navigation";

const SignUp = async () => {
  const session = await getServerSession();
  const user = session?.user;

  if (user) redirect("/dashboard");

  return (
    <div>
      <Register />
    </div>
  );
};

export default SignUp;
