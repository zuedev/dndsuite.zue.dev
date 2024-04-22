"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-[red] hover:bg-[orange] px-2 py-1"
    >
      Logout
    </button>
  );
}
