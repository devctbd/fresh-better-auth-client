import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const AuthNavBar = async () => {
  return (
    <header className="border-b py-5">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-2xl font-bold">
              DevCt Better Auth
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AuthNavBar;
