"use client";

import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <button
      onClick={() => signIn()}
      className="bg-[#5865f2] hover:bg-[#4853a4] px-2 py-1"
    >
      Login
    </button>
  );
}
