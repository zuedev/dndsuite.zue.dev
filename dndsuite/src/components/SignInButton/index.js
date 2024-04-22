import { signIn } from "@/auth";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord");
      }}
    >
      <button
        type="submit"
        className="bg-[#5865f2] hover:bg-[#4853a4] px-2 py-1"
      >
        Login
      </button>
    </form>
  );
}
